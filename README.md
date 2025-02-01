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

        input[type="range"], input[type="number"] {
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

        .challenges {
            margin-top: 20px;
            text-align: left;
            color: #FFD700;
        }

        .challenge-item {
            margin-bottom: 10px;
        }

        .challenge-result {
            color: #00FF00;
            margin-top: 5px;
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

        <label for="passing">📤 التمرير: <span id="passingValue">50</span></label>
        <input type="range" id="passing" min="0" max="99" value="50" oninput="updateValue('passing')">

        <label for="dribbling">⚙️ المراوغة: <span id="dribblingValue">50</span></label>
        <input type="range" id="dribbling" min="0" max="99" value="50" oninput="updateValue('dribbling')">

        <label for="physical">💪 البدنية: <span id="physicalValue">50</span></label>
        <input type="range" id="physical" min="0" max="99" value="50" oninput="updateValue('physical')">

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

    <!-- تحديات -->
    <div class="container challenges">
        <h2>تحديات:</h2>
        <div class="challenge-item">
            <label for="speedChallenge">تحدي السرعة (زمن الركض لـ 30 متر):</label>
            <input type="number" id="speedChallenge" placeholder="أدخل الزمن (ثانية)">
            <button class="btn" onclick="evaluateSpeedChallenge()">تحليل</button>
            <div id="speedChallengeResult" class="challenge-result"></div>
        </div>
    </div>

    <script>
        // تحديث القيم المعروضة عند تحريك الشرائح
        function updateValue(stat) {
            const value = document.getElementById(stat).value;
            document.getElementById(stat + "Value").textContent = value;
        }

        // تحديد المركز بناءً على القيم
        function determinePosition(speed, shooting, passing, defense, physical, dribbling) {
            if (speed > 80 && shooting > 70) return "مهاجم";
            if (passing > 70 && defense > 60) return "وسط ميدان";
            if (defense > 80 && physical > 70) return "مدافع";
            return "لاعب متعدد";
        }

        // حساب النتيجة الإجمالية
        function calculateOverall() {
            const speed = parseInt(document.getElementById('speed').value);
            const shooting = parseInt(document.getElementById('shooting').value);
            const passing = parseInt(document.getElementById('passing').value);
            const dribbling = parseInt(document.getElementById('dribbling').value);
            const physical = parseInt(document.getElementById('physical').value);
            const defense = parseInt(document.getElementById('defense').value);

            // حساب التقييم العام (متوسط المهارات الأساسية)
            const overall = Math.round((speed + shooting + passing + dribbling + physical + defense) / 6);
            const position = determinePosition(speed, shooting, passing, defense, physical, dribbling);

            // عرض النتيجة
            document.getElementById('result').innerHTML = `
                <h2>التقييم الإجمالي: ${overall} ⭐</h2>
                <p>المركز المتوقع: ${position}</p>
            `;
        }

        // تحدي السرعة
        function evaluateSpeedChallenge() {
            const time = parseFloat(document.getElementById('speedChallenge').value);
            if (time > 0 && time <= 10) {
                document.getElementById('speedChallengeResult').textContent = `نتيجة ممتازة!`;
            } else if (time > 10) {
                document.getElementById('speedChallengeResult').textContent = `حاول تحسين الزمن.`;
            } else {
                document.getElementById('speedChallengeResult').textContent = `الرجاء إدخال زمن صالح.`;
            }
        }

        // تبديل الوضع الداكن/الفاتح
        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
        }
    </script>
</body>
</html>
