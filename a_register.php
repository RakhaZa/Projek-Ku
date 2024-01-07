<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "natureal";
$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
;
if (session_status() == PHP_SESSION_NONE) {
  session_start();
}
;


if (isset($_POST["username"]) && isset($_POST["email"]) && isset($_POST["password"])) {
  $sql = "SELECT * FROM `tb_user` WHERE `Username`='$_POST[username]' OR `Email`='$_POST[email]'";
  $result = $conn->query($sql);
  if (mysqli_num_rows($result) == 0) {
    $sql2 =
      "INSERT INTO `tb_user` (`Username`, `Email`, `Password`) VALUES
('$_POST[username]', '$_POST[email]', '$_POST[password]')";
    $result2 =
      $conn->query($sql2);
    if ($result2) {
      header('location: a_login.php');
    } else {
      echo '
<script>
  alert("Request failed to send, please try again");
</script>
';
    }
  } else {
    echo '
<script>
  alert("Nama/Email sudah dipakai, silahkan menggunakan yang lain");
</script>
';
  }
} ?>

<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="UTF-8" />
  <title>Register Natureal.</title>
  <link rel="stylesheet" href="register-login style/register.css" />
  <link rel="stylesheet" href="fonts/material-icon/css/material-design-iconic-font.min.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>

<body>
  <div class="container">
    <input type="checkbox" id="flip" />
    <div class="cover">
      <div class="front">
        <img src="img/imagereg.png" alt="" />
        <div class="text">
          <h1>Natureal.</h1>
          <span class="text-1">Selamat Datang</span>
          <span class="text-2">Natureal , adalah tempat terbaik untuk <br> menemukan tutorial berbasis video. </span>
        </div>
      </div>
    </div>
    <div class="forms">
      <div class="form-content">
        <div class="signup-form">
          <div class="title">Registrasi</div>
          <form action="#" method="post">
            <div class="input-boxes">
              <div class="input-box">
                <i class="fas fa-user"></i>
                <input name="username" type="text" placeholder="Masukkan Username" required minlength="5"
                  maxlength="20" />
              </div>
              <div class="input-box">
                <i class="fas fa-envelope"></i>
                <input name="email" type="email" placeholder="Masukkan Email" required />
              </div>
              <div class="input-box">
                <i class="fas fa-lock"></i>
                <input name="password" type="password" placeholder="Masukkan Password" required />
              </div>
              <div class="button input-box">
                <input type="submit" value="Buat" />
              </div>
              <div class="text sign-up-text">
                <ul>
                  Sudah punya akun?
                  <a href="a_login.php">Login</a>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</body>

</html>