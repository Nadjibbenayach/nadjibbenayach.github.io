<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>موقع نشر المعلومات</title>
    <style>
        /* تنسيق الصفحة */
        body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            margin: 0;
            padding: 0;
        }

        /* تنسيق الصورة في الأعلى */
        .header-image {
            width: 100%;
            height: auto;
            display: block;
        }

        /* تنسيق الأزرار الرئيسية */
        .container {
            max-width: 400px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        h2 { 
            margin-bottom: 20px;
        }

        /* تنسيق الروابط لأزرار التواصل الاجتماعي */
        .social-icons {
            display: flex;
            justify-content: center;
            margin: 10px 0;
        }

        .social-icons a {
            display: inline-block;
            margin: 0 10px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            overflow: hidden;
        }

        .social-icons img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        /* تنسيق بطاقات التذاكر */
        .ticket {
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 10px;
            margin: 10px 0;
            background-color: #f9f9f9;
            cursor: pointer;
        }

        /* استمارة الطلب */
        .form-container {
            display: none;
            text-align: left;
        }

        input[type="text"], input[type="tel"] {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ddd;
            border-radius: 5px;
        }

        button {
            width: 100%;
            padding: 10px;
            background-color: #007BFF;
            color: #fff;
            border: none;
            cursor: pointer;
            margin-top: 10px;
        }

        button:hover { background-color: #0056b3; }
    </style>
</head>
<body>

    <!-- الصورة في أعلى الصفحة -->
    <img src="your-image.jpg" alt="صورة في أعلى الصفحة" class="header-image">

    <!-- محتوى الصفحة -->
    <div class="container">
        <h2>مرحباً بك في موقعنا</h2>
        <p>تابعنا على مواقع التواصل الاجتماعي</p>

        <!-- روابط التواصل الاجتماعي -->
        <div class="social-icons">
            <a href="https://www.facebook.com"><img src="facebook-icon.jpg" alt="Facebook"></a>
            <a href="https://www.instagram.com/nadjibbenayach"><img src="instagram-icon.jpg" alt="Instagram"></a>
            <a href="https://www.tiktok.com"><img src="tiktok-icon.jpg" alt="TikTok"></a>
        </div>

        <!-- بطاقات التذاكر -->
        <div class="ticket" onclick="showForm('العيايشة', 30)">العيايشة - 30DA</div>
        <div class="ticket" onclick="showForm('قاوس', 25)">قاوس - 25DA</div>
        <div class="ticket" onclick="showForm('الكلم', 20)">الكلم - 20DA</div>

        <!-- استمارة الطلب -->
        <div class="form-container" id="orderForm">
            <h3>طلب التذكرة</h3>
            <p>الاسم: <span id="ticketName"></span></p>
            <p>السعر: <span id="ticketPrice"></span> DA</p>
            <input type="text" id="userName" placeholder="الاسم">
            <input type="text" id="userSurname" placeholder="اللقب">
            <input type="tel" id="userPhone" placeholder="رقم الهاتف">
            <button onclick="submitForm()">إرسال الطلب</button>
        </div>
    </div>

    <!-- سكريبت الجافا سكريبت -->
    <script>
        function showForm(ticketName, ticketPrice) {
            document.getElementById('ticketName').innerText = ticketName;
            document.getElementById('ticketPrice').innerText = ticketPrice;
            document.getElementById('orderForm').style.display = 'block';
        }

        function submitForm() {
            var name = document.getElementById("userName").value;
            var surname = document.getElementById("userSurname").value;
            var phone = document.getElementById("userPhone").value;
            
            if(name && surname && phone) {
                alert("تم إرسال الطلب بنجاح! \n\n" +
                      "الاسم: " + name + "\n" +
                      "اللقب: " + surname + "\n" +
                      "رقم الهاتف: " + phone);
            } else {
                alert("يرجى ملء جميع الحقول.");
            }
        }
    </script>

</body>
</html>
