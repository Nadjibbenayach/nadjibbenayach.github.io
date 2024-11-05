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
            z-index: 1000;
            transition: opacity 1s ease;
        }

        /* زر الحرف N */
        .welcome-button {
            font-size: 80px;
            color: #fff;
            cursor: pointer;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            animation: bounce 1s infinite;
        }

        /* تأثير الارتداد */
        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }

        /* اختفاء شاشة الترحيب */
        .welcome-screen.hide {
            opacity: 0;
            visibility: hidden;
        }

        /* تنسيق القائمة الجانبية */
        .sidebar {
            width: 250px;
            position: fixed;
            left: 0;
            top: 0;
            height: 100%;
            background-color: #333;
            color: #fff;
            padding: 20px;
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
            overflow-y: auto;
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
            width: calc(100% - 250px);
            margin-left: 250px;
            max-height: 200px;
            object-fit: cover;
            display: block;
        }

        /* تنسيق المحتوى الرئيسي */
        .content {
            margin-left: 250px;
            padding: 20px;
            width: calc(100% - 250px);
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

        /* تنسيق النوافذ المنبثقة */
        .popup {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            z-index: 1001;
        }

        .popup.show {
            display: block;
        }

        /* خلفية معتمة للنوافذ المنبثقة */
        .popup-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1000;
        }

        .popup-overlay.show {
            display: block;
        }
    </style>
</head>
<body>

    <!-- شاشة الترحيب -->
    <div class="welcome-screen" id="welcomeScreen">
        <div class="welcome-button" onclick="enterSite()">N</div>
    </div>

    <!-- القائمة الجانبية -->
    <div class="sidebar">
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

    <!-- المحتوى الرئيسي -->
    <div class="content">
        <div class="container">
            <h2>تذاكر البيع</h2>

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

    <!-- نافذة النوافذ المنبثقة لملء الاستمارة -->
    <div class="popup-overlay" id="popupOverlay"></div>
    <div class="popup" id="popupForm">
        <h3>ملء استمارة الطلب</h3>
        <p id="ticketInfo"></p>
        <input type="text" id="name" placeholder="الاسم">
        <input type="text" id="surname" placeholder="اللقب">
        <input type="text" id="phone" placeholder="رقم الهاتف">
        <button onclick="submitForm()">إرسال</button>
        <button onclick="closeForm()">إغلاق</button>
    </div>

    <script>
        // دالة لإخفاء شاشة الترحيب وعرض الموقع
        function enterSite() {
            var welcomeScreen = document.getElementById("welcomeScreen");
            welcomeScreen.style.opacity = "0";
            setTimeout(function() {
                welcomeScreen.style.display = "none";
            }, 1000); // 1 ثانية للتحول تدريجيا
        }

        // دالة لعرض استمارة الطلب
        function showForm(ticketName, ticketPrice) {
            document.getElementById("ticketInfo").innerText =
