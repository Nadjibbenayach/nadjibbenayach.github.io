<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cozy Corner Cafe</title>
    <style>
        body {
            font-family: sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        }
        header {
            background-color: #a0522d; /* Sienna */
            color: #fff;
            padding: 20px;
            text-align: center;
        }
        nav {
            background-color: #deb887; /* BurlyWood */
            padding: 10px;
            text-align: center;
        }
        nav a {
            color: #333;
            text-decoration: none;
            margin: 0 15px;
        }
        section {
            padding: 20px;
            margin: 20px;
            background-color: #fff;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .menu-item {
            margin-bottom: 10px;
            border-bottom: 1px dotted #ccc;
            padding-bottom: 5px;
        }
        footer {
            background-color: #a0522d;
            color: #fff;
            text-align: center;
            padding: 10px;
            position: fixed; /* or relative, depending on desired behavior */
            bottom: 0;
            width: 100%;
        }
        img {
            max-width: 100%;
            height: auto;
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
    </style>
</head>
<body>

    <header>
        <h1>Cozy Corner Cafe</h1>
        <p>Your Neighborhood Coffee Haven</p>
    </header>

    <nav>
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
    </nav>

    <section id="home">
        <h2>Welcome</h2>
        <img src="placeholder-cafe.jpg" alt="Cafe Image" width = "500">
        <p>Welcome to Cozy Corner Cafe, where the aroma of freshly brewed coffee and the warmth of a friendly atmosphere await you. We're passionate about serving high-quality coffee, delicious pastries, and light bites in a comfortable and inviting space. Whether you're looking for a quick caffeine fix, a place to catch up with friends, or a quiet corner to work, we've got you covered.</p>
    </section>

    <section id="menu">
        <h2>Our Menu</h2>
        <h3>Beverages</h3>
        <div class="menu-item">
            <strong>Espresso</strong> - $3.00
        </div>
        <div class="menu-item">
            <strong>Latte</strong> - $4.00
        </div>
        <div class="menu-item">
            <strong>Cappuccino</strong> - $4.50
        </div>
        <h3>Pastries</h3>
        <div class="menu-item">
            <strong>Croissant</strong> - $2.50
        </div>
        <div class="menu-item">
            <strong>Muffin</strong> - $3.00
        </div>
    </section>

    <section id="about">
        <h2>About Us</h2>
        <p>Cozy Corner Cafe was founded in 2024 with a simple goal: to create a welcoming space where the community could gather and enjoy exceptional coffee. We source our beans from local roasters and bake our pastries fresh daily. We believe in creating a positive impact on our community and providing a cozy and inviting atmosphere for everyone.</p>
    </section>

    <section id="contact">
        <h2>Contact Us</h2>
        <p>123 Main Street<br>Anytown, CA 12345<br>Phone: (555) 555-5555<br>Email: info@cozycornercafe.com</p>
    </section>

    <footer>
        <p>&copy; 2024 Cozy Corner Cafe</p>
    </footer>

</body>
</html>
