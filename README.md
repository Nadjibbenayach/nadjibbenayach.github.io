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

        /* الشريط الجانبي */
        .sidebar {
            position: fixed;
            top: 0;
            left: 0;
            width: 200px;
            height: 100%;
            background-color: #333;
            padding-top: 20px;
            display: flex;
            flex-direction: column;
        }

        .sidebar button {
            display: block;
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            background-color: #ff4d4d;
            color: white;
            border: none;
            cursor: pointer;
            font-size: 16px;
            text-align: left;
        }

        .sidebar button:hover {
            background-color: #ff7878;
        }

        /* تنسيق المحتوى */
        #content {
            margin-left: 220px;
            padding: 20px;
            width: 100%;
            max-width: 800px;
        }

        /* تنسيق الفيديو */
        .series-video {
            margin-top: 20px;
            text-align: center;
            width: 100%;
            max-width: 600px;
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        /* تنسيق اسم الموقع المتحرك */
        .site-title {
            font-size: 24px;
            color: red;
            font-weight: bold;
            animation: slide 3s infinite alternate;
            margin: 20px 0;
        }

        @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(20px); }
        }
    </style>
</head>
<body>

<!-- اسم الموقع المتحرك -->
<h1 class="site-title">موقع لبيع التذاكر - حافلات بن عياش</h1>

<!-- الشريط الجانبي -->
<div class="sidebar">
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
    // عرض خيارات الحافلات
    function showBuses() {
        document.getElementById("content").innerHTML = `
            <h2>التذاكر المتاحة</h2>
            <ul>
                <li>حافلة بنعياش بوالنوار</li>
                <li>حافلة بن عياش عنتر</li>
            </ul>
        `;
    }

    // عرض قسم الأفلام
    function showMovies() {
        document.getElementById("content").innerHTML = `
            <h2>أفلام مختارة</h2>
            <p>هنا يمكنك عرض الأفلام المختارة التي يقترحها المستخدمون.</p>
        `;
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
    }
</script>

</body>
</html>
