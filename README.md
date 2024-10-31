
<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>موقع نشر المعلومات</title>
    <style>
        body { font-family: Arial, sans-serif; background-color: #f2f2f2; margin: 0; padding: 0; }
        
        /* تنسيق القسم العلوي */
        header {
            background-color: #007BFF;
            color: #fff;
            padding: 10px 0;
            text-align: center;
        }

        /* تنسيق أيقونات التواصل الاجتماعي */
        .social-icons {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 10px;
        }
        
        .social-icons a {
            display: block;
            width: 40px;
            height: 40px;
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

        /* تنسيق المحتوى الأساسي */
        .container {
            max-width: 400px;
            margin: auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
    </style>
</head>
<body>
    <!-- القسم العلوي مع روابط التواصل الاجتماعي -->
    <header>
        <h2>تابعنا على مواقع التواصل الاجتماعي</h2>
        <div class="social-icons">
            <!-- رابط فيسبوك -->
            <a href="https://www.facebook.com/" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook">
            </a>
            <!-- رابط انستغرام الشخصي -->
            <a href="https://www.instagram.com/nadjibbenayach/profilecard/?igsh=MXA4am9hYjl5Z3NuMQ==" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram">
            </a>
            <!-- رابط تيك توك -->
            <a href="https://www.tiktok.com/" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/TikTok_logo.svg" alt="TikTok">
            </a>
        </div>
    </header>

    <!-- الكود الأساسي للموقع -->
    <div class="container login-container">
        <h2>تسجيل الدخول</h2>
        <input type="text" id="username" placeholder="اسم المستخدم">
        <input type="password" id="password" placeholder="كلمة المرور">
        <button onclick="login()">دخول</button>
        <button onclick="guestLogin()">الدخول كضيف</button>
        <p style="text-align: center;">أو</p>
        <button onclick="showRegister()">إنشاء حساب جديد</button>
    </div>

    <div class="container register-container" style="display:none;">
        <h2>إنشاء حساب جديد</h2>
        <input type="text" id="newUsername" placeholder="اسم المستخدم">
        <input type="email" id="newEmail" placeholder="البريد الإلكتروني">
        <input type="password" id="newPassword" placeholder="كلمة المرور">
        <button onclick="register()">تسجيل الحساب</button>
        <button onclick="showLogin()">العودة لتسجيل الدخول</button>
    </div>

    <div class="container content-container" style="display:none;">
        <h2>مرحبا بك في موقع نشر المعلومات</h2>
        <p>هذا القسم مخصص لنشر المحتوى والمعلومات.</p>
    </div>

    <script>
        function login() {
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            if (username === "" || password === "") {
                alert("يرجى إدخال اسم المستخدم وكلمة المرور.");
                return;
            }
            if (username === "user" && password === "pass") {
                document.querySelector(".login-container").style.display = "none";
                document.querySelector(".content-container").style.display = "block";
            } else {
                alert("اسم المستخدم أو كلمة المرور غير صحيحة.");
            }
        }

        function guestLogin() {
            document.querySelector(".login-container").style.display = "none";
            document.querySelector(".content-container").style.display = "block";
        }

        function showRegister() {
            document.querySelector(".login-container").style.display = "none";
            document.querySelector(".register-container").style.display = "block";
        }

        function showLogin() {
            document.querySelector(".register-container").style.display = "none";
            document.querySelector(".login-container").style.display = "block";
        }

        function register() {
            var newUsername = document.getElementById("newUsername").value;
            var newEmail = document.getElementById("newEmail").value;
            var newPassword = document.getElementById("newPassword").value;
            if (newUsername === "" || newEmail === "" || newPassword === "") {
                alert("يرجى ملء جميع الحقول لإنشاء الحساب.");
                return;
            }
            alert("تم إنشاء الحساب بنجاح!");
            showLogin();
        }
    </script>
</body>
</html>
