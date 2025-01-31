<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>بطاقة تقييم اللاعب - FC 25</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #121212;
            color: white;
            text-align: center;
        }
        .container {
            max-width: 400px;
            margin: auto;
            padding: 20px;
        }
        .form-container {
            background: #222;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 20px;
        }
        label {
            display: block;
            margin: 10px 0 5px;
        }
        input {
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            border-radius: 5px;
            border: none;
        }
        button {
            width: 100%;
            padding: 10px;
            background: gold;
            border: none;
            cursor: pointer;
            font-weight: bold;
        }
        .card {
            background: linear-gradient(135deg, #FFD700, #DAA520);
            border-radius: 10px;
            padding: 20px;
            color: black;
            font-weight: bold;
        }
        .rating {
            font-size: 40px;
            font-weight: bold;
        }
        .position {
            font-size: 24px;
            margin-bottom: 10px;
        }
        .stats p {
            font-size: 18px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>حساب تقييم اللاعب - FC 25</h1>
        <div class="form-container">
            <label>⚡ السرعة:</label>
            <input type="number" id="pace" min="0" max="99" value="50">
            
            <label>🎯 التمرير:</label>
            <input type="number" id="passing" min="0" max="99" value="50">

            <label>🎯 التسديد:</label>
            <input type="number" id="shooting" min="0" max="99" value="50">

            <label>🛡️ الدفاع:</label>
            <input type="number" id="defending" min="0" max="99" value="50">

            <label>⚽ المراوغة:</label>
            <input type="number" id="dribbling" min="0" max="99" value="50">

            <label>💪 البنية:</label>
            <input type="number" id="physical" min="0" max="99" value="50">

            <button onclick="calculateRating()">🔍 حساب التقييم</button>
        </div>

        <div class="card">
            <div class="rating" id="overall">??</div>
            <div class="position" id="position">؟؟؟</div>
            <div class="stats">
                <p>⚡ السرعة: <span id="paceStat">??</span></p>
                <p>🎯 التمرير: <span id="passingStat">??</span></p>
                <p>🎯 التسديد: <span id="shootingStat">??</span></p>
                <p>🛡️ الدفاع: <span id="defendingStat">??</span></p>
                <p>⚽ المراوغة: <span id="dribblingStat">??</span></p>
                <p>💪 البنية: <span id="physicalStat">??</span></p>
            </div>
        </div>
    </div>

    <script>
        function calculateRating() {
            let pace = parseInt(document.getElementById("pace").value);
            let passing = parseInt(document.getElementById("passing").value);
            let shooting = parseInt(document.getElementById("shooting").value);
            let defending = parseInt(document.getElementById("defending").value);
            let dribbling = parseInt(document.getElementById("dribbling").value);
            let physical = parseInt(document.getElementById("physical").value);

            // حساب التقييم الإجمالي بطريقة مشابهة لـ FC 25
            let overall = Math.round((pace * 0.2) + (passing * 0.15) + (shooting * 0.2) + (defending * 0.15) + (dribbling * 0.15) + (physical * 0.15));

            // تحديد المركز بناءً على القيم المدخلة
            let position = "غير محدد";
            if (pace >= 80 && shooting >= 75 && defending < 50) {
                position = "مهاجم (ST)";
            } else if (passing >= 80 && dribbling >= 75) {
                position = "صانع ألعاب (CAM)";
            } else if (defending >= 80 && physical >= 75) {
                position = "مدافع (CB)";
            } else if (pace >= 80 && defending >= 70) {
                position = "ظهير (RB/LB)";
            } else {
                position = "وسط ميدان (CM)";
            }

            // تحديث البطاقة بالنتائج
            document.getElementById("overall").innerText = overall;
            document.getElementById("position").innerText = position;
            
            document.getElementById("paceStat").innerText = pace;
            document.getElementById("passingStat").innerText = passing;
            document.getElementById("shootingStat").innerText = shooting;
            document.getElementById("defendingStat").innerText = defending;
            document.getElementById("dribblingStat").innerText = dribbling;
            document.getElementById("physicalStat").innerText = physical;
        }
    </script>
</body>
</html>
