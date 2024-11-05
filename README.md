<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>موقع بيع التذاكر</title>
    <style>
        /* الأساسيات */
        body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 800px;
            margin: auto;
            padding: 20px;
        }
        h1, h2 {
            text-align: center;
        }

        /* تصميم البطاقات */
        .ticket-card {
            background-color: #fff;
            padding: 15px;
            margin: 15px 0;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .ticket-title {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 5px;
        }
        .ticket-price {
            color: #007BFF;
            margin-bottom: 10px;
        }
        .btn {
            padding: 10px 20px;
            background-color: #007BFF;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            text-align: center;
        }
        .btn:hover {
            background-color: #0056b3;
        }

        /* قسم المراجعات */
        .reviews {
            margin-top: 20px;
        }
        .review {
            background-color: #f9f9f9;
            padding: 15px;
            margin: 10px 0;
            border-radius: 5px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        }
        .review-header {
            font-weight: bold;
            margin-bottom: 5px;
        }
        .review-text {
            color: #555;
        }

        /* نموذج إضافة مراجعة */
        .add-review {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 20px;
        }
        input, textarea {
            padding: 10px;
            width: 100%;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        .submit-btn {
            width: 100px;
            align-self: center;
        }

        /* تصميم متجاوب */
        @media (max-width: 600px) {
            .ticket-card {
                padding: 10px;
            }
            .btn {
                width: 100%;
                padding: 8px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>موقع بيع التذاكر</h1>

        <!-- تذاكر العروض -->
        <div class="ticket-card">
            <div class="ticket-title">العيايشة</div>
            <div class="ticket-price">السعر: 30DA</div>
            <button class="btn">شراء الآن</button>
        </div>

        <div class="ticket-card">
            <div class="ticket-title">قاوس</div>
            <div class="ticket-price">السعر: 25DA</div>
            <button class="btn">شراء الآن</button>
        </div>

        <div class="ticket-card">
            <div class="ticket-title">الكلم 5</div>
            <div class="ticket-price">السعر: 20DA</div>
            <button class="btn">شراء الآن</button>
        </div>

        <!-- قسم المراجعات -->
        <div class="reviews">
            <h2>آراء المستخدمين</h2>
            <div class="review">
                <div class="review-header">محمد علي</div>
                <div class="review-text">تجربة رائعة! الموقع سهل الاستخدام والأسعار مناسبة.</div>
            </div>
            <div class="review">
                <div class="review-header">سارة أحمد</div>
                <div class="review-text">خدمة ممتازة وسرعة في التنفيذ.</div>
            </div>
        </div>

        <!-- نموذج إضافة مراجعة -->
        <div class="add-review">
            <h2>إضافة مراجعة</h2>
            <input type="text" id="reviewer-name" placeholder="اسمك">
            <textarea id="review-text" placeholder="اكتب مراجعتك هنا..."></textarea>
            <button class="btn submit-btn" onclick="addReview()">إرسال</button>
        </div>
    </div>

    <script>
        // دالة لإضافة مراجعة جديدة
        function addReview() {
            const name = document.getElementById("reviewer-name").value;
            const reviewText = document.getElementById("review-text").value;
            
            if (name && reviewText) {
                const reviewSection = document.querySelector(".reviews");

                // إنشاء عنصر جديد للمراجعة
                const newReview = document.createElement("div");
                newReview.classList.add("review");

                const reviewHeader = document.createElement("div");
                reviewHeader.classList.add("review-header");
                reviewHeader.textContent = name;

                const reviewContent = document.createElement("div");
                reviewContent.classList.add("review-text");
                reviewContent.textContent = reviewText;

                // إضافة العناصر الجديدة إلى المراجعة
                newReview.appendChild(reviewHeader);
                newReview.appendChild(reviewContent);

                // إضافة المراجعة الجديدة إلى قسم المراجعات
                reviewSection.appendChild(newReview);

                // مسح الحقول بعد الإرسال
                document.getElementById("reviewer-name").value = "";
                document.getElementById("review-text").value = "";
            } else {
                alert("يرجى ملء جميع الحقول.");
            }
        }
    </script>
</body>
</html>
