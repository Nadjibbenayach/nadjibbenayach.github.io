<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>موقع حافلات بن عياش - بيع التذاكر</title>
    <style>
        /* تنسيقات عامة */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f9;
            color: #333;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        /* تنسيق العنوان المتحرك */
        .site-title {
            font-size: 24px;
            color: #ff4d4d;
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
            margin-top: 80px;
            padding: 20px;
            width: 100%;
            max-width: 600px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        /* أزرار محتوى الحافلات */
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

        /* تنسيق قسم المعلومات */
        .info-section {
            display: none;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            max-width: 600px;
            margin-top: 20px;
            text-align: center;
        }

        .info-section.active {
            display: block;
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
<h1 class="site-title">موقع حافلات بن عياش - بيع التذاكر</h1>

<!-- الشريط الجانبي -->
<div class="sidebar" id="sidebar">
    <button onclick="showBuses()">التذاكر المتاحة</button>
    <button onclick="showMovies()">أفلام مختارة</button>
    <button onclick="showSeries()">مسلسلات مختارة</button>
    <button onclick="showBusInfo()">معلومات الحافلات</button>
    <button onclick="showTours()">الرحلات السياحية</button>
    <button onclick="showFAQ()">الأسئلة المتكررة</button>
    <button onclick="showGame()">لعبة المغامر</button>
</div>

<!-- قسم المحتوى الرئيسي -->
<div id="content">
    <h2>التذاكر المتاحة</h2>
    <button class="bus-button" onclick="showPriceList('بن عياش بوالنوار')">حافلة بنعياش بوالنوار</button>
    <button class="bus-button" onclick="showPriceList('بن عياش عنتر')">حافلة بن عياش عنتر</button>
</div>

<!-- قسم تفاصيل اللعبة -->
<div class="info-section" id="game">
    <h2>لعبة المغامر</h2>
    <p><strong>القصة:</strong> في عالم خيالي، يسعى المغامر لاستعادة الحجر السحري المسروق من قريته، في رحلة مليئة بالمغامرات والتحديات.</p>
    <p><strong>التحديات:</strong> الوحوش والألغاز، وتجاوز العقبات الطبيعية.</p>
    <p><strong>طريقة اللعب:</strong> تحكم باستخدام أزرار الاتجاهات للتنقل، وجمع الجرعات لتجديد الصحة.</p>
</div>

<script>
    function toggleSidebar() {
        document.getElementById("sidebar").classList.toggle("active");
    }

    function showGame() {
        closeAllSections();
        document.getElementById("game").classList.add("active");
    }

    // إغلاق الأقسام
    function closeAllSections() {
        document.querySelectorAll('.info-section').forEach(section => section.classList.remove('active'));
    }

</script>
</body>
</html>
