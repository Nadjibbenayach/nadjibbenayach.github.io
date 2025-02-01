<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="تطبيق متكامل لتحليل أداء اللاعبين وتوقع تطورهم في FC 25">
    <title>نظام الذكاء الاصطناعي لتقييم اللاعبين - FC 25 PRO</title>
    
    <!-- تحميل الخطوط -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap">
    
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
            touch-action: manipulation;
            text-align: center;
        }

        .container {
            max-width: 800px;
            margin: auto;
            padding: 20px;
        }

        .ai-section {
            background: rgba(0,0,0,0.7);
            border-radius: 15px;
            padding: 20px;
            margin: 20px 0;
            backdrop-filter: blur(10px);
        }

        .input-group {
            margin: 15px 0;
        }

        .input-range {
            width: 100%;
            height: 15px;
            border-radius: 10px;
            background: #333;
            outline: none;
        }

        .input-range::-webkit-slider-thumb {
            width: 25px;
            height: 25px;
            border-radius: 50%;
            background: var(--main-color);
            cursor: pointer;
            box-shadow: 0 0 10px rgba(255,215,0,0.5);
        }

        .card {
            background: linear-gradient(45deg, #1a1a1a, #2d2d2d);
            border-radius: 20px;
            padding: 30px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            transition: transform 0.6s;
        }

        .rating {
            font-size: 24px;
            font-weight: bold;
        }

        .btn-3d {
            background: var(--main-color);
            border: none;
            padding: 10px 20px;
            margin: 5px;
            cursor: pointer;
            border-radius: 10px;
            font-size: 18px;
            transition: transform 0.2s;
        }

        .btn-3d:hover {
            transform: scale(1.1);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 class="dynamic-bg">نظام الذكاء الاصطناعي لتقييم اللاعبين ⚽</h1>
        
        <div class="ai-section">
            <div class="ai-message">مرحبًا! أدخل إحصائيات اللاعب لتحليل مستواه.</div>

            <div class="input-group">
                <label>⚡ السرعة: <span id="paceValue">50</span></label>
                <input type="range" class="input-range" id="pace" min="0" max="99" value="50">
            </div>

            <div class="control-panel">
                <button class="btn-3d" onclick="calculateRating()">تحليل شامل ⚡</button>
                <button class="btn-3d" onclick="generateReport()">تقرير مفصل 📊</button>
                <button class="btn-3d" onclick="comparePlayers()">مقارنة اللاعبين ⚖️</button>
            </div>
        </div>

        <div class="card">
            <div class="rating">⭐ 84</div>
        </div>
    </div>

    <!-- تحميل سكريبت Confetti محليًا -->
    <script src="assets/js/confetti.min.js"></script>

    <script>
        function calculateRating() {
            const pace = document.getElementById('pace').value;
            document.getElementById('paceValue').innerText = pace;
            const overall = Math.round(pace * 0.4 + 50);
            document.querySelector('.rating').innerText = `⭐ ${overall}`;

            // تشغيل تأثير الاحتفال
            const confettiSettings = { target: 'confetti-canvas' };
            const confetti = new ConfettiGenerator(confettiSettings);
            confetti.render();
        }

        function generateReport() {
            alert("🚀 سيتم إضافة ميزة التقرير لاحقًا!");
        }

        function comparePlayers() {
            alert("⚖️ ميزة المقارنة قيد التطوير!");
        }

        function setupServiceWorker() {
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('assets/js/serviceWorker.js')
                    .then(() => console.log('✅ Service Worker مسجل بنجاح'))
                    .catch(err => console.error('❌ فشل التسجيل', err));
            }
        }

        // تحديث القيم عند تغيير الشرائح
        document.getElementById('pace').addEventListener('input', function() {
            document.getElementById('paceValue').innerText = this.value;
        });

        document.addEventListener("DOMContentLoaded", () => {
            setupServiceWorker();
        });
    </script>
</body>
</html>
