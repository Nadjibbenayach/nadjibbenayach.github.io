<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>نظام تقييم اللاعبين الاحترافي - FC 25</title>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --gold: linear-gradient(135deg, #FFD700 0%, #D4AF37 100%);
            --dark-bg: #1a1a1a;
            --card-bg: #2a2a2a;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Cairo', sans-serif;
            background: var(--dark-bg);
            color: white;
            min-height: 100vh;
            padding: 2rem;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            position: relative;
        }

        h1 {
            text-align: center;
            margin: 2rem 0;
            font-size: 2.5rem;
            background: var(--gold);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .content-wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            align-items: start;
        }

        .form-container {
            background: var(--card-bg);
            padding: 2rem;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            border: 1px solid rgba(255,215,0,0.2);
        }

        .input-group {
            margin-bottom: 1.5rem;
            position: relative;
        }

        .input-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-size: 1.1rem;
            color: #FFD700;
        }

        .input-group input {
            width: 100%;
            padding: 0.8rem;
            border: 2px solid #444;
            border-radius: 8px;
            background: #333;
            color: white;
            font-size: 1.1rem;
            transition: all 0.3s ease;
        }

        .input-group input:focus {
            outline: none;
            border-color: #FFD700;
            box-shadow: 0 0 10px rgba(255,215,0,0.3);
        }

        .stats-range {
            display: flex;
            justify-content: space-between;
            font-size: 0.9rem;
            color: #888;
            margin-top: 0.3rem;
        }

        button {
            background: var(--gold);
            color: #1a1a1a;
            padding: 1rem 2rem;
            border: none;
            border-radius: 8px;
            font-size: 1.1rem;
            font-weight: 700;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
            width: 100%;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        button:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(255,215,0,0.4);
        }

        .card {
            background: var(--card-bg);
            border-radius: 15px;
            padding: 2rem;
            position: sticky;
            top: 2rem;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            border: 1px solid rgba(255,215,0,0.2);
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.5s ease;
        }

        .card.visible {
            opacity: 1;
            transform: translateY(0);
        }

        .rating {
            font-size: 4rem;
            text-align: center;
            background: var(--gold);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 1rem;
            font-weight: 900;
        }

        .position {
            text-align: center;
            font-size: 1.5rem;
            color: #FFD700;
            margin-bottom: 2rem;
            text-transform: uppercase;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
        }

        .stat-item {
            background: rgba(255,215,0,0.1);
            padding: 1rem;
            border-radius: 8px;
            border: 1px solid rgba(255,215,0,0.2);
        }

        .stat-item span {
            display: block;
            text-align: center;
            font-size: 1.2rem;
        }

        .stat-label {
            color: #FFD700;
            margin-bottom: 0.5rem;
            font-size: 0.9rem;
        }

        .player-type {
            text-align: center;
            margin-top: 1.5rem;
            font-size: 1.2rem;
            color: #FFD700;
        }

        @media (max-width: 768px) {
            .content-wrapper {
                grid-template-columns: 1fr;
            }
            
            .card {
                position: static;
                margin-top: 2rem;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>نظام تقييم اللاعبين الاحترافي ⚽</h1>
        
        <div class="content-wrapper">
            <div class="form-container">
                <div class="input-group">
                    <label>⚡ السرعة</label>
                    <input type="number" id="pace" min="0" max="99" value="75">
                    <div class="stats-range">
                        <span>0</span>
                        <span>99</span>
                    </div>
                </div>

                <!-- Repeat similar input-group for other stats -->
                
                <button onclick="calculateRating()">حساب التقييم ⚡</button>
            </div>

            <div class="card" id="playerCard">
                <div class="rating" id="overall">89</div>
                <div class="position" id="position">Central Midfielder</div>
                
                <div class="stats-grid">
                    <div class="stat-item">
                        <span class="stat-label">السرعة</span>
                        <span id="paceStat">84</span>
                    </div>
                    <!-- Repeat similar stat-item for other stats -->
                </div>

                <div class="player-type" id="playerType">لاعب تقني مبدع</div>
            </div>
        </div>
    </div>

    <script>
        const POSITIONS = {
            'GK': ['حارس مرمى', 0x1F3C0],
            'CB': ['مدافع مركزي', 0x26BD],
            'FB': ['ظهير', 0x1F3BE],
            'CM': ['وسط ميدان', 0x1F3AF],
            'AM': ['صانع ألعاب', 0x1F4A1],
            'WG': ['جناح', 0x1F3C6],
            'ST': ['مهاجم', 0x26BD]
        };

        const PLAYER_TYPES = {
            technical: ['تقني مبدع', '#4CAF50'],
            physical: ['قوة بدنية', '#F44336'],
            balanced: ['متوازن', '#2196F3']
        };

        function calculateRating() {
            // جمع القيم وتحويلها لأرقام
            const stats = {
                pace: clampValue(parseInt(document.getElementById('pace').value), 0, 99),
                // جمع باقي الإحصائيات بنفس الطريقة
            };

            // حساب التقييم الإجمالي
            const weights = {
                GK: { defense: 0.4, physical: 0.3, passing: 0.2, other: 0.1 },
                DEF: { defense: 0.3, physical: 0.25, pace: 0.2, passing: 0.15, dribbling: 0.1 },
                // إضافة أوزان للمراكز الأخرى
            };

            // تحديد المركز ونوع اللاعب
            const positionData = determinePosition(stats);
            const playerType = determinePlayerType(stats);

            // تحديث الواجهة
            updateCard(stats, positionData, playerType);
        }

        function determinePosition(stats) {
            // منطق متقدم لتحديد المركز
            if (stats.defense > 85 && stats.physical > 80) {
                return POSITIONS.CB;
            }
            // إضافة شروط أخرى
        }

        function determinePlayerType(stats) {
            // تحديد نوع اللاعب بناءً على الإحصائيات
            const technicalScore = stats.dribbling + stats.passing;
            const physicalScore = stats.physical + stats.pace;
            
            if (technicalScore > physicalScore + 15) return PLAYER_TYPES.technical;
            if (physicalScore > technicalScore + 15) return PLAYER_TYPES.physical;
            return PLAYER_TYPES.balanced;
        }

        function updateCard(stats, position, playerType) {
            document.getElementById('playerCard').classList.add('visible');
            // تحديث كافة العناصر
            document.getElementById('playerType').style.color = playerType[1];
        }

        function clampValue(value, min, max) {
            return Math.min(Math.max(value, min), max);
        }

        // إضافة مؤثرات عند التحميل
        window.addEventListener('load', () => {
            document.getElementById('playerCard').classList.add('visible');
        });
    </script>
</body>
</html>
