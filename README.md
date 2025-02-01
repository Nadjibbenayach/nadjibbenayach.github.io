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

        .input-group {
            margin: 15px 0;
        }

        input[type="number"] {
            width: 60px;
            padding: 5px;
            border-radius: 5px;
            border: 1px solid #ccc;
            text-align: center;
        }

        .challenge-box {
            margin: 20px auto;
            padding: 15px;
            background-color: #444;
            border-radius: 10px;
            width: 90%;
            max-width: 500px;
            text-align: left;
        }

        .challenge-box label {
            display: block;
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <h1>⚽ نظام الذكاء الاصطناعي لتقييم اللاعبين</h1>
    <div class="container">
        <!-- إدخالات التحديات -->
        <div class="challenge-box">
            <h3>تحدي السرعة</h3>
            <label>أدخل الزمن المستغرق (ثوانٍ):</label>
            <input type="number" id="pace-time" min="1" max="30" value="10">
            <button class="btn" onclick="calculatePace()">حساب السرعة</button>
        </div>

        <div class="challenge-box">
            <h3>تحدي البدنية</h3>
            <label>عدد التمرينات الناجحة (تمارين الضغط):</label>
            <input type="number" id="physical-score" min="0" max="100" value="20">
            <button class="btn" onclick="calculatePhysical()">حساب البدنية</button>
        </div>

        <div class="challenge-box">
            <h3>تحدي المراوغة</h3>
            <label>عدد المراوغات الناجحة:</label>
            <input type="number" id="dribbling-score" min="0" max="50" value="10">
            <button class="btn" onclick="calculateDribbling()">حساب المراوغة</button>
        </div>

        <div class="challenge-box">
            <h3>تحدي التمرير</h3>
            <label>عدد التمريرات الناجحة:</label>
            <input type="number" id="passing-score" min="0" max="50" value="15">
            <button class="btn" onclick="calculatePassing()">حساب التمرير</button>
        </div>

        <div class="challenge-box">
            <h3>تحدي التسديد</h3>
            <label>عدد التسديدات الناجحة:</label>
            <input type="number" id="shooting-score" min="0" max="20" value="5">
            <button class="btn" onclick="calculateShooting()">حساب التسديد</button>
        </div>

        <!-- زر التحليل الشامل -->
        <button class="btn" onclick="analyzePlayer()">تحليل شامل</button>

        <!-- عرض النتائج -->
        <div class="result" id="result"></div>
    </div>

    <script>
        // حسابات التحديات
        function calculatePace() {
            const time = parseFloat(document.getElementById('pace-time').value);
            const pace = Math.max(0, Math.min(99, Math.round(30 / time * 99 / 3))); // معادلة تقديرية
            document.getElementById('pace-time').value = pace;
        }

        function calculatePhysical() {
            const score = parseInt(document.getElementById('physical-score').value);
            const physical = Math.max(0, Math.min(99, Math.round(score * 99 / 100))); // معادلة تقديرية
            document.getElementById('physical-score').value = physical;
        }

        function calculateDribbling() {
            const score = parseInt(document.getElementById('dribbling-score').value);
            const dribbling = Math.max(0, Math.min(99, Math.round(score * 99 / 50))); // معادلة تقديرية
            document.getElementById('dribbling-score').value = dribbling;
        }

        function calculatePassing() {
            const score = parseInt(document.getElementById('passing-score').value);
            const passing = Math.max(0, Math.min(99, Math.round(score * 99 / 50))); // معادلة تقديرية
            document.getElementById('passing-score').value = passing;
        }

        function calculateShooting() {
            const score = parseInt(document.getElementById('shooting-score').value);
            const shooting = Math.max(0, Math.min(99, Math.round(score * 99 / 20))); // معادلة تقديرية
            document.getElementById('shooting-score').value = shooting;
        }

        // تحليل شامل
        function analyzePlayer() {
            const pace = parseInt(document.getElementById('pace-time').value);
            const physical = parseInt(document.getElementById('physical-score').value);
            const dribbling = parseInt(document.getElementById('dribbling-score').value);
            const passing = parseInt(document.getElementById('passing-score').value);
            const shooting = parseInt(document.getElementById('shooting-score').value);

            const overall = Math.round((pace + physical + dribbling + passing + shooting) / 5);

            let position = '';
            if (pace >= 80 && shooting >= 75) {
                position = 'ST'; // مهاجم
            } else if (pace >= 80 && dribbling >= 75) {
                position = 'LW / RW'; // جناح
            } else if (physical >= 80 && passing >= 70) {
                position = 'CM / CDM'; // لاعب وسط
            } else if (physical >= 80 && pace >= 70) {
                position = 'CB / LB / RB'; // مدافع
            } else {
                position = 'متعدد الاستخدامات';
            }

            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `
                <h2>التقييم العام: ${overall}</h2>
                <h3>المركز المقترح: ${position}</h3>
            `;
        }
    </script>
</body>
</html>
