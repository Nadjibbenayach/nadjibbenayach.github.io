<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>نظام الذكاء الاصطناعي لتقييم اللاعبين</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #1a1a1a;
            color: white;
            text-align: center;
        }

        h1 {
            color: #FFD700;
            margin: 20px 0;
        }

        .container {
            margin: 20px auto;
            padding: 20px;
            background-color: #333;
            border-radius: 10px;
            width: 90%;
            max-width: 600px;
        }

        .btn {
            background-color: #FFD700;
            color: black;
            border: none;
            padding: 10px 20px;
            margin: 10px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }

        .btn:hover {
            background-color: #e0c200;
        }

        .result {
            margin-top: 20px;
            padding: 20px;
            background-color: #444;
            border-radius: 10px;
        }

        .position-box {
            margin: 20px auto;
            padding: 15px;
            background-color: #222;
            border-radius: 10px;
            text-align: center;
        }

        .position-btn {
            display: inline-block;
            margin: 5px;
            padding: 10px 15px;
            background-color: #FFD700;
            color: black;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
        }

        .position-btn:hover {
            background-color: #e0c200;
        }

        .selected-position {
            margin-top: 15px;
            font-size: 18px;
            font-weight: bold;
        }

    </style>
</head>
<body>
    <h1>⚽ نظام الذكاء الاصطناعي لتقييم اللاعبين</h1>
    <div class="container">
        <!-- اختيار مركز اللاعب -->
        <div class="position-box">
            <h2>🛡️ اختر مركز اللاعب</h2>
            <div>
                <button class="position-btn" onclick="selectPosition('ST')">ST</button>
                <button class="position-btn" onclick="selectPosition('LW')">LW</button>
                <button class="position-btn" onclick="selectPosition('RW')">RW</button>
                <button class="position-btn" onclick="selectPosition('LB')">LB</button>
                <button class="position-btn" onclick="selectPosition('CB')">CB</button>
                <button class="position-btn" onclick="selectPosition('RB')">RB</button>
                <button class="position-btn" onclick="selectPosition('CM')">CM</button>
                <button class="position-btn" onclick="selectPosition('CDM')">CDM</button>
                <button class="position-btn" onclick="selectPosition('CAM')">CAM</button>
                <button class="position-btn" onclick="selectPosition('CF')">CF</button>
                <button class="position-btn" onclick="selectPosition('RM')">RM</button>
                <button class="position-btn" onclick="selectPosition('LM')">LM</button>
            </div>
            <div class="selected-position" id="selectedPosition">لم يتم اختيار المركز بعد.</div>
        </div>

        <!-- النتائج -->
        <button class="btn" onclick="calculateOverall()">تحليل شامل</button>
        <div class="result" id="overallResult"></div>
    </div>

    <script>
        let playerPosition = ''; // متغير لتخزين المركز المختار

        // وظيفة اختيار المركز
        function selectPosition(position) {
            playerPosition = position;
            document.getElementById('selectedPosition').textContent = `المركز المختار: ${playerPosition}`;
        }

        // حساب التقييم العام
        function calculateOverall() {
            // هنا يمكن دمج باقي القيم أو أي إضافات
            if (playerPosition === '') {
                alert('يرجى اختيار مركز اللاعب قبل التحليل!');
                return;
            }
            const overallScore = Math.floor(Math.random() * 99) + 1; // مثال على حساب عشوائي للتقييم
            document.getElementById('overallResult').innerHTML = `
                <h2>التقييم العام: ${overallScore}</h2>
                <h3>المركز: ${playerPosition}</h3>
            `;
        }
    </script>
</body>
</html>
