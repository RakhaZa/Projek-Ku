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

if (isset($_POST["username"]) && isset($_POST["password"])) {
  $sql = "SELECT * FROM `tb_user` WHERE `Username`='$_POST[username]' and `Password`='$_POST[password]'";
  $result = $conn->query($sql);
  $row = $result->fetch_assoc();
  if (mysqli_num_rows($result) > 0) {
    $_SESSION["Username"] = $row["Username"];
    $_SESSION["ID"] = $row["ID"];
    $_SESSION["Akses"] = $row["Akses"];
    if ($_SESSION['Akses'] == 'User') {
      header('location: u_beranda_user.php');
    }
    if ($_SESSION['Akses'] == 'Admin') {
      header('location: http://localhost/Natureal/DasboardAdmin/beranda.php');
    }
  } else {
    echo '
<script>
  alert("User tidak ditemukan atau Password salah");
</script>
';
  }
} ?>

<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="UTF-8" />
  <title>Login Natureal.</title>
  <link rel="stylesheet" href="register-login style/login.css" />
  <link rel="stylesheet" href="fonts/material-icon/css/material-design-iconic-font.min.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>

<body>
  <div class="container">
    <input type="checkbox" id="flip" />
    <div class="cover">
      <div class="front">
        <img src="img/imagelog.jpg" alt="" />
        <div class="text">
          <h1>Natureal.</h1>
          <span class="text-1">Selamat Datang</span>
          <span class="text-2">Ciptakan Dunia Kreatif Mu Disini </span>
        </div>
      </div>
    </div>
    <div class="forms">
      <div class="form-content">
        <div class="login-form">
          <div class="title">Login</div>
          <form action="#" method="post">
            <div class="input-boxes">
              <div class="input-box">
                <i class="fas fa-user"></i>
                <input name="username" type="text" placeholder="Masukkan Username" />
              </div>
              <div class="input-box">
                <i class="fas fa-lock"></i>
                <input name="password" type="password" placeholder="Masukkan Password" required />
              </div>
              <div class="text"><a href="#">Lupa Password</a></div>
              <div class="button input-box">
                <input type="submit" value="Login" />
              </div>
              <div class="text sign-up-text">
                <ul>
                  Belum punya akun?
                  <a href="a_register.php">Registrasi</a>
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