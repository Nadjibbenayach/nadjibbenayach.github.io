<!DOCTYPE html><html lang="ar">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>متابعة جمع المال - 30 يوم</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      direction: rtl;
      text-align: center;
      padding: 20px;
    }
    .day-inputs {
      display: flex;
      overflow-x: auto;
      gap: 5px;
      margin-bottom: 20px;
    }
    .day-inputs input {
      width: 60px;
      padding: 5px;
      text-align: center;
    }
    .stats {
      margin-top: 20px;
      font-size: 18px;
    }
    canvas {
      max-width: 100%;
      margin-top: 30px;
    }
    .progress-bar {
      width: 100%;
      height: 25px;
      background: #e0e0e0;
      border-radius: 12px;
      overflow: hidden;
      margin-top: 20px;
    }
    .progress {
      height: 100%;
      background-color: #4caf50;
      text-align: center;
      color: white;
      line-height: 25px;
    }
    .reset-btn {
      margin-top: 10px;
      background-color: #f44336;
      color: white;
      padding: 5px 10px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    @media print {
      button, canvas, .reset-btn { display: none; }
    }
  </style>
</head>
<body>
  <h1>موقع متابعة جمع المال - 30 يوم</h1>  <div class="day-inputs" id="inputsContainer"></div><button onclick="calculate()">احسب الآن</button> <button onclick="window.print()">🖨️ طباعة</button> <button class="reset-btn" onclick="resetData()">🔄 إعادة تعيين</button>

  <div class="progress-bar">
    <div class="progress" id="progressBar">0%</div>
  </div>  <div class="stats">
    <p>💰 المبلغ المجموع حتى الآن: <span id="collected">0</span> دج</p>
    <p>🎯 المبلغ المتبقي للوصول إلى 50,000 دج: <span id="remaining">50000</span> دج</p>
    <p>📆 المبلغ اليومي المطلوب (بناءً على الأيام المتبقية): <span id="dailyNeeded">0</span> دج</p>
    <p>📈 أعلى مبلغ تم جمعه في يوم واحد: <span id="maxDay">0</span> دج</p>
    <p>📉 أقل مبلغ تم جمعه في يوم (≠0): <span id="minDay">0</span> دج</p>
  </div><canvas id="progressChart"></canvas>

  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>  <script>
    const target = 50000;
    const container = document.getElementById('inputsContainer');

    for (let i = 1; i <= 30; i++) {
      const input = document.createElement('input');
      input.type = 'number';
      input.min = 0;
      input.placeholder = `يوم ${i}`;
      input.className = 'day';
      input.value = localStorage.getItem(`day${i}`) || '';
      input.addEventListener('input', () => {
        localStorage.setItem(`day${i}`, input.value);
      });
      container.appendChild(input);
    }

    function calculate() {
      const inputs = document.querySelectorAll('.day');
      let total = 0;
      let filledDays = 0;
      let values = [];
      let min = Infinity;
      let max = -Infinity;

      inputs.forEach((input, index) => {
        const val = parseFloat(input.value);
        if (!isNaN(val)) {
          total += val;
          filledDays++;
          if (val > max) max = val;
          if (val < min && val > 0) min = val;
        }
        values[index] = isNaN(val) ? 0 : val;
      });

      const remaining = Math.max(0, target - total);
      const daysLeft = 30 - filledDays;
      const dailyNeeded = daysLeft > 0 ? Math.ceil(remaining / daysLeft) : 0;
      const percentage = Math.min(100, Math.floor((total / target) * 100));

      document.getElementById('collected').innerText = total;
      document.getElementById('remaining').innerText = remaining;
      document.getElementById('dailyNeeded').innerText = dailyNeeded;
      document.getElementById('maxDay').innerText = max > 0 ? max : 0;
      document.getElementById('minDay').innerText = min !== Infinity ? min : 0;
      document.getElementById('progressBar').style.width = percentage + '%';
      document.getElementById('progressBar').innerText = percentage + '%';

      updateChart(values);
    }

    let chart;
    function updateChart(data) {
      const ctx = document.getElementById('progressChart').getContext('2d');
      if (chart) chart.destroy();
      chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: Array.from({ length: 30 }, (_, i) => `يوم ${i + 1}`),
          datasets: [{
            label: 'الدخل اليومي',
            data: data,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }

    function resetData() {
      if (confirm("هل أنت متأكد أنك تريد إعادة تعيين كل البيانات؟")) {
        for (let i = 1; i <= 30; i++) {
          localStorage.removeItem(`day${i}`);
        }
        location.reload();
      }
    }

    window.addEventListener('load', calculate);
  </script></body>
</html>
