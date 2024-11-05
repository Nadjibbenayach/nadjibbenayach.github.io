<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>موقع نشر المعلومات</title>
    <style>
        /* تنسيق عام */
        body {
            font-family: Arial, sans-serif;
            background-color: #f8f9fa;
            margin: 0;
            padding: 0;
            display: flex;
        }

        /* تنسيق القائمة الجانبية */
        .sidebar {
            width: 250px;
            position: fixed;
            left: 0;
            top: 0;
            height: 100%;
            background-color: #333;
            color: #fff;
            padding: 20px;
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
            overflow-y: auto;
            transition: transform 0.3s ease;
        }

        .sidebar h3 {
            font-size: 20px;
            color: #f2f2f2;
            margin-bottom: 20px;
            text-align: center;
            border-bottom: 1px solid #555;
            padding-bottom: 10px;
        }

        .sidebar ul {
            list-style-type: none;
            padding: 0;
        }

        .sidebar ul li {
            margin: 15px 0;
        }

        .sidebar ul li a {
            color: #f2f2f2;
            text-decoration: none;
            display: block;
            padding: 10px;
            border-radius: 5px;
            background-color: #444;
            transition: background-color 0.3s, transform 0.2s;
            font-size: 16px;
            text-align: center;
        }

        .sidebar ul li a:hover {
            background-color: #555;
            transform: scale(1.05);
        }

        /* تنسيق الجزء العلوي */
        .header-image {
            width: calc(100% - 250px);
            margin-left: 250px;
            max-height: 200px;
            object-fit: cover;
            display: block;
        }

        /* تنسيق المحتوى الرئيسي */
        .content {
            margin-left: 250px;
            padding: 20px;
            width: calc(100% - 250px);
        }

        .container {
            max-width: 700px;
            margin: auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        .container h2 {
            color: #007BFF;
            margin-bottom: 20px;
        }

        /* تنسيق للأزرار */
        .button {
            display: inline-block;
            padding: 10px 20px;
            color: #fff;
            background-color: #007BFF;
            border-radius: 5px;
            text-decoration: none;
            transition: background-color 0.3s;
            font-weight: bold;
            margin-top: 15px;
        }

        .button:hover {
            background-color: #0056b3;
        }

        /* تنسيق توافقي للهواتف */
        @media (max-width: 768px) {
            .sidebar {
                width: 100%;
                height: auto;
                position: relative;
                box-shadow: none;
            }

            .header-image, .content {
                width: 100%;
                margin-left: 0;
            }

            .container {
                width: 90%;
                padding: 10px;
            }
        }
    </style>
</head>
<body>

    <!-- القائمة الجانبية -->
    <div class="sidebar">
        <h3>القائمة الجانبية</h3>
        <ul>
            <li><a href="#">اقتباسات ملهمة</a></li>
            <li><a href="#">توقعات الطقس</a></li>
            <li><a href="#">وصفة طعام اليوم</a></li>
            <li><a href="#">تحديات يومية</a></li>
            <li><a href="#">ألعاب تفاعلية</a></li>
            <li><a href="#">جدول نشاطات</a></li>
            <li><a href="#">نصائح العناية بالصحة</a></li>
            <li><a href="#">ألغاز للتفكير</a></li>
            <li><a href="#">أخبار اليوم</a></li>
            <li><a href="#">توفير الطاقة</a></li>
            <!-- المزيد من العناصر يمكن إضافتها هنا -->
        </ul>
    </div>

    <!-- إضافة صورة في أعلى الصفحة -->
    <img src="https://i.pinimg.com/564x/2c/3f/3d/2c3f3d37ebfbc29c.jpg" alt="صورة علوية" class="header-image">

    <!-- المحتوى الرئيسي -->
    <div class="content">
        <div class="container">
            <h2>مرحبا بك في موقع نشر المعلومات</h2>
            <p>هذا القسم مخصص لنشر المحتوى والمعلومات التي يمكن أن تكون مفيدة في حياتك اليومية.</p>
            <a href="#" class="button">المزيد من المعلومات</a>
        </div>
    </div>

</body>
</html>
