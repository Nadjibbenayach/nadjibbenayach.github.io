<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>موقع بيع التذاكر</title>
    <style>
        /* تنسيق عام */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f8f9fa;
            display: flex;
            flex-direction: column;
        }

        /* شاشة الترحيب */
        .welcome-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #007BFF;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 100px;
            z-index: 1000;
            opacity: 1;
            transition: opacity 3s ease;
        }

        /* اختفاء شاشة الترحيب */
        .welcome-screen.hide {
            opacity: 0;
            visibility: hidden;
        }

        /* زر القائمة الجانبية */
        .menu-button {
            position: absolute;
            top: 10px;
            left: 10px;
            padding: 10px;
            background-color: #007BFF;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 18px;
            z-index: 1100;
        }

        /* تنسيق القائمة الجانبية */
        .sidebar {
            width: 250px;
            position: fixed;
            left: -250px;
            top: 0;
            height: 100%;
            background-color: #333;
            color: #fff;
            padding: 20px;
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
            overflow-y: auto;
            transition: left 0.3s ease;
            z-index: 1050;
        }

        .sidebar.open {
            left: 0;
        }

        .sidebar h3 {
            font-size: 20px;
            color: #f2f2f2;
            margin-bottom: 20px;
            text-align: center;
            border-bottom: 1px solid #555;
            padding-bottom: 10px;
        }

        .sidebar ul {
            list-style-type: none;
            padding: 0;
        }

        .sidebar ul li {
            margin: 15px 0;
        }

        .sidebar ul li a {
            color: #f2f2f2;
            text-decoration: none;
            display: block;
            padding: 10px;
            border-radius: 5px;
            background-color: #444;
            transition: background-color 0.3s, transform 0.2s;
            font-size: 16px;
            text-align: center;
        }

        .sidebar ul li a:hover {
            background-color: #555;
            transform: scale(1.05);
        }

        /* تنسيق الجزء العلوي */
        .header-image {
            width: 100%;
            max-height: 200px;
            object-fit: cover;
            display: block;
        }

        /* تنسيق المحتوى الرئيسي */
        .content {
            padding: 20px;
            width: 100%;
            display: none;
        }

        .container {
            max-width: 700px;
            margin: auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        /* تنسيق تذاكر البيع */
        .ticket {
            border: 1px solid #ddd;
            padding: 15px;
            margin: 10px 0;
            border-radius: 5px;
            background-color: #f9f9f9;
        }

        .ticket h3 {
            margin: 0;
            font-size: 18px;
            color: #007BFF;
        }

        .ticket p {
            margin: 5px 0;
            font-size: 16px;
        }

        .buy-button {
            padding: 8px 15px;
            color: #fff;
            background-color: #007BFF;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .buy-button:hover {
            background-color: #0056b3;
        }

        /* تنسيق نافذة اختيار الحافلات */
        .bus-selection {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            gap: 20px;
            background-color: #f8f9fa;
        }

        .bus-button {
            padding: 15px 30px;
            color: #fff;
            background-color: #007BFF;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 20px;
            transition: background-color 0.3s;
        }

        .bus-button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>

    <!-- شاشة الترحيب -->
    <div class="welcome-screen" id="welcomeScreen">
        <div id="logo">N</div>
    </div>

    <!-- زر القائمة الجانبية -->
    <button class="menu-button" onclick="toggleSidebar()">☰ القائمة</button>

    <!-- القائمة الجانبية -->
    <div class="sidebar" id="sidebar">
        <h3>القائمة الجانبية</h3>
        <ul>
            <li><a href="#">الصفحة الرئيسية</a></li>
            <li><a href="#">حول الموقع</a></li>
            <li><a href="#">تذاكر البيع</a></li>
            <li><a href="#">التواصل معنا</a></li>
        </ul>
    </div>

    <!-- إضافة صورة في أعلى الصفحة -->
    <img src="https://i.pinimg.com/564x/2c/3f/3d/2c3f3d37ebfbc29c.jpg" alt="صورة علوية" class="header-image">

    <!-- نافذة اختيار الحافلات -->
    <div class="bus-selection" id="busSelection">
        <button class="bus-button" onclick="showTickets('حافلة 1')">حافلة 1</button>
        <button class="bus-button" onclick="showTickets('حافلة 2')">حافلة 2</button>
    </div>

    <!-- المحتوى الرئيسي لعرض التذاكر -->
    <div class="content" id="ticketContent">
        <div class="container">
            <h2 id="busTitle">تذاكر البيع</h2>

            <!-- التذاكر -->
            <div class="ticket">
                <h3>العيايشة</h3>
                <p>السعر: 30DA</p>
                <button class="buy-button" onclick="showForm('العيايشة', 30)">شراء</button>
            </div>

            <div class="ticket">
                <h3>قاوس</h3>
                <p>السعر: 25DA</p>
                <button class="buy-button" onclick="showForm('قاوس', 25)">شراء</button>
            </div>

            <div class="ticket">
                <h3>الكلم 5</h3>
                <p>السعر: 20DA</p>
                <button class="buy-button" onclick="showForm('الكلم 5', 20)">شراء</button>
            </div>
        </div>
    </div>

    <script>
        // دالة لإخفاء شاشة الترحيب وعرض اختيار الحافلات
        function fadeOutLogo() {
            var welcomeScreen = document.getElementById("welcomeScreen");
            welcomeScreen.classList.add("hide");
            setTimeout(function() {
                welcomeScreen.style.display = "none";
                document.getElementById("busSelection").style.display = "flex";
            }, 3000); // 3 ثوانٍ للتحول التدريجي
        }

        // دالة لفتح وإغلاق القائمة الجانبية
        function toggleSidebar() {
            var sidebar = document.getElementById("sidebar");
            sidebar.classList.toggle("open");
        }

        // دالة لعرض التذاكر الخاصة بالحافلة المختارة
        function showTickets(busName) {
            document.getElementById("busSelection").style.display = "none";
            document.getElementById("ticketContent").style.display = "block";
            document.getElementById("busTitle").innerText = `تذاكر البيع - ${busName}`;
        }

        // بدء التأثير عند تحميل الصفحة
        window.onload = fadeOutLogo;
    </script>
</body>
</html>
``
