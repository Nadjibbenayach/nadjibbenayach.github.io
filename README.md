<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="تطبيق متكامل لتحليل أداء اللاعبين وتحديد مركزهم بناءً على الإحصائيات والتحديات">
    <title>نظام الذكاء الاصطناعي لتقييم اللاعبين</title>
    <style>
        :root {
            --main-color: #FFD700;
            --secondary-color: #005B82;
        }

        body {
            font-family: 'Tajawal', sans-serif;
            background: linear-gradient(135deg, #1a1a1a, #2d2d2d);
            color: white;
            min-height: 100vh;
            margin: 0;
        }

        .container {
            max-width: 900px;
            margin: auto;
            padding: 20px;
            text-align: center;
        }

        .ai-section {
            background: rgba(0, 0, 0, 0.7);
            border-radius: 15px;
            padding: 20px;
            margin: 20px 0;
            backdrop-filter: blur(10px);
        }

        label {
            font-size: 18px;
            margin-bottom: 10px;
            display: block;
        }

        input {
            margin: 10px 0;
        }

        .input-group {
            margin: 15px 0;
            text-align: left;
        }

        .btn {
            background-color: var(--main-color);
            color: black;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            margin: 10px;
        }

        .btn:hover {
            background-color: #ffa500;
        }

        .challenge-box {
            background: #333;
            padding: 15px;
            border-radius: 10px;
            margin: 10px 0;
        }

        .challenge-box h3 {
            color: var(--main-color);
        }

        .result-box {
            margin-top: 20px;
            padding: 15px;
            border-radius: 10px;
            background: #444;
        }

        .result-box span {
            font-weight: bold;
            color: var(--main-color);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>نظام الذكاء الاصطناعي لتقييم اللاعبين ⚽</h1>

        <div class="ai-section">
            <h2>أدخل بيانات التحديات</h2>
            <form id="player-form">
                <div class="challenge-box">
                    <h3>تحدي السرعة</h3>
                    <label>المسافة: 30 متر</label>
                    <label>الوقت المستغرق (ثانية):</label>
                    <input type="number" id="speed-time" placeholder="أدخل الزمن" required>
                </div>

                <div class="challenge-box">
                    <h3>تحدي التمرير</h3>
                    <label>عدد التمريرات الناجحة من 10 محاولات:</label>
                    <input type="number" id="passing-score" min="0" max="10" placeholder="أدخل عدد التمريرات" required>
                </div>

                <div class="challenge-box">
                    <h3>تحدي التسديد</h3>
                    <label>عدد التسديدات الناجحة من 10 محاولات:</label>
                    <input type="number" id="shooting-score" min="0" max="10" placeholder="أدخل عدد التسديدات" required>
                </div>

                <div class="challenge-box">
                    <h3>تحدي المراوغة</h3>
                    <label>عدد المخاريط المراوغة بنجاح من 10:</label>
                    <input type="number" id="dribbling-score" min="0" max="10" placeholder="أدخل عدد المراوغات" required>
                </div>

                <div class="challenge-box">
                    <h3>تحدي البدنية</h3>
                    <label>عدد القفزات العمودية (سم):</label>
                    <input type="number" id="physical-score" placeholder="أدخل الارتفاع" required>
                </div>

                <button type="button" class="btn" onclick="calculatePlayerStats()">تحليل شامل</button>
            </form>
        </div>

        <div class="result-box" id="result-box" style="display: none;">
            <h2>نتيجة التحليل</h2>
            <p>السرعة: <span id="speed-result"></span></p>
            <p>التمرير: <span id="passing-result"></span></p>
            <p>التسديد: <span id="shooting-result"></span></p>
            <p>المراوغة: <span id="dribbling-result"></span></p>
            <p>البدنية: <span id="physical-result"></span></p>
            <h3>المركز المقترح: <span id="suggested-position"></span></h3>
        </div>
    </div>

    <script>
        function calculatePlayerStats() {
            const speedTime = parseFloat(document.getElementById("speed-time").value);
            const passingScore = parseInt(document.getElementById("passing-score").value);
            const shootingScore = parseInt(document.getElementById("shooting-score").value);
            const dribblingScore = parseInt(document.getElementById("dribbling-score").value);
            const physicalScore = parseInt(document.getElementById("physical-score").value);

            // حساب القيم بناءً على التحديات
            const speed = Math.max(0, Math.min(99, Math.floor((30 / speedTime) * 10)));
            const passing = passingScore * 10;
            const shooting = shootingScore * 10;
            const dribbling = dribblingScore * 10;
            const physical = Math.max(0, Math.min(99, physicalScore));

            // تحديد المركز
            let position = "غير معروف";
            if (speed >= 85 && shooting >= 85) position = "ST";
            else if (dribbling >= 85 && passing >= 85) position = "CAM";
            else if (physical >= 85 && speed >= 75) position = "CB";
            else if (passing >= 85 && speed >= 75) position = "CM";

            // عرض النتائج
            document.getElementById("speed-result").textContent = speed;
            document.getElementById("passing-result").textContent = passing;
            document.getElementById("shooting-result").textContent = shooting;
            document.getElementById("dribbling-result").textContent = dribbling;
            document.getElementById("physical-result").textContent = physical;
            document.getElementById("suggested-position").textContent = position;

            document.getElementById("result-box").style.display = "block";
        }
    </script>
</body>
</html>
