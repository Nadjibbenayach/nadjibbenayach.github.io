<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>موقع حجز التذاكر</title>
    <style>
        body { font-family: Arial, sans-serif; background-color: #f2f2f2; margin: 0; padding: 0; }
        .container { max-width: 400px; margin: auto; padding: 20px; background-color: #fff; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); margin-top: 20px; }
        h2 { text-align: center; }
        .ticket { padding: 15px; margin: 10px 0; border: 1px solid #ddd; border-radius: 5px; cursor: pointer; text-align: center; background-color: #007BFF; color: #fff; }
        .ticket:hover { background-color: #0056b3; }
        .form-container, .confirmation-container { display: none; }
        .form-field { width: 100%; padding: 10px; margin: 10px 0; }
        .form-button { width: 100%; padding: 10px; background-color: #28a745; color: #fff; border: none; cursor: pointer; border-radius: 5px; }
        .form-button:hover { background-color: #218838; }
        .confirm-button, .cancel-button { width: 48%; padding: 10px; margin: 5px 1%; border: none; border-radius: 5px; cursor: pointer; color: #fff; }
        .confirm-button { background-color: #28a745; }
        .cancel-button { background-color: #dc3545; }
        .confirm-button:hover { background-color: #218838; }
        .cancel-button:hover { background-color: #c82333; }
    </style>
</head>
<body>
    <!-- شاشة اختيار التذاكر -->
    <div class="container ticket-container">
        <h2>اختر تذكرتك</h2>
        <div class="ticket" onclick="selectTicket('العيايشة', 30)">تذكرة العيايشة - 30DA</div>
        <div class="ticket" onclick="selectTicket('قاوس', 25)">تذكرة قاوس - 25DA</div>
        <div class="ticket" onclick="selectTicket('الكلم 5', 20)">تذكرة الكلم 5 - 20DA</div>
    </div>

    <!-- شاشة ملء الاستمارة -->
    <div class="container form-container">
        <h2>أدخل معلوماتك</h2>
        <input type="text" id="firstName" placeholder="الاسم" class="form-field">
        <input type="text" id="lastName" placeholder="اللقب" class="form-field">
        <input type="text" id="phone" placeholder="رقم الهاتف" class="form-field">
        <button class="form-button" onclick="submitForm()">طلب التذكرة</button>
    </div>

    <!-- شاشة تأكيد نجاح الطلب -->
    <div class="container confirmation-container">
        <h2>تم الطلب بنجاح!</h2>
        <p>التذكرة المطلوبة: <span id="ticketType"></span></p>
        <p>السعر: <span id="ticketPrice"></span>DA</p>
        <p>الاسم: <span id="confirmFirstName"></span></p>
        <p>اللقب: <span id="confirmLastName"></span></p>
        <p>رقم الهاتف: <span id="confirmPhone"></span></p>
        <button class="confirm-button" onclick="confirmOrder()">أوافق</button>
        <button class="cancel-button" onclick="cancelOrder()">أرفض</button>
    </div>

    <script>
        let selectedTicket = {};
        
        function selectTicket(name, price) {
            selectedTicket = { name, price };
            document.querySelector('.ticket-container').style.display = 'none';
            document.querySelector('.form-container').style.display = 'block';
        }

        function submitForm() {
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const phone = document.getElementById('phone').value;

            if (!firstName || !lastName || !phone) {
                alert("يرجى ملء جميع الحقول.");
                return;
            }

            document.getElementById('ticketType').innerText = selectedTicket.name;
            document.getElementById('ticketPrice').innerText = selectedTicket.price;
            document.getElementById('confirmFirstName').innerText = firstName;
            document.getElementById('confirmLastName').innerText = lastName;
            document.getElementById('confirmPhone').innerText = phone;

            document.querySelector('.form-container').style.display = 'none';
            document.querySelector('.confirmation-container').style.display = 'block';
        }

        function confirmOrder() {
            alert("تمت الموافقة على الطلب. شكراً لطلبك!");
            resetForm();
        }

        function cancelOrder() {
            alert("تم إلغاء الطلب.");
            resetForm();
        }

        function resetForm() {
            document.querySelector('.confirmation-container').style.display = 'none';
            document.querySelector('.ticket-container').style.display = 'block';
            document.getElementById('firstName').value = '';
            document.getElementById('lastName').value = '';
            document.getElementById('phone').value = '';
            selectedTicket = {};
        }
    </script>
</body>
</html>
