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
            <label>الزمن المستغرق (ثوانٍ) لركض 30 مترًا:</label>
            <input type="number" id="pace-time" min="3" max="15" value="10">
            <button class="btn" onclick="calculatePace()">حساب السرعة</button>
        </div>

        <div class="challenge-box">
            <h3>تحدي البدنية</h3>
            <label>عدد تمارين الضغط خلال دقيقة:</label>
            <input type="number" id="physical-score" min="0" max="100" value="30">
            <button class="btn" onclick="calculatePhysical()">حساب البدنية</button>
        </div>

        <div class="challenge-box">
            <h3>تحدي المراوغة</h3>
            <label>الزمن المستغرق (ثوانٍ) للمراوغة حول 10 مخاريط:</label>
            <input type="number" id="dribbling-score" min="10" max="30" value="15">
            <button class="btn" onclick="calculateDribbling()">حساب المراوغة</button>
        </div>

        <div class="challenge-box">
            <h3>تحدي التمرير</h3>
            <label>عدد التمريرات الناجحة نحو هدف على بعد 20 مترًا من أصل 10:</label>
            <input type="number" id="passing-score" min="0" max="10" value="5">
            <button class="btn" onclick="calculatePassing()">حساب التمرير</button>
        </div>

        <div class="challenge-box">
            <h3>تحدي التسديد</h3>
            <label>عدد التسديدات الناجحة نحو المرمى من مسافة 16 مترًا من أصل 10:</label>
            <input type="number" id="shooting-score" min="0" max="10" value="3">
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
            const pace = Math.max(0, Math.min(99, Math.round(99 - (time * 3))));
            document.getElementById('pace-time').value = pace;
        }

        function calculatePhysical() {
            const score = parseInt(document.getElementById('physical-score').value);
            const physical = Math.max(0, Math.min(99, Math.round(score * 1.1)));
            document.getElementById('physical-score').value = physical;
        }

        function calculateDribbling() {
            const time = parseFloat(document.getElementById('dribbling-score').value);
            const dribbling = Math.max(0, Math.min(99, Math.round(99 - (time * 2))));
            document.getElementById('dribbling-score').value = dribbling;
        }

        function calculatePassing() {
            const score = parseInt(document.getElementById('passing-score').value);
            const passing = Math.max(0, Math.min(99, Math.round(score * 10)));
            document.getElementById('passing-score').value = passing;
        }

        function calculateShooting() {
            const score = parseInt(document.getElementById('shooting-score').value);
            const shooting = Math.max(0, Math.min(99, Math.round(score * 10)));
            document.getElementById('shooting-score').value = shooting;
        }

        function analyzePlayer() {
            const pace = parseInt(document.getElementById('pace-time').value);
            const physical = parseInt(document.getElementById('physical-score').value);
            const dribbling = parseInt(document.getElementById('dribbling-score').value);
            const passing = parseInt(document.getElementById('passing-score').value);
            const shooting = parseInt(document.getElementById('shooting-score').value);

            const overall = Math.round((pace + physical + dribbling + passing + shooting) / 5);

            let position = '';
            if (pace >= 85 && shooting >= 80) {
                position = 'ST';
            } else if (pace >= 80 && dribbling >= 80) {
                position = 'LW / RW';
            } else if (passing >= 80 && shooting >= 75) {
                position = 'CAM';
            } else if (physical >= 85 && passing >= 70) {
                position = 'CDM / CM';
            } else if (physical >= 90 && pace >= 75) {
                position = 'CB / LB / RB';
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
