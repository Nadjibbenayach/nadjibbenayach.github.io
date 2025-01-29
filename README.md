<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>قهوة أرومة | Coffee Aroma</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary: #6f4e37;
            --secondary: #d4b996;
            --dark: #2d2013;
            --light: #fff8f0;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', sans-serif;
        }

        body {
            background: var(--light);
            line-height: 1.6;
        }

        /* شريط التنقل */
        .navbar {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(255, 248, 240, 0.95);
            padding: 1rem 2rem;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            z-index: 1000;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: bold;
            color: var(--dark);
            text-decoration: none;
        }

        .nav-links {
            display: flex;
            gap: 2rem;
        }

        .nav-links a {
            color: var(--dark);
            text-decoration: none;
            font-weight: 500;
            transition: 0.3s;
            position: relative;
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -5px;
            left: 0;
            background: var(--primary);
            transition: 0.3s;
        }

        .nav-links a:hover::after {
            width: 100%;
        }

        /* الهيدر الرئيسي */
        .hero {
            height: 100vh;
            background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
                        url('hero-bg.jpg') center/cover;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: white;
            margin-top: 68px;
        }

        .hero-content h1 {
            font-size: 4rem;
            margin-bottom: 1rem;
            animation: fadeUp 1s ease;
        }

        .hero-content p {
            font-size: 1.5rem;
            margin-bottom: 2rem;
            animation: fadeUp 1s ease 0.2s backwards;
        }

        .cta-btn {
            padding: 1rem 2rem;
            background: var(--primary);
            color: white;
            border: none;
            border-radius: 30px;
            font-size: 1.1rem;
            cursor: pointer;
            transition: 0.3s;
            animation: fadeUp 1s ease 0.4s backwards;
        }

        .cta-btn:hover {
            background: var(--dark);
            transform: translateY(-3px);
        }

        /* قسم القائمة */
        .menu-section {
            padding: 5rem 2rem;
        }

        .section-title {
            text-align: center;
            font-size: 2.5rem;
            color: var(--dark);
            margin-bottom: 3rem;
        }

        .menu-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        .menu-card {
            background: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transition: 0.3s;
        }

        .menu-card:hover {
            transform: translateY(-10px);
        }

        .menu-img {
            height: 250px;
            background-size: cover;
            background-position: center;
        }

        .menu-content {
            padding: 1.5rem;
        }

        .menu-title {
            color: var(--primary);
            margin-bottom: 0.5rem;
        }

        .menu-price {
            color: var(--dark);
            font-weight: bold;
            font-size: 1.2rem;
        }

        /* قسم العروض */
        .special-offer {
            background: var(--primary);
            color: white;
            padding: 4rem 2rem;
            text-align: center;
        }

        .offer-text {
            max-width: 800px;
            margin: 0 auto 2rem;
            font-size: 1.2rem;
        }

        .timer {
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 2rem;
        }

        /* الفوتر */
        footer {
            background: var(--dark);
            color: white;
            padding: 4rem 2rem;
        }

        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
        }

        .footer-section h3 {
            margin-bottom: 1rem;
            color: var(--secondary);
        }

        .social-links {
            display: flex;
            gap: 1rem;
        }

        .social-links a {
            color: white;
            font-size: 1.5rem;
            transition: 0.3s;
        }

        .social-links a:hover {
            color: var(--secondary);
        }

        @keyframes fadeUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }
            
            .hero-content h1 {
                font-size: 2.5rem;
            }
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <a href="#" class="logo">قهوة أرومة</a>
        <div class="nav-links">
            <a href="#home">الرئيسية</a>
            <a href="#menu">القائمة</a>
            <a href="#about">عنّا</a>
            <a href="#contact">اتصل بنا</a>
        </div>
    </nav>

    <section class="hero" id="home">
        <div class="hero-content">
            <h1>تجربة قهوة استثنائية</h1>
            <p>اكتشف أروع النكهات من حبوب القهوة المختارة بعناية</p>
            <button class="cta-btn">عرض القائمة</button>
        </div>
    </section>

    <section class="menu-section" id="menu">
        <h2 class="section-title">قائمتنا المميزة</h2>
        <div class="menu-grid">
            <div class="menu-card">
                <div class="menu-img" style="background-image: url('latte.jpg')"></div>
                <div class="menu-content">
                    <h3 class="menu-title">لاتيه الفانيليا</h3>
                    <p class="menu-desc">مزيج ناعم من الإسبريسو مع حليب عضوي وفانيليا</p>
                    <p class="menu-price">18 ر.س</p>
                </div>
            </div>
            
            <div class="menu-card">
                <div class="menu-img" style="background-image: url('mocha.jpg')"></div>
                <div class="menu-content">
                    <h3 class="menu-title">موكا الشوكولاتة</h3>
                    <p class="menu-desc">إسبريسو مع شوكولاتة بلجيكية وطبقة كريمة</p>
                    <p class="menu-price">20 ر.س</p>
                </div>
            </div>
            
            <div class="menu-card">
                <div class="menu-img" style="background-image: url('coldbrew.jpg')"></div>
                <div class="menu-content">
                    <h3 class="menu-title">قهوة باردة</h3>
                    <p class="menu-desc">قهوة مخمرة على البارد لمدة 24 ساعة</p>
                    <p class="menu-price">16 ر.س</p>
                </div>
            </div>
        </div>
    </section>

    <section class="special-offer">
        <div class="offer-text">
            <h2>عرض خاص!</h2>
            <p>احصل على خصم 20% على جميع المشروبات عند طلبك عبر التطبيق</p>
            <div class="timer">23:59:59</div>
            <button class="cta-btn">حمّل التطبيق الآن</button>
        </div>
    </section>

    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3>عن المقهى</h3>
                <p>نسعى لتقديم أفضل تجربة قهوة منذ 2015 مع حبوب مختارة من أفضل المزارع العالمية</p>
            </div>
            
            <div class="footer-section">
                <h3>روابط سريعة</h3>
                <a href="#menu">القائمة</a><br>
                <a href="#about">عنّا</a><br>
                <a href="#contact">الشروط والأحكام</a>
            </div>
            
            <div class="footer-section">
                <h3>تواصل معنا</h3>
                <p>الرياض، المملكة العربية السعودية</p>
                <p>info@coffeearoma.com</p>
                <p>+966 55 123 4567</p>
                <div class="social-links">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-snapchat"></i></a>
                </div>
            </div>
        </div>
    </footer>
</body>
</html>
