<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cafe Layaycha</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #fcf9f4; /* Creamy background */
            color: #333;
        }
        header {
            background-color: #6b4226; /* Rich Coffee Brown */
            color: #fff;
            padding: 30px 20px;
            text-align: center;
            border-bottom: 5px solid #e6be8a; /* Light Gold Accent */
        }
        nav {
            background-color: #e6be8a; /* Light Gold */
            padding: 15px;
            text-align: center;
            position: sticky;
            top: 0;
            z-index: 1000;
        }
        nav a {
            color: #6b4226; /* Coffee Brown */
            text-decoration: none;
            margin: 0 20px;
            font-weight: bold;
        }
        nav a:hover {
            color: #fff;
            background-color: #6b4226;
            padding: 5px 10px;
            border-radius: 5px;
        }
        section {
            padding: 20px;
            margin: 20px auto;
            max-width: 900px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .menu-item {
            margin-bottom: 15px;
            border-bottom: 1px dashed #ccc;
            padding-bottom: 10px;
        }
        footer {
            background-color: #6b4226;
            color: #fff;
            text-align: center;
            padding: 15px;
            border-top: 5px solid #e6be8a;
        }
        img {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 20px auto;
            border-radius: 10px;
        }
        h1, h2 {
            font-family: 'Georgia', serif;
        }
        h2 {
            color: #6b4226;
            border-bottom: 2px solid #e6be8a;
            display: inline-block;
            padding-bottom: 5px;
        }
        a.map-link {
            color: #6b4226;
            text-decoration: none;
            font-weight: bold;
        }
        a.map-link:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>

    <header>
        <h1>Cafe Layaycha</h1>
        <p>Your Local Taste of Elegance</p>
    </header>

    <nav>
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
    </nav>

    <section id="home">
        <h2>Welcome</h2>
        <img src="placeholder-cafe.jpg" alt="Cozy Cafe" width="500">
        <p>Welcome to <strong>Cafe Layaycha</strong>, your go-to destination for rich coffee flavors and a touch of elegance. Now, you can also order from our website and enjoy your favorite drinks and snacks at home!</p>
    </section>

    <section id="menu">
        <h2>Our Menu</h2>
        <h3>Beverages</h3>
        <div class="menu-item">
            <strong>Cafe</strong> - 50 DNA
        </div>
        <div class="menu-item">
            <strong>Tea</strong> - 40 DNA
        </div>
        <div class="menu-item">
            <strong>Cola</strong> - 70 DNA
        </div>
        <div class="menu-item">
            <strong>Fresh Juice</strong> - 60 DNA
        </div>
    </section>

    <section id="about">
        <h2>About Us</h2>
        <p><strong>Cafe Layaycha</strong> was born out of a passion for authentic coffee experiences and a love for bringing people together. Established in 2024, we take pride in serving fresh, locally sourced beans and offering a menu that blends tradition with a modern twist. Managed by <strong>Nadjib Benayach</strong>, we are committed to delivering the best experience for our customers.</p>
    </section>

    <section id="contact">
        <h2>Contact Us</h2>
        <p>Location: Algeria<br>Phone: +213 555-555-555<br>Email: <a href="mailto:nnadjib045@gmail.com">nnadjib045@gmail.com</a></p>
        <p>
            <strong>Find us here:</strong> 
            <a class="map-link" href="https://goo.gl/maps/Mt5vwoAhsTgwgMQr8" target="_blank">
                Cafe Layaycha Location
            </a>
        </p>
    </section>

    <footer>
        <p>&copy; 2024 Cafe Layaycha | Crafted with love and care.</p>
    </footer>

</body>
</html>
