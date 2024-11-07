<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>موقع بيع التذاكر - تجربة تفاعلية</title>
    <style>
        /* تنسيق أساسي للصفحة */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #ffdddd;
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow-x: hidden;
        }

        /* شريط التنقل العلوي */
        .navbar {
            width: 100%;
            background-color: #ff4d4d;
            color: white;
            padding: 15px;
            text-align: center;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 10;
        }

        .navbar button {
            position: absolute;
            left: 10px;
            top: 15px;
            background: none;
            border: none;
            color: white;
            font-size: 24px;
            cursor: pointer;
        }

        /* حركة اسم الموقع */
        .navbar h1 {
            display: inline-block;
            animation: scrollText 10s linear infinite;
        }

        @keyframes scrollText {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
        }

        /* شكل التنين في أعلى الشاشة */
        .dragon {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 100px;
            height: 100px;
            background: url('https://www.example.com/chinese-dragon.png') no-repeat center center;
            background-size: contain;
            animation: moveDragon 5s linear infinite;
            z-index: 5;
        }

        @keyframes moveDragon {
            0% { transform: translate(-50%, 0); }
            50% { transform: translate(-50%, 20px); }
            100% { transform: translate(-50%, 0); }
        }

        /* النافذة الرئيسية */
        .main-content {
            margin-top: 100px;
            text-align: center;
            width: 100%;
            max-width: 600px;
            padding: 20px;
        }

        /* نافذة اختيار الحافلة */
        .bus-selection {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            gap: 15px;
            margin-top: 20px;
        }

        .bus {
            background-color: #ff4d4d;
            color: white;
            padding: 15px;
            border-radius: 10px;
            cursor: pointer;
            width: 45%;
            text-align: center;
            transition: transform 0.3s;
        }

        .bus:hover {
            transform: scale(1.05);
        }

        /* صفحة الأسعار */
        .prices {
            display: none;
            text-align: center;
            margin-top: 20px;
            padding: 15px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        /* القائمة الجانبية */
        .sidebar {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            width: 250px;
            background-color: #333;
            color: white;
            padding: 20px;
            z-index: 20;
        }

        .sidebar h2 {
            font-size: 24px;
            margin-bottom: 20px;
        }

        .sidebar button {
            background-color: #ff4d4d;
            color: white;
            padding: 10px;
            border: none;
            margin-bottom: 10px;
            cursor: pointer;
            width: 100%;
        }

        .sidebar button:hover {
            background-color: #cc3a3a;
        }

        /* شاشة رفع التوصيات */
        .upload-section {
            display: none;
            text-align: center;
            margin-top: 20px;
            padding: 15px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        /* أزرار العودة */
        .back-button {
            background-color: #ff4d4d;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 15px;
        }

        .back-button:hover {
            background-color: #cc3a3a;
        }
    </style>
</head>
<body>
    <!-- شريط التنقل العلوي -->
    <div class="navbar">
        <button onclick="toggleSidebar()">☰</button>
        <h1>موقع بيع التذاكر</h1>
    </div>

    <!-- شكل التنين في أعلى الشاشة -->
    <div class="dragon"></div>

    <!-- القائمة الجانبية -->
    <div class="sidebar" id="sidebar">
        <h2>خيارات الترفيه</h2>
        <button onclick="showUploadSection('movies')">أفلام مختارة</button>
        <button onclick="showUploadSection('series')">مسلسلات مختارة</button>
        <button class="back-button" onclick="closeSidebar()">إغلاق القائمة</button>
    </div>

    <!-- النافذة الرئيسية -->
    <div class="main-content">
        <!-- نافذة اختيار الحافلة -->
        <div class="bus-selection">
            <div class="bus" onclick="showPrices('bus1')">بن عياش بوالنوار</div>
            <div class="bus" onclick="showPrices('bus2')">بن عياش عنتر</div>
        </div>

        <!-- نافذة الأسعار -->
        <div class="prices" id="prices">
            <h2>الأسعار</h2>
            <p id="price-details">هنا ستظهر أسعار التذاكر بناءً على الحافلة المختارة.</p>
            <button class="back-button" onclick="goBack()">العودة</button>
        </div>

        <!-- شاشة رفع التوصيات -->
        <div class="upload-section" id="uploadSection">
            <h2 id="uploadTitle"></h2>
            <form>
                <input type="text" placeholder="اسم الفيلم أو المسلسل" required><br><br>
                <textarea placeholder="لماذا توصي به؟" required></textarea><br><br>
                <button type="submit">رفع التوصية</button>
            </form>
            <button class="back-button" onclick="goBackToMain()">العودة</button>
        </div>
    </div>

    <script>
        // فتح القائمة الجانبية
        function toggleSidebar() {
            document.getElementById('sidebar').style.display = 'block';
        }

        // إغلاق القائمة الجانبية
        function closeSidebar() {
            document.getElementById('sidebar').style.display = 'none';
        }

        // عرض شاشة رفع التوصيات
        function showUploadSection(type) {
            document.getElementById('uploadSection').style.display = 'block';
            document.querySelector('.bus-selection').style.display = 'none';
            document.getElementById('sidebar').style.display = 'none';
            
            if (type === 'movies') {
                document.getElementById('uploadTitle').textContent = 'رفع توصيات الأفلام';
            } else {
                document.getElementById('uploadTitle').textContent = 'رفع توصيات المسلسلات';
            }
        }

        // العودة إلى النافذة الرئيسية
        function goBackToMain() {
            document.getElementById('uploadSection').style.display = 'none';
            document.querySelector('.bus-selection').style.display = 'flex';
        }

        // عرض الأسعار بناءً على الحافلة المختارة
        function showPrices(bus) {
            const prices = {
                bus1: "السعر لحافلة بن عياش بوالنوار: 50 درهم",
                bus2: "السعر لحافلة بن عياش عنتر: 40 درهم"
            };
            document.getElementById('price-details').textContent = prices[bus];
            document.getElementById('prices').style.display = 'block';
            document.querySelector('.bus-selection').style.display = 'none';
        }

        // العودة إلى نافذة اختيار الحافلة
        function goBack() {
            document.getElementById('prices').style.display = 'none';
            document.querySelector('.bus-selection').style.display = 'flex';
        }
    </script>
</body>
</html>
