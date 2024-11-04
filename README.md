<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>موقع نشر المعلومات</title>
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Tajawal', sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
        }

        /* الرأس */
        header {
            background-color: #007BFF;
            color: #fff;
            padding: 20px;
            text-align: center;
            font-size: 1.8em;
        }

        /* قسم الروابط الاجتماعية */
        .social-icons {
            display: flex;
            justify-content: center;
            gap: 20px;
            padding: 20px;
            background-color: #0056b3;
        }

        .social-icons a {
            display: inline-block;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            overflow: hidden;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s;
        }

        .social-icons a img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .social-icons a:hover {
            transform: scale(1.1);
        }

        /* صندوق تسجيل الدخول والتسجيل */
        .container {
            max-width: 400px;
            margin: 20px auto;
            padding: 25px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h2 {
            text-align: center;
            margin-bottom: 20px;
        }

        input[type="text"], input[type="password"], input[type="email"], button {
            width: 100%;
            padding: 12px;
            margin: 8px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
            font-size: 1em;
        }

        button {
            background-color: #007BFF;
            color: #fff;
            border: none;
            cursor: pointer;
            font-size: 1.1em;
            font-weight: bold;
            transition: background-color 0.3s;
            padding: 12px;
        }

        button:hover { 
            background-color: #0056b3; 
        }

        .footer {
            text-align: center;
            padding: 15px;
            background-color: #007BFF;
            color: #fff;
            position: fixed;
            bottom: 0;
            width: 100%;
            font-size: 0.9em;
        }

        /* الوضع الليلي */
        .dark-mode {
            background-color: #333;
            color: #f9f9f9;
        }

        .dark-mode .container, .dark-mode .footer {
            background-color: #444;
            color: #fff;
        }

        .dark-mode button {
            background-color: #444;
            color: #fff;
            border: 1px solid #007BFF;
        }
    </style>
</head>
<body>

<header>
    مرحبا بكم في موقع نشر المعلومات
</header>

<!-- قسم الروابط الاجتماعية -->
<div class="social-icons">
    <a href="https://www.facebook.com/"><img src="facebook_icon.jpg" alt="Facebook"></a>
    <a href="https://www.instagram.com/nadjibbenayach/profilecard/?igsh=MXA4am9hYjl5Z3NuMQ=="><img src="instagram_icon.jpg" alt="Instagram"></a>
    <a href="https://www.tiktok.com/"><img src="tiktok_icon.jpg" alt="TikTok"></a>
</div>

<!-- صندوق تسجيل الدخول -->
<div class="container" id="login-container">
    <h2>تسجيل الدخول</h2>
    <input type="text" id="username" placeholder="اسم المستخدم">
    <input type="password" id="password" placeholder="كلمة المرور">
    <button onclick="login()">دخول</button>
    <button onclick="guestLogin()">الدخول كضيف</button>
    <p>أو</p>
    <button onclick="showRegisterForm()">إنشاء حساب جديد</button>
</div>

<!-- صندوق التسجيل -->
<div class="container" id="register-container" style="display: none;">
    <h2>إنشاء حساب جديد</h2>
    <input type="text" id="new-username" placeholder="اسم المستخدم">
    <input type="email" id="email" placeholder="البريد الإلكتروني">
    <input type="password" id="new-password" placeholder="كلمة المرور">
    <button onclick="register()">إنشاء الحساب</button>
    <button onclick="backToLogin()">عودة لتسجيل الدخول</button>
</div>

<div class="footer">
    &copy; 2023 موقع نشر المعلومات. جميع الحقوق محفوظة.
    <button onclick="toggleDarkMode()">تبديل الوضع الليلي</button>
</div>

<script>
    // تبديل بين وضع تسجيل الدخول وإنشاء الحساب
    function showRegisterForm() {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("register-container").style.display = "block";
    }

    function backToLogin() {
        document.getElementById("register-container").style.display = "none";
        document.getElementById("login-container").style.display = "block";
    }

    // دالة تسجيل الدخول
    function login() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        if (username === "" || password === "") {
            alert("يرجى إدخال اسم المستخدم وكلمة المرور.");
        } else if (username === "user" && password === "pass") {
            alert("تم تسجيل الدخول بنجاح.");
        } else {
            alert("اسم المستخدم أو كلمة المرور غير صحيحة.");
        }
    }

    // دالة الدخول كضيف
    function guestLogin() {
        alert("تم تسجيل الدخول كضيف.");
    }

    // دالة إنشاء حساب جديد
    function register() {
        var newUsername = document.getElementById("new-username").value;
        var email = document.getElementById("email").value;
        var newPassword = document.getElementById("new-password").value;
        if (newUsername === "" || email === "" || newPassword === "") {
            alert("يرجى تعبئة جميع الحقول.");
        } else {
            alert("تم إنشاء الحساب بنجاح.");
            backToLogin();
        }
    }

    // دالة تبديل الوضع الليلي
    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
    }
</script>

</body>
</html>
