<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>موقع لبيع التذاكر - حافلات بن عياش</title>
    <style>
        /* تنسيقات عامة */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f8f8f8;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        /* تنسيق العنوان المتحرك */
        .site-title {
            font-size: 24px;
            color: red;
            font-weight: bold;
            animation: slide 3s infinite alternate;
            margin: 20px 0;
            text-align: center;
        }

        @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(20px); }
        }

        /* الشريط الجانبي */
        .sidebar {
            position: fixed;
            top: 0;
            left: -250px;
            width: 250px;
            height: 100%;
            background-color: #333;
            padding-top: 20px;
            display: flex;
            flex-direction: column;
            transition: left 0.3s ease;
            z-index: 100;
        }

        .sidebar.active {
            left: 0;
        }

        .sidebar button {
            display: block;
            width: 100%;
            padding: 15px;
            margin: 10px 0;
            background-color: #ff4d4d;
            color: white;
            border: none;
            cursor: pointer;
            font-size: 18px;
            text-align: left;
        }

        .sidebar button:hover {
            background-color: #ff7878;
        }

        /* زر القائمة */
        .menu-button {
            font-size: 24px;
            padding: 10px 15px;
            background-color: #ff4d4d;
            color: white;
            border: none;
            cursor: pointer;
            position: fixed;
            top: 10px;
            left: 10px;
            z-index: 101;
            border-radius: 5px;
        }

        /* تنسيق المحتوى */
        #content {
            margin: 0;
            padding: 20px;
            width: 100%;
            max-width: 600px;
        }

        /* تأثير ثلاثي الأبعاد لأزرار الحافلات */
        .bus-button {
            background-color: #ff4d4d;
            color: white;
            font-size: 20px;
            padding: 15px 30px;
            margin: 15px;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .bus-button:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
        }

        /* صفحة عرض قائمة الأسعار */
        .price-list {
            display: none;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            max-width: 600px;
            margin-top: 20px;
            text-align: center;
        }

        .price-list.active {
            display: block;
        }

        .price-list h3 {
            margin-bottom: 20px;
        }

        .price-option {
            padding: 15px;
            font-size: 18px;
            background-color: #ff4d4d;
            color: white;
            margin: 10px 0;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.2s;
        }

        .price-option:hover {
            background-color: #ff7878;
        }

        /* مشغل الفيديو */
        .video-container {
            margin-top: 20px;
            text-align: center;
        }
    </style>
</head>
<body>

<!-- زر القائمة -->
<button class="menu-button" onclick="toggleSidebar()">☰</button>

<!-- اسم الموقع المتحرك -->
<h1 class="site-title">موقع لبيع التذاكر - حافلات بن عياش</h1>

<!-- الشريط الجانبي -->
<div class="sidebar" id="sidebar">
    <button onclick="showBuses()">التذاكر المتاحة</button>
    <button onclick="showMovies()">أفلام مختارة</button>
    <button onclick="showSeries()">مسلسلات مختارة</button>
    <button onclick="showChallenges()">تحديات ممتعة</button>
    <button onclick="showVirtualTours()">سفر افتراضي</button>
</div>

<!-- قسم المحتوى الرئيسي -->
<div id="content">
    <h2>التذاكر المتاحة</h2>
    <button class="bus-button" onclick="showPriceList('بنعياش بوالنوار')">حافلة بنعياش بوالنوار</button>
    <button class="bus-button" onclick="showPriceList('بن عياش عنتر')">حافلة بن عياش عنتر</button>
</div>

<!-- صفحة عرض قائمة الأسعار -->
<div class="price-list" id="priceList">
    <h3 id="selectedBusName"></h3>
    <div class="price-option" onclick="purchaseTicket(30)">سعر التذكرة: 30 دج</div>
    <div class="price-option" onclick="purchaseTicket(25)">سعر التذكرة: 25 دج</div>
    <div class="price-option" onclick="purchaseTicket(20)">سعر التذكرة: 20 دج</div>
    <button onclick="closePriceList()">إغلاق</button>
</div>

<script>
    // وظيفة إظهار وإخفاء الشريط الجانبي
    function toggleSidebar() {
        document.getElementById("sidebar").classList.toggle("active");
    }

    // عرض خيارات الحافلات
    function showBuses() {
        document.getElementById("content").innerHTML = `
            <h2>التذاكر المتاحة</h2>
            <button class="bus-button" onclick="showPriceList('بنعياش بوالنوار')">حافلة بنعياش بوالنوار</button>
            <button class="bus-button" onclick="showPriceList('بن عياش عنتر')">حافلة بن عياش عنتر</button>
        `;
        toggleSidebar();
    }

    // عرض صفحة الأفلام
    function showMovies() {
        document.getElementById("content").innerHTML = `
            <h2>أفلام مختارة</h2>
            <p>هنا يمكنك عرض الأفلام المختارة التي يقترحها المستخدمون.</p>
        `;
        toggleSidebar();
    }

    // عرض صفحة المسلسلات مع الفيديو
    function showSeries() {
        document.getElementById("content").innerHTML = `
            <h2>مسلسلات مختارة</h2>
            <div class="video-container">
                <iframe src="https://player.vimeo.com/video/1027608824?h=3f27f344ef" width="100%" height="315" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </div>
        `;
        toggleSidebar();
    }

    // عرض تحديات ممتعة
    function showChallenges() {
        document.getElementById("content").innerHTML = `
            <h2>تحديات ممتعة</h2>
            <p>اختر تحديًا وشارك إنجازاتك مع الآخرين!</p>
        `;
        toggleSidebar();
    }

    // عرض السفر الافتراضي
    function showVirtualTours() {
        document.getElementById("content").innerHTML = `
            <h2>السفر الافتراضي</h2>
            <p>استمتع بجولات افتراضية للوجهات السياحية الشهيرة حول العالم!</p>
        `;
        toggleSidebar();
    }

    // عرض قائمة الأسعار لحافلة معينة
    function showPriceList(busName) {
        document.getElementById("selectedBusName").innerText = "قائمة الأسعار - " + busName;
        document.getElementById("priceList").class
