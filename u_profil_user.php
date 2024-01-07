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
            <a class="nav-link nav-link-1" href="u_beranda_user.php">Beranda</a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-link-2" href="#">Pengaturan</a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-link-3" href="u_uploadgambar.php">Upload</a>
          </li>

          <li class="nav-item">
            <a href="a_login.php" class="btn btn-xs btn-info mb-4">Logout</a>
          </li>

        </ul>
      </div>
    </div>
  </nav>
  <!-- end -->
  <!-- main content -->
  <div class="container">
    <div id="content" class="content p-0">
      <div class="profile-header">
        <div class="profile-header-cover"></div>

        <div class="profile-header-content">
          <div class="profile-header-img">
            <?php foreach ($users as $user): ?>
              <tr>
                <td> <img src="<?php echo 'images/' . $user['profile_image'] ?>" width="110" height="110" alt=""> </td>
                <td>
                  <?php echo $user['bio']; ?>
                </td>
              </tr>
            <?php endforeach; ?>
          </div>

          <div class="profile-header-info">
            <h4 class="m-t-sm">Rakha</h4>
            <?php foreach ($users as $user): ?>
              <tr>
                <td>
                  <?php echo $user['bio']; ?>
                </td>
              </tr>
            <?php endforeach; ?>
            <p class="m-b-sm"></p>
            <a href="u_editprofil.php" class="btn btn-xs btn-info mb-4">Edit Profile</a>
          </div>
        </div>

        <ul class="profile-header-tab nav nav-tabs">
          <li class="nav-item">
            <a href="#" target="__blank" class="nav-link_">Video</a>
          </li>
          <li class="nav-item">
            <a href="#" target="__blank" class="nav-link_">Mengikuti</a>
          </li>
          <li class="nav-item">
            <a href="#" target="__blank" class="nav-link_">Suka</a>
          </li>
        </ul>
      </div>

      <div class="profile-container">
        <div class="row row-space-20">
          <div class="col-md-8">
            <div class="tab-content p-0">
              <div class="tab-pane active show" id="profile-videos">
                <div class="m-b-10"><b>Video</b></div>
              </div>
            </div>
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