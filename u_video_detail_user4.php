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
      <a class="navbar-brand" href="u_beranda_user.php"> Natureal </a>
      <!-- navbar for responsive -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link nav-link-1" href="u_beranda_user.php">Beranda</a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-link-2 " aria-current="page" href="u_trending_user.php">Trending</a>
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
  <!-- main content -->
  <div class="container-fluid tm-container-content tm-mt-60">
    <div class="row tm-mb-90" style="display: flex;">
      <div class=" col-lg-7 col-md-6 col-sm-12">
        <div class="video-kiri">
          <div class="video">
            <video autoplay muted loop controls id="tm-video">
              <source src="video/sabar.mp4" type="video/mp4" />
            </video>
            <div class="bendera" style="margin-left: 25px; display: flex;">
              <div class="row mb-4" style="width: 70%;">
                <h2 class="col-13  tm-text-primary" style="margin-top: 15px;">Ide Kotak Sampah</h2>
              </div>
              <div class="icon" style="width: 30%; text-align:right;">
                <i class="fas fa-thumbs-up">
                  <a href="#"></a>
                </i>
                <a href="u_report_user.php"><i class="fas fa-flag"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-5 col-md-6 col-sm-12">
        <div class="tm-bg-gray tm-video-details">
          <div class="mb-4 d-flex flex-wrap">
            <div class="mr-4 mb-2">
              <img src="img/a.jpg" alt="" style="width: 317px;" />
              <div class="d-flex justify-content-between tm-text-gray">
                <span class="tm-text-gray-light">Judul vid</span>
                <span>12,460 views</span>
              </div>
            </div>
            <br>
            <div class="mr-4 mb-2">
              <img src="img/b.jpg" alt="" style="width: 317px;" />
              <div class="d-flex justify-content-between tm-text-gray">
                <span class="tm-text-gray-light">Judul vid</span>
                <span>12,460 views</span>
              </div>
            </div>
          </div>
        </div>
        <div class="videokanan" style="width: 70%;">
        </div>
      </div>
      <div class="col-xl-4 col-lg-5 col-md-6 col-sm-12">
        <div class="tm-bg-gray tm-video-details">
          <div class="desk-lengkap" style="display: flex;">
            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" width="90" height="90"
              style="border-radius: 70px;" />
            <div class="deskripsi" style="padding: 20px;">
              <a href="#">Rakha</a>
              <p class="mb-4">
                Deskripsi dari pada video yang diatas
              </p>
            </div>
          </div>
          <div class="text-center mb-5">
            <a href="#" class=" btn-primary ">Mengikuti</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-4">
      <!-- main kedua -->
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
      <div class="container">
        <div class="col-lg-8">

          <div class="panel">
            <div class="panel-heading">
              <h3 class="panel-title">Komentar</h3>
            </div>
            <div class="panel-content panel-activity">
              <form action="#" class="panel-activity__status">
                <textarea name="user_activity" placeholder="Komentar..." class="form-control"></textarea>
                <div class="actions">
                  <button type="submit" class="btn btn-sm btn-rounded btn-info">
                    Kirim
                  </button>
                </div>
              </form>
              <ul class="panel-activity__list">
                <li>
                  <i class="activity__list__icon fa fa-question-circle-o"></i>
                  <div class="activity__list__header">
                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" />
                    <a href="#">Rakha</a>
                  </div>
                  <div class="activity__list__body entry-content">
                    <p>
                      Bagus sekali!
                    </p>
                  </div>
                  <div class="activity__list__footer">
                    <a href="#"> <i class="fa fa-thumbs-up"></i>123</a>
                    <a href="#"> <i class="fa fa-comments"></i>23</a>
                    <span> <i class="fa fa-clock"></i>2 jam lalu</span>
                  </div>
                </li>
                <li>
                  <i class="activity__list__icon fa fa-question-circle-o"></i>
                  <div class="activity__list__header">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                    <a href="#">Rakha</a>
                  </div>
                  <div class="activity__list__body entry-content">
                    <p>
                      Bagus sekali!
                    </p>
                  </div>
                  <div class="activity__list__footer">
                    <a href="#"> <i class="fa fa-thumbs-up"></i>123</a>
                    <a href="#"> <i class="fa fa-comments"></i>23</a>
                    <span> <i class="fa fa-clock"></i>2 jam lalu</span>
                  </div>
                </li>
                <li>
                  <i class="activity__list__icon fa fa-question-circle-o"></i>
                  <div class="activity__list__header">
                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" />
                    <a href="#">Rakha</a>
                  </div>
                  <div class="activity__list__body entry-content">
                    <p>
                      Bagus sekali!
                    </p>
                  </div>
                  <div class="activity__list__footer">
                    <a href="#"> <i class="fa fa-thumbs-up"></i>123</a>
                    <a href="#"> <i class="fa fa-comments"></i>23</a>
                    <span> <i class="fa fa-clock"></i>2 jam lalu</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- row -->
    </div>

    <script src="js/plugins.js"></script>
    <script>
      $(window).on("load", function () {
        $("body").addClass("loaded");
      });
    </script>
</body>

</html>