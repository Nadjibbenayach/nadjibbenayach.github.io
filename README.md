
<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>موقع نشر المعلومات</title>
    <style>
        body { font-family: Arial, sans-serif; background-color: #f2f2f2; }
        .container { max-width: 400px; margin: auto; padding: 20px; background-color: #fff; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
        h2 { text-align: center; }
        input[type="text"], input[type="email"], input[type="password"], button { width: 100%; padding: 10px; margin: 10px 0; }
        button { background-color: #007BFF; color: #fff; border: none; cursor: pointer; }
        button:hover { background-color: #0056b3; }
        .content-container, .register-container { display: none; }
    </style>
</head>
<body>
    <!-- نافذة تسجيل الدخول -->
    <div class="container login-container">
        <h2>تسجيل الدخول</h2>
        <input type="text" id="username" placeholder="اسم المستخدم">
        <input type="password" id="password" placeholder="كلمة المرور">
        <button onclick="login()">دخول</button>
        <button onclick="guestLogin()">الدخول كضيف</button>
        <p style="text-align: center;">أو</p>
        <button onclick="showRegister()">إنشاء حساب جديد</button>
    </div>

    <!-- نافذة إنشاء حساب جديد -->
    <div class="container register-container">
        <h2>إنشاء حساب جديد</h2>
        <input type="text" id="newUsername" placeholder="اسم المستخدم">
        <input type="email" id="newEmail" placeholder="البريد الإلكتروني">
        <input type="password" id="newPassword" placeholder="كلمة المرور">
        <button onclick="register()">تسجيل الحساب</button>
        <button onclick="showLogin()">العودة لتسجيل الدخول</button>
    </div>

    <!-- نافذة المحتوى -->
    <div class="container content-container">
        <h2>مرحبا بك في موقع نشر المعلومات</h2>
        <p>هذا القسم مخصص لنشر المحتوى والمعلومات.</p>
    </div>

    <script>
        // وظيفة تسجيل الدخول
        function login() {
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            
            // التحقق من الحقول الفارغة
            if (username === "" || password === "") {
                alert("يرجى إدخال اسم المستخدم وكلمة المرور.");
                return;
            }
            
            // التحقق من صحة اسم المستخدم وكلمة المرور
            if (username === "user" && password === "pass") {
                document.querySelector(".login-container").style.display = "none";
                document.querySelector(".content-container").style.display = "block";
            } else {
                alert("اسم المستخدم أو كلمة المرور غير صحيحة.");
            }
        }

        // وظيفة الدخول كضيف
        function guestLogin() {
            document.querySelector(".login-container").style.display = "none";
            document.querySelector(".content-container").style.display = "block";
        }

        // وظيفة عرض نافذة إنشاء حساب جديد
        function showRegister() {
            document.querySelector(".login-container").style.display = "none";
            document.querySelector(".register-container").style.display = "block";
        }

        // وظيفة عرض نافذة تسجيل الدخول
        function showLogin() {
            document.querySelector(".register-container").style.display = "none";
            document.querySelector(".login-container").style.display = "block";
        }

        // وظيفة تسجيل حساب جديد (هنا فقط عرض توضيحي)
        function register() {
            var newUsername = document.getElementById("newUsername").value;
            var newEmail = document.getElementById("newEmail").value;
            var newPassword = document.getElementById("newPassword").value;

            if (newUsername === "" || newEmail === "" || newPassword === "") {
                alert("يرجى ملء جميع الحقول لإنشاء الحساب.");
                return;
            }

            alert("تم إنشاء الحساب بنجاح!");
            showLogin();  // العودة إلى نافذة تسجيل الدخول
        }
    </script>
</body>
</html>
