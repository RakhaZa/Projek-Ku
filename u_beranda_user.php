<?php
$conn = mysqli_connect("localhost", "root", "", "natureal");
$results = mysqli_query($conn, "SELECT * FROM users");
$users = mysqli_fetch_all($results, MYSQLI_ASSOC);
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Natureal.</title>
  <link rel="stylesheet" href="style_user/bootstrap.min.css" />
  <link rel="stylesheet" href="fontawesome/css/all.min.css" />
  <link rel="stylesheet" href="style_user/style.css" />
</head>

<body>
  <!-- loader responsive -->
  <div id="loader-wrapper">
    <div id="loader"></div>

    <div class="loader-section section-left"></div>
    <div class="loader-section section-right"></div>
  </div>
  <nav class="navbar navbar-expand-lg">
    <!-- header -->
    <div class="container-fluid">
      <a class="navbar-brand" href="#"> Natureal. </a>
      <!-- navbar for responsive -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>
      <!-- navbar-nav -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link nav-link-1 active" aria-current="page" href="u_beranda_user.php">Beranda</a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-link-2" href="u_trending_user.php">Trending</a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-link-3" href="u_mengikuti_user.php">Mengikuti</a>
          </li>
          <li class="nav-item">
            <?php foreach ($users as $user): ?>
              <tr>
                <td> <a href="u_profil_user.php"><img src="<?php echo 'images/' . $user['profile_image'] ?>"
                      style="border-radius: 20px;" width="50" height="50" alt=""> </a></td>
                <td>
                </td>
              </tr>
            <?php endforeach; ?>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- bg search -->
  <div class="tm-hero d-flex justify-content-center align-items-center" data-parallax="scroll"
    data-image-src="img/img.jpg">
    <form class="d-flex tm-search-form">
      <input class="form-control tm-search-input" type="search" placeholder="Pencarian" aria-label="Search" />
      <button class="btn btn-outline-success tm-search-btn" type="submit">
        <i class="fas fa-search"></i>
      </button>
    </form>
  </div>
  <!-- end -->
  <!-- main content -->
  <div class="container-fluid tm-container-content tm-mt-60">
    <div class="row mb-4">
      <h2 class="col-6 tm-text-primary">Untuk Anda</h2>
    </div>
    <div class="row tm-mb-90 tm-gallery">
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
        <figure class="effect-ming tm-video-item">
          <img src="img/PembuatanKotak.png" alt="Image" class="img-fluid" />
          <figcaption class="d-flex align-items-center justify-content-center">
            <a href="u_video_detail_user.php"></a>
          </figcaption>
        </figure>
        <div class="d-flex justify-content-between tm-text-gray">
          <span class="tm-text-gray-light">Pembuatan Kotak Sampah </span>
          <span>10 Penonton</span>
        </div>
      </div>
      <!-- 2 -->
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
        <figure class="effect-ming tm-video-item">
          <img src="img/Kerdus.png" alt="Image" class="img-fluid" />
          <figcaption class="d-flex align-items-center justify-content-center">
            <a href="u_video_detail_user2.php">Menonton</a>
          </figcaption>
        </figure>
        <div class="d-flex justify-content-between tm-text-gray">
          <span class="tm-text-gray-light">Kotak Sampah Kardus</span>
          <span>5 Penonton</span>
        </div>
        <!-- 3 -->
      </div>
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
        <figure class="effect-ming tm-video-item">
          <img src="img/Celengan.png" alt="Image" class="img-fluid" />
          <figcaption class="d-flex align-items-center justify-content-center">
            <a href="u_video_detail_user3.php">Menonton</a>
          </figcaption>
        </figure>
        <div class="d-flex justify-content-between tm-text-gray">
          <span class="tm-text-gray-light">Pembuatan Celengan</span>
          <span>11 Penonton</span>
        </div>
      </div>
      <!-- 4 -->
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
        <figure class="effect-ming tm-video-item">
          <img src="img/p.png" alt="Image" class="img-fluid" />
          <figcaption class="d-flex align-items-center justify-content-center">
            <a href="u_video_detail_user4.php">Menonton</a>
          </figcaption>
        </figure>
        <div class="d-flex justify-content-between tm-text-gray">
          <span class="tm-text-gray-light">Ide Kotak Sampah</span>
          <span>11 Penonton</span>
        </div>
      </div>
    </div>

  </div>
  <!-- end content -->
  <!-- row -->
  </div>
  <!-- script -->
  <script src="js/plugins.js"></script>
  <script>
    $(window).on("load", function () {
      $("body").addClass("loaded");
    });
  </script>
</body>

</html>