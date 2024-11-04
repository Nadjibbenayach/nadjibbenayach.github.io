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
            cursor: pointer;
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

        /* استمارة الطلب */
        .form-container, .review-container {
            display: none;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 300px;
            margin: 20px auto;
        }

        .form-container input[type="text"], .form-container input[type="tel"], .form-container button,
        .review-container button {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            font-size: 1em;
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
    </style>
</head>
<body>

<header>
    مرحبا بكم في موقع التذاكر
</header>

<!-- قسم التذاكر -->
<div class="tickets-container">
    <div class="ticket-card" onclick="showForm('العيايشة', '30 DA')">
        <div class="ticket-title">العيايشة</div>
        <div class="ticket-price">السعر: 30 DA</div>
    </div>
    <div class="ticket-card" onclick="showForm('قاوس', '25 DA')">
        <div class="ticket-title">قاوس</div>
        <div class="ticket-price">السعر: 25 DA</div>
    </div>
    <div class="ticket-card" onclick="showForm('الكلم 5', '20 DA')">
        <div class="ticket-title">الكلم 5</div>
        <div class="ticket-price">السعر: 20 DA</div>
    </div>
</div>

<!-- استمارة الطلب -->
<div class="form-container" id="formContainer">
    <h2>طلب تذكرة: <span id="ticketName"></span></h2>
    <input type="text" id="firstName" placeholder="الاسم" required>
    <input type="text" id="lastName" placeholder="اللقب" required>
    <input type="tel" id="phoneNumber" placeholder="رقم الهاتف" required>
    <button onclick="submitRequest()">إرسال الطلب</button>
</div>

<!-- قسم مراجعة الطلبات -->
<div class="review-container" id="reviewContainer">
    <h2>مراجعة الطلب</h2>
    <p>الاسم: <span id="reviewFirstName"></span></p>
    <p>اللقب: <span id="reviewLastName"></span></p>
    <p>رقم الهاتف: <span id="reviewPhoneNumber"></span></p>
    <p>التذكرة: <span id="reviewTicketName"></span></p>
    <button onclick="approve()">أوافق</button>
    <button onclick="reject()">أرفض</button>
</div>

<div class="footer">
    &copy; 2023 موقع التذاكر. جميع الحقوق محفوظة.
</div>

<script>
    let selectedTicket = "";

    // عرض استمارة الطلب
    function showForm(ticketName, price) {
        selectedTicket = ticketName + " - " + price;
        document.getElementById("ticketName").innerText = selectedTicket;
        document.getElementById("formContainer").style.display = "block";
        document.getElementById("reviewContainer").style.display = "none";
    }

    // إرسال الطلب
    function submitRequest() {
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const phoneNumber = document.getElementById("phoneNumber").value;

        if (firstName && lastName && phoneNumber) {
            // عرض الطلب للمراجعة
            document.getElementById("reviewFirstName").innerText = firstName;
            document.getElementById("reviewLastName").innerText = lastName;
            document.getElementById("reviewPhoneNumber").innerText = phoneNumber;
            document.getElementById("reviewTicketName").innerText = selectedTicket;

            document.getElementById("formContainer").style.display = "none";
            document.getElementById("reviewContainer").style.display = "block";
        } else {
            alert("يرجى ملء جميع الحقول.");
        }
    }

    // قبول الطلب
    function approve() {
        alert("تمت الموافقة على الطلب بنجاح.");
        resetForm();
    }

    // رفض الطلب
    function reject() {
        alert("تم رفض الطلب.");
        resetForm();
    }

    // إعادة تعيين النموذج
    function resetForm() {
        document.getElementById("formContainer").style.display = "none";
        document.getElementById("reviewContainer").style.display = "none";
    }
</script>

</body>
</html>
