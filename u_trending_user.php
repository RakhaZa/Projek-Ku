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
  <!-- header -->
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="beranda.html"> Natureal. </a>
      <!-- navbar for responsive -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>
      <!-- navbar-nav -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link nav-link-1" href="u_beranda_user.php">Beranda</a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-link-2 active" href="#">Trending</a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-link-3" aria-current="page" href="u_mengikuti_user.php">Mengikuti</a>
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
  <!-- main content -->

  <div class="container-fluid tm-container-content tm-mt-60 trending">
    <div class="row mb-02">
      <h2 class="tm-text-primary head col-14">Trending</h2>
    </div>
    <div class="row tm-mb-90 tm-gallery">
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-14 mb-5">
        <figure class="effect-ming tm-video-item">
          <img src="img/a.jpg" alt="Image" class="img-fluid" />
          <figcaption class=" align-items-center justify-content-center">
            <a href="video-detail.html"></a>
          </figcaption>
        </figure>
        <div class=" justify-content-between tm-text-gray">
          <span class="tm-text-gray-light">Judul</span>
          <span>9,906 Ditonton</span>
        </div>
      </div>
      <!-- 2 -->
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-14 mb-5">
        <figure class="effect-ming tm-video-item">
          <img src="img/a.jpg" alt="Image" class="img-fluid" />
          <figcaption class=" align-items-center justify-content-center">
            <a href="video-detail.html">Menonton</a>
          </figcaption>
        </figure>
        <div class=" justify-content-between tm-text-gray">
          <span class="tm-text-gray-light">Judul</span>
          <span>16,100 Ditonton</span>
        </div>
        <!-- 3 -->
      </div>
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-14 mb-5">
        <figure class="effect-ming tm-video-item">
          <img src="img/b.jpg" alt="Image" class="img-fluid" />
          <figcaption class=" align-items-center justify-content-center">
            <a href="video-detail.html">Menonton</a>
          </figcaption>
        </figure>
        <div class=" justify-content-between tm-text-gray">
          <span class="tm-text-gray-light">Judul</span>
          <span>12,460 Ditonton</span>
        </div>
      </div>
      <!-- 4 -->
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-14 mb-5">
        <figure class="effect-ming tm-video-item">
          <img src="img/b.jpg" alt="Image" class="img-fluid" />
          <figcaption class=" align-items-center justify-content-center">
            <a href="video-detail.html">Menonton</a>
          </figcaption>
        </figure>
        <div class="d-flex justify-content-between tm-text-gray">
          <span class="tm-text-gray-light">Judul</span>
          <span>11,402 Ditonton</span>
        </div>
      </div>
    </div>

    <!-- end content -->
    <div class="row tm-mb-90">
      <div class="col-12 d-flex justify-content-between align-items-center tm-paging-col"></div>
    </div>
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