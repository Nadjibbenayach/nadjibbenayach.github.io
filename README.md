<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تسجيل الدخول</title>
    <style>
        /* أنماط تسجيل الدخول */
        .login-container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin-top: 68px;
            padding: 2rem;
            background: linear-gradient(rgba(255,248,240,0.9), rgba(255,248,240,0.9)),
                        url('login-bg.jpg') center/cover;
        }

        .login-card {
            background: white;
            padding: 2.5rem;
            border-radius: 12px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.1);
            width: 100%;
            max-width: 500px;
        }

        .login-logo {
            text-align: center;
            margin-bottom: 2rem;
        }

        .login-logo img {
            width: 180px;
        }

        .login-form .input-group {
            margin-bottom: 1.5rem;
        }

        .login-input {
            width: 100%;
            padding: 1rem;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-size: 1rem;
        }

        .login-btn {
            width: 100%;
            padding: 1rem;
            background: brown;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 1.1rem;
            cursor: pointer;
        }

        .login-links {
            text-align: center;
            margin-top: 1.5rem;
        }

        .divider {
            margin: 1.5rem 0;
            border-bottom: 1px solid #ddd;
            text-align: center;
            position: relative;
        }

        .divider::after {
            content: 'أو';
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 0 1rem;
            color: #666;
        }

        .social-login {
            display: flex;
            gap: 1rem;
            justify-content: center;
            margin-top: 2rem;
        }

        .social-btn {
            padding: 0.8rem 1.5rem;
            border: 1px solid #ddd;
            border-radius: 8px;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
        }
    </style>
</head>
<body>

    <div class="login-container" id="login">
        <div class="login-card">
            <div class="login-logo">
                <img src="logo.png" alt="شعار الموقع">
            </div>

            <form class="login-form" id="loginForm">
                <div class="input-group">
                    <input type="email" id="email" class="login-input" placeholder="البريد الإلكتروني" required>
                </div>

                <div class="input-group">
                    <input type="password" id="password" class="login-input" placeholder="كلمة المرور" required>
                </div>

                <button type="submit" class="login-btn">تسجيل الدخول</button>

                <div class="login-links">
                    <a href="#">هل نسيت كلمة المرور؟</a>
                </div>

                <div class="divider"></div>

                <div class="social-login">
                    <div class="social-btn" id="googleLogin">
                        <img src="google-icon.png" width="20">
                        <span>تسجيل الدخول عبر Google</span>
                    </div>
                </div>
            </form>

            <a href="#" class="create-account-btn">أنشئ حساب جديد</a>
        </div>
    </div>

    <!-- Firebase Authentication -->
    <script type="module">
        // 1. استيراد Firebase
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
        import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

        // 2. إعداد Firebase (استبدل هذه القيم بمشروعك)
        const firebaseConfig = {
            apiKey: "YOUR_API_KEY",
            authDomain: "YOUR_AUTH_DOMAIN",
            projectId: "YOUR_PROJECT_ID",
            storageBucket: "YOUR_STORAGE_BUCKET",
            messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
            appId: "YOUR_APP_ID"
        };

        const app = initializeApp(firebaseConfig);
        const auth = getAuth();
        const provider = new GoogleAuthProvider();

        // 3. تسجيل الدخول بالبريد الإلكتروني وكلمة المرور
        document.getElementById("loginForm").addEventListener("submit", function(event) {
            event.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    alert("تم تسجيل الدخول بنجاح!");
                    console.log(userCredential.user);
                })
                .catch((error) => {
                    alert("خطأ: " + error.message);
                });
        });

        // 4. تسجيل الدخول عبر Google
        document.getElementById("googleLogin").addEventListener("click", function() {
            signInWithPopup(auth, provider)
                .then((result) => {
                    alert("تم تسجيل الدخول عبر Google!");
                    console.log(result.user);
                })
                .catch((error) => {
                    alert("خطأ: " + error.message);
                });
        });
    </script>

</body>
</html>
