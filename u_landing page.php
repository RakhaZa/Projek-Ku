<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Natureal</title>
  <!-- font -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:ital,wght@0,300;0,400;0,700;1,100;1,700&display=swap"
    rel="stylesheet" />
  <!-- my style -->
  <link rel="stylesheet" href="style_user/landing.css" />
</head>
<!-- feather icons -->
<script src="https://unpkg.com/feather-icons"></script>

<body>
  <!-- Navbar start -->
  <nav class="navbar">
    <a href="#" class="navbar-logo">Natureal.</a>

    <div class="navbar-nav">
      <a href="a_register.php">Registrasi</a>
    </div>

    <div class="navbar-extra">
      <a href="#" id="menu"><i data-feather="menu"></i></a>
    </div>
  </nav>
  <!-- Navbar end -->

  <!-- Hero Section Start -->
  <section class="hero" id="home">
    <main class="content">
      <h1>Mari Buat Kreasi Video</h1>
      <p>
        Upload kreasimu dalam mengurangi sampah menjadi barang berguna disini.
      </p>
      <a href="z_beranda_guest.php" class="cta">Mulai Sekarang</a>
    </main>
  </section>
  <!-- Hero Section End -->

  <!-- About Section start -->
  <section id="about" class="about">
    <h2><span>Tentang</span> Kami</h2>

    <div class="row">
      <div class="about-img">
        <img src="img/logo natureal.png" alt="Tentang Kami" />
      </div>
      <div class="content">
        <p>
          Natureal adalah penyedia layanan berbasis upload dengan bertemakan
          daur ulang sampah menjadi barang yang berguna
        </p>
      </div>
    </div>
  </section>
  <!-- About Section end -->
  <!-- Footer start -->
  <footer>
    <div class="socials">
      <a href="#"><i data-feather="instagram"></i></a>
      <a href="#"><i data-feather="twitter"></i></a>
      <a href="#"><i data-feather="facebook"></i></a>
    </div>

    <div class="links">
      <a href="#home">Home</a>
      <a href="#about">About</a>
    </div>

    <div class="credit">
      <p>Created By <a href="#">Rakha</a>. | &copy; 2023.</p>
    </div>
  </footer>
  <!-- Footer End -->
  <!-- Feather icons -->
  <script>
    feather.replace();
  </script>

  <!-- My Javascript -->
  <script src="js/script.js"></script>
</body>

</html>