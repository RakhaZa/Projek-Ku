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
  <link rel="stylesheet" href="editprofil.css" />
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
            <a class="nav-link nav-link-2" href="u_trending_user.php">Trending</a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-link-3 active" aria-current="page" href="#">Mengikuti</a>
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

  <div class="container-fluid tm-mt-60">
    <div class="row mb-4">
      <h2 class="col-12 tm-text-mengikuti">Mengikuti</h2>
    </div>
    <div class="container d-flex">
      <div class="card">
        <div class="upper">
          <img src="" class="img-fluid" />
        </div>

        <div class="user text-center">
          <div class="profile">
            <img src="images/1700491826-new.jpg" class="rounded-circle" width="80" height="80" />
          </div>
        </div>

        <div class="mt-5 text-center">
          <h4 class="mb-0">Orang</h4>
          <span class="text-muted d-block mb-2">Deskripsi dari bagian user ini
            <br> hanya sebagian saja
          </span>

          <button class="btn btn-primary btn-sm follow">Diikuti</button>

          <div class="d-flex justify-content-between align-items-center mt-4 px-4">
            <div class="stats">
              <h6 class="mb-0">Video</h6>
              <span>2</span>
            </div>

            <div class="stats">
              <h6 class="mb-0">Pengikut</h6>
              <span>1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- end content -->
  <!-- script -->
  <script src="js/plugins.js"></script>
  <script>
    $(window).on("load", function () {
      $("body").addClass("loaded");
    });
  </script>
</body>

</html>