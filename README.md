<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>نظام الذكاء الاصطناعي لتقييم اللاعبين</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background: #1a1a1a;
            color: #fff;
            text-align: center;
            margin: 0;
            padding: 0;
        }
        h1 {
            color: #FFD700;
        }
        .container {
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            background: #333;
            border-radius: 15px;
        }
        .challenge-box {
            background: #444;
            border: 1px solid #555;
            border-radius: 10px;
            padding: 15px;
            margin: 10px 0;
        }
        .challenge-box label {
            display: block;
            margin-bottom: 10px;
            font-size: 18px;
        }
        .challenge-box input {
            width: 100%;
            padding: 10px;
            font-size: 16px;
            border-radius: 5px;
            border: 1px solid #555;
        }
        button {
            background: #FFD700;
            color: #000;
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            border-radius: 5px;
            cursor: pointer;
            margin: 10px 5px;
        }
        button:hover {
            background: #FFC107;
        }
        .result {
            font-size: 20px;
            margin: 15px 0;
        }
    </style>
</head>
<body>
    <h1>نظام الذكاء الاصطناعي لتقييم اللاعبين</h1>
    <div class="container">
        <div class="challenge-box">
            <label>تحدي السرعة (زمن الركض لمسافة 30 متر بالثواني):</label>
            <input type="number" id="speedChallenge" placeholder="أدخل الزمن بالثواني">
        </div>
        <div class="challenge-box">
            <label>تحدي التمرير (عدد التمريرات الناجحة من 10):</label>
            <input type="number" id="passingChallenge" placeholder="أدخل العدد">
        </div>
        <div class="challenge-box">
            <label>تحدي التسديد (عدد التسديدات الناجحة من 10):</label>
            <input type="number" id="shootingChallenge" placeholder="أدخل العدد">
        </div>
        <div class="challenge-box">
            <label>تحدي المراوغة (عدد المراوغات الناجحة من 10):</label>
            <input type="number" id="dribblingChallenge" placeholder="أدخل العدد">
        </div>
        <div class="challenge-box">
            <label>تحدي البدنية (المدة الزمنية لتحمل التمارين بالثواني):</label>
            <input type="number" id="physicalChallenge" placeholder="أدخل الزمن">
        </div>
        <button onclick="calculateResults()">تحليل شامل</button>
        <button onclick="downloadResults()">تنزيل القيم</button>
        <div class="result" id="result"></div>
    </div>
    <script>
        function calculateResults() {
            const speed = 100 - (document.getElementById("speedChallenge").value * 3);
            const passing = document.getElementById("passingChallenge").value * 10;
            const shooting = document.getElementById("shootingChallenge").value * 10;
            const dribbling = document.getElementById("dribblingChallenge").value * 10;
            const physical = document.getElementById("physicalChallenge").value / 2;

            const finalSpeed = Math.max(0, Math.min(99, speed));
            const finalPassing = Math.max(0, Math.min(99, passing));
            const finalShooting = Math.max(0, Math.min(99, shooting));
            const finalDribbling = Math.max(0, Math.min(99, dribbling));
            const finalPhysical = Math.max(0, Math.min(99, physical));

            const overall = Math.round((finalSpeed + finalPassing + finalShooting + finalDribbling + finalPhysical) / 5);

            let position = "غير محدد";
            if (finalSpeed >= 85 && finalShooting >= 85) position = "ST";
            else if (finalPassing >= 85 && finalDribbling >= 85) position = "CAM";
            else if (finalPhysical >= 85 && finalSpeed >= 85) position = "LB";
            else if (finalShooting >= 80 && finalDribbling >= 80) position = "RW";

            document.getElementById("result").innerHTML = `
                السرعة: ${finalSpeed} <br>
                التمرير: ${finalPassing} <br>
                التسديد: ${finalShooting} <br>
                المراوغة: ${finalDribbling} <br>
                البدنية: ${finalPhysical} <br>
                التقييم العام: ${overall} <br>
                المركز المقترح: ${position}
            `;
        }

        function downloadResults() {
            const result = document.getElementById("result").innerText;
            const blob = new Blob([result], { type: "text/plain" });
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "player-evaluation.txt";
            link.click();
        }
    </script>
</body>
</html>
