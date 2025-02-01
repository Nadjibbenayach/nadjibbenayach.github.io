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

        label {
            display: block;
            margin: 10px 0 5px;
            font-size: 18px;
        }

        input[type="range"] {
            width: 100%;
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

        .dark-mode {
            background-color: white;
            color: black;
        }

        .dark-mode .container {
            background-color: #ddd;
        }

        .dark-mode .btn {
            background-color: #005B82;
            color: white;
        }

        .dark-mode .btn:hover {
            background-color: #00496e;
        }
    </style>
</head>
<body>
    <h1>⚽ نظام الذكاء الاصطناعي لتقييم اللاعبين</h1>
    <div class="container">
        <!-- إدخال القيم -->
        <label for="speed">⚡ السرعة: <span id="speedValue">50</span></label>
        <input type="range" id="speed" min="0" max="99" value="50" oninput="updateValue('speed')">

        <label for="shooting">🎯 التسديد: <span id="shootingValue">50</span></label>
        <input type="range" id="shooting" min="0" max="99" value="50" oninput="updateValue('shooting')">

        <label for="defense">🛡️ الدفاع: <span id="defenseValue">50</span></label>
        <input type="range" id="defense" min="0" max="99" value="50" oninput="updateValue('defense')">

        <!-- أزرار التحكم -->
        <button class="btn" onclick="calculateOverall()">تحليل شامل</button>
        <button class="btn" onclick="toggleDarkMode()">وضع داكن/فاتح</button>

        <!-- النتيجة -->
        <div class="result" id="result">
            <p>نتيجة التحليل ستظهر هنا...</p>
        </div>
    </div>

    <script>
        // تحديث القيم المعروضة عند تحريك الشرائح
        function updateValue(stat) {
            const value = document.getElementById(stat).value;
            document.getElementById(stat + "Value").textContent = value;
        }

        // حساب النتيجة الإجمالية
        function calculateOverall() {
            const speed = parseInt(document.getElementById('speed').value);
            const shooting = parseInt(document.getElementById('shooting').value);
            const defense = parseInt(document.getElementById('defense').value);

            const overall = Math.round((speed + shooting + defense) / 3);
            document.getElementById('result').innerHTML = `<h2>التقييم الإجمالي: ${overall} ⭐</h2>`;
        }

        // تبديل الوضع الداكن/الفاتح
        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
        }
    </script>
</body>
</html>
