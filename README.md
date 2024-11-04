<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>موقع التذاكر</title>
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Tajawal', sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
            text-align: center;
            color: #333;
        }

        /* الرأس */
        header {
            background-color: #007BFF;
            color: #fff;
            padding: 20px;
            font-size: 1.8em;
        }

        /* قسم التذاكر */
        .tickets-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            padding: 20px;
        }

        .ticket-card {
            width: 300px;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            transition: transform 0.3s;
        }

        .ticket-card:hover {
            transform: scale(1.05);
        }

        .ticket-title {
            font-size: 1.5em;
            margin-bottom: 10px;
            color: #007BFF;
        }

        .ticket-price {
            font-size: 1.2em;
            color: #555;
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

        .dark-mode .ticket-card {
            background-color: #444;
            color: #fff;
        }

        .dark-mode .footer {
            background-color: #444;
        }
    </style>
</head>
<body>

<header>
    مرحبا بكم في موقع التذاكر
</header>

<!-- قسم التذاكر -->
<div class="tickets-container">
    <div class="ticket-card">
        <div class="ticket-title">العيايشة</div>
        <div class="ticket-price">السعر: 30 DA</div>
    </div>
    <div class="ticket-card">
        <div class="ticket-title">قاوس</div>
        <div class="ticket-price">السعر: 25 DA</div>
    </div>
    <div class="ticket-card">
        <div class="ticket-title">الكلم 5</div>
        <div class="ticket-price">السعر: 20 DA</div>
    </div>
</div>

<div class="footer">
    &copy; 2023 موقع التذاكر. جميع الحقوق محفوظة.
    <button onclick="toggleDarkMode()">تبديل الوضع الليلي</button>
</div>

<script>
    // دالة تبديل الوضع الليلي
    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
    }
</script>

</body>
</html>
