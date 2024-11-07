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

        /* النافذة المنبثقة */
        .popup {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80%;
            max-width: 400px;
            background-color: #fff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            z-index: 102;
            padding: 20px;
            text-align: center;
        }

        .popup.active {
            display: block;
        }

        .popup h3 {
            margin-bottom: 10px;
        }

        .popup button {
            margin: 5px;
            padding: 10px;
            font-size: 16px;
            background-color: #ff4d4d;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        .popup button:hover {
            background-color: #ff7878;
        }

        /* تصميم متجاوب للهواتف */
        @media (max-width: 600px) {
            .site-title {
                font-size: 20px;
                margin-top: 60px;
            }

            .menu-button {
                font-size: 20px;
            }
            
            .sidebar button {
                font-size: 16px;
            }
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
</div>

<!-- قسم المحتوى الرئيسي -->
<div id="content">
    <h2>التذاكر المتاحة</h2>
    <ul>
        <li><button onclick="selectBus('بنعياش بوالنوار')">حافلة بنعياش بوالنوار</button></li>
        <li><button onclick="selectBus('بن عياش عنتر')">حافلة بن عياش عنتر</button></li>
    </ul>
</div>

<!-- نافذة منبثقة لاختيار السعر -->
<div class="popup" id="pricePopup">
    <h3 id="busName"></h3>
    <p>اختر السعر:</p>
    <button onclick="purchaseTicket(30)">30 دج</button>
    <button onclick="purchaseTicket(25)">25 دج</button>
    <button onclick="purchaseTicket(20)">20 دج</button>
    <button onclick="closePopup()">إلغاء</button>
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
            <ul>
                <li><button onclick="selectBus('بنعياش بوالنوار')">حافلة بنعياش بوالنوار</button></li>
                <li><button onclick="selectBus('بن عياش عنتر')">حافلة بن عياش عنتر</button></li>
            </ul>
        `;
        toggleSidebar();
    }

    // عرض قسم الأفلام
    function showMovies() {
        document.getElementById("content").innerHTML = `
            <h2>أفلام مختارة</h2>
            <p>هنا يمكنك عرض الأفلام المختارة التي يقترحها المستخدمون.</p>
        `;
        toggleSidebar();
    }

    // عرض قسم المسلسلات مع الفيديو
    function showSeries() {
        document.getElementById("content").innerHTML = `
            <h2>مسلسلات مختارة</h2>
            <div class="series-video">
                <video controls width="100%">
                    <source src="https://your-github-username.github.io/repository-name/videos/your-series-video.mp4" type="video/mp4">
                    المتصفح الخاص بك لا يدعم تشغيل الفيديو.
                </video>
            </div>
        `;
        toggleSidebar();
    }

    // وظيفة اختيار الحافلة وفتح النافذة المنبثقة لاختيار السعر
    function selectBus(busName) {
        document.getElementById("busName").innerText = "حافلة " + busName;
        document.getElementById("pricePopup").classList.add("active");
    }

    // وظيفة شراء التذكرة وإغلاق النافذة المنبثقة
    function purchaseTicket(price) {
        alert("تم شراء التذكرة بسعر " + price + " دج. شكرًا لك!");
        closePopup();
    }

    // إغلاق النافذة المنبثقة
    function closePopup() {
        document.getElementById("pricePopup").classList.remove("active");
    }
</script>

</body>
</html>
