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
            background-color: #f4f4f9;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        /* شريط التنقل العلوي */
        .navbar {
            width: 100%;
            background-color: #007bff;
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

        /* شاشة الترحيب */
        .welcome {
            margin-top: 80px;
            text-align: center;
            color: #333;
            animation: fade 3s ease-in-out;
        }

        @keyframes fade {
            from { opacity: 1; }
            to { opacity: 0; }
        }

        /* النافذة الرئيسية */
        .main-content {
            display: none;
            text-align: center;
            margin-top: 80px;
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
            background-color: #007bff;
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

        /* رسالة حول الموقع */
        .about {
            display: none;
            text-align: center;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 10px;
            background-color: #f8f9fa;
            margin: 20px;
        }

        /* أزرار العودة */
        .back-button {
            background-color: #007bff;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 15px;
        }

        .back-button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <!-- شريط التنقل العلوي -->
    <div class="navbar">
        <button onclick="toggleSidebar()">☰</button>
        موقع بيع التذاكر
    </div>

    <!-- شاشة الترحيب -->
    <div class="welcome">
        <h1>مرحبًا بك في موقع بيع التذاكر</h1>
        <p>احجز تذاكرك الآن بسهولة وبضغطة زر.</p>
    </div>

    <!-- النافذة الرئيسية -->
    <div class="main-content">
        <!-- نافذة اختيار الحافلة -->
        <div class="bus-selection">
            <div class="bus" onclick="showPrices('bus1')">حافلة 1</div>
            <div class="bus" onclick="showPrices('bus2')">حافلة 2</div>
            <div class="bus" onclick="showPrices('bus3')">حافلة 3</div>
            <div class="bus" onclick="showPrices('bus4')">حافلة 4</div>
        </div>

        <!-- نافذة الأسعار -->
        <div class="prices" id="prices">
            <h2>الأسعار</h2>
            <p id="price-details">هنا ستظهر أسعار التذاكر بناءً على الحافلة المختارة.</p>
            <button class="back-button" onclick="goBack()">العودة</button>
        </div>

        <!-- رسالة حول الموقع -->
        <div class="about" id="about">
            <h2>حول الموقع</h2>
            <p>تم تطوير هذا الموقع لتوفير تجربة حجز تذاكر سهلة وسريعة للمسافرين. نعمل دائمًا على تحسين خدماتنا لتلبية احتياجاتكم.</p>
            <button class="back-button" onclick="closeAbout()">إغلاق</button>
        </div>
    </div>

    <script>
        // إخفاء شاشة الترحيب وإظهار المحتوى الرئيسي
        setTimeout(() => {
            document.querySelector('.welcome').style.display = 'none';
            document.querySelector('.main-content').style.display = 'block';
        }, 3000);

        // إظهار الأسعار بناءً على الحافلة المختارة
        function showPrices(bus) {
            const prices = {
                bus1: "السعر لحافلة 1: 50 درهم",
                bus2: "السعر لحافلة 2: 40 درهم",
                bus3: "السعر لحافلة 3: 60 درهم",
                bus4: "السعر لحافلة 4: 55 درهم"
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

        // عرض رسالة حول الموقع
        function toggleSidebar() {
            const about = document.getElementById('about');
            if (about.style.display === 'none' || about.style.display === '') {
                about.style.display = 'block';
            } else {
                about.style.display = 'none';
            }
        }

        // إغلاق رسالة حول الموقع
        function closeAbout() {
            document.getElementById('about').style.display = 'none';
        }
    </script>
</body>
</html>
