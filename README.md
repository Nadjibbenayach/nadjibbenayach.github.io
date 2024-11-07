<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>موقع لبيع التذاكر - حافلات</title>
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

        /* تنسيق الفيديو */
        .series-video {
            margin-top: 20px;
            text-align: center;
            width: 100%;
            max-width: 100%;
            padding: 10px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

            .series-video {
                padding: 5px;
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
        <li>حافلة بنعياش بوالنوار</li>
        <li>حافلة بن عياش عنتر</li>
    </ul>
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
                <li>حافلة بنعياش بوالنوار</li>
                <li>حافلة بن عياش عنتر</li>
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
</script>

</body>
</html>
