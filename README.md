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

        input[type="number"] {
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

        .challenge-box {
            margin: 20px 0;
            padding: 15px;
            background-color: #222;
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
        <!-- تحديات القيم -->
        <div class="challenge-box">
            <h2>⚡ تحدي السرعة</h2>
            <p>ادخل الزمن المستغرق (بالثواني) لقطع 30 متر:</p>
            <input type="number" id="speedChallenge" placeholder="أدخل الزمن">
            <button class="btn" onclick="evaluateSpeed()">احسب القيمة</button>
            <div id="speedResult" class="result"></div>
        </div>

        <div class="challenge-box">
            <h2>🎯 تحدي التسديد</h2>
            <p>ادخل عدد الأهداف المسجلة من 10 تسديدات:</p>
            <input type="number" id="shootingChallenge" placeholder="عدد الأهداف">
            <button class="btn" onclick="evaluateShooting()">احسب القيمة</button>
            <div id="shootingResult" class="result"></div>
        </div>

        <div class="challenge-box">
            <h2>📤 تحدي التمرير</h2>
            <p>ادخل عدد التمريرات الناجحة من 10 محاولات:</p>
            <input type="number" id="passingChallenge" placeholder="عدد التمريرات">
            <button class="btn" onclick="evaluatePassing()">احسب القيمة</button>
            <div id="passingResult" class="result"></div>
        </div>

        <div class="challenge-box">
            <h2>⚙️ تحدي المراوغة</h2>
            <p>ادخل عدد المراوغات الناجحة من 10 محاولات:</p>
            <input type="number" id="dribblingChallenge" placeholder="عدد المراوغات">
            <button class="btn" onclick="evaluateDribbling()">احسب القيمة</button>
            <div id="dribblingResult" class="result"></div>
        </div>

        <div class="challenge-box">
            <h2>💪 تحدي البدنية</h2>
            <p>ادخل عدد التمارين المكتملة بنجاح (من 10):</p>
            <input type="number" id="physicalChallenge" placeholder="عدد التمارين">
            <button class="btn" onclick="evaluatePhysical()">احسب القيمة</button>
            <div id="physicalResult" class="result"></div>
        </div>

        <div class="challenge-box">
            <h2>🛡️ تحدي الدفاع</h2>
            <p>ادخل عدد الكرات المقطوعة من 10 محاولات:</p>
            <input type="number" id="defenseChallenge" placeholder="عدد الكرات">
            <button class="btn" onclick="evaluateDefense()">احسب القيمة</button>
            <div id="defenseResult" class="result"></div>
        </div>

        <button class="btn" onclick="calculateOverall()">تحليل شامل</button>
        <div class="result" id="overallResult"></div>
    </div>

    <script>
        // تقييم تحدي السرعة
        function evaluateSpeed() {
            const time = parseFloat(document.getElementById('speedChallenge').value);
            if (time > 0) {
                const speed = Math.min(99, Math.max(0, Math.round(100 - time * 10)));
                document.getElementById('speedResult').textContent = `القيمة: ${speed}`;
                return speed;
            } else {
                document.getElementById('speedResult').textContent = "الرجاء إدخال زمن صالح.";
                return 0;
            }
        }

        // تقييم تحدي التسديد
        function evaluateShooting() {
            const goals = parseInt(document.getElementById('shootingChallenge').value);
            if (goals >= 0 && goals <= 10) {
                const shooting = Math.round((goals / 10) * 99);
                document.getElementById('shootingResult').textContent = `القيمة: ${shooting}`;
                return shooting;
            } else {
                document.getElementById('shootingResult').textContent = "الرجاء إدخال عدد صالح.";
                return 0;
            }
        }

        // تقييم تحدي التمرير
        function evaluatePassing() {
            const passes = parseInt(document.getElementById('passingChallenge').value);
            if (passes >= 0 && passes <= 10) {
                const passing = Math.round((passes / 10) * 99);
                document.getElementById('passingResult').textContent = `القيمة: ${passing}`;
                return passing;
            } else {
                document.getElementById('passingResult').textContent = "الرجاء إدخال عدد صالح.";
                return 0;
            }
        }

        // تقييم تحدي المراوغة
        function evaluateDribbling() {
            const dribbles = parseInt(document.getElementById('dribblingChallenge').value);
            if (dribbles >= 0 && dribbles <= 10) {
                const dribbling = Math.round((dribbles / 10) * 99);
                document.getElementById('dribblingResult').textContent = `القيمة: ${dribbling}`;
                return dribbling;
            } else {
                document.getElementById('dribblingResult').textContent = "الرجاء إدخال عدد صالح.";
                return 0;
            }
        }

        // تقييم تحدي البدنية
        function evaluatePhysical() {
            const exercises = parseInt(document.getElementById('physicalChallenge').value);
            if (exercises >= 0 && exercises <= 10) {
                const physical = Math.round((exercises / 10) * 99);
                document.getElementById('physicalResult').textContent = `القيمة: ${physical}`;
                return physical;
            } else {
                document.getElementById('physicalResult').textContent = "الرجاء إدخال عدد صالح.";
                return 0;
            }
        }

        // تقييم تحدي الدفاع
        function evaluateDefense() {
            const tackles = parseInt(document.getElementById('defenseChallenge').value);
            if (tackles >= 0 && tackles <= 10) {
                const defense = Math.round((tackles / 10) * 99);
                document.getElementById('defenseResult').textContent = `القيمة: ${defense}`;
                return defense;
            } else {
                document.getElementById('defenseResult').textContent = "الرجاء إدخال عدد صالح.";
                return 0;
            }
        }

        // حساب التقييم العام
        function calculateOverall() {
            const speed = evaluateSpeed();
            const shooting = evaluateShooting();
            const passing = evaluatePassing();
            const dribbling = evaluateDribbling();
            const physical = evaluatePhysical();
            const defense = evaluateDefense();

            const overall = Math.round((speed + shooting + passing + dribbling + physical + defense) / 6);
            document.getElementById('overallResult').innerHTML = `<h2>التقييم العام: ${overall}</h2>`;
        }
    </script>
</body>
</html>
