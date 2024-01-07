<?php include_once('processProfil.php') ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Natureal.</title>
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css" />
    <link rel="stylesheet" href="editprofil.css">
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-4 offset-md-4 form-div">
                <form action="" method="post" enctype="multipart/form-data">
                    <h2 class="text-center mb-3 mt-3">Edit Profil</h2>
                    <?php if (!empty($msg)): ?>
                        <div class="alert <?php echo $msg_class ?>" role="alert">
                            <?php echo $msg; ?>
                        </div>
                    <?php endif; ?>
                    <div class="form-group text-center" style="position: relative;">
                        <span class="img-div">
                            <div class="text-center img-placeholder" onClick="triggerClick()">
                                <h4>Update Profil</h4>
                            </div>

                            <img src="images/images.png" onClick="triggerClick()" id="profileDisplay">
                        </span>
                        <input type="file" name="profileImage" onChange="displayImage(this)" id="profileImage"
                            class="form-control" style="display: none;">
                        <label>Profil</label>
                    </div>
                    <div class="form-group">
                        <label>Bio</label>
                        <textarea name="bio" class="form-control"></textarea>
                    </div>
                    <div class="form-group">
                        <button type="submit" name="save_profile" class="btn btn-primary btn-block">Simpan</button>
                    </div>
                    <a href="u_profil_user.php">Kembali</a>
                </form>
            </div>
        </div>
    </div>
</body>

</html>
<script src="js/Profils.js"></script>