<link href="style_user/report.css" rel="stylesheet" />

<div id="contact" class="contact-area section-padding">
  <div class="container">
    <div class="section-title text-center">
      <h1>Laporkan</h1>
      <p>
        Mohon baca petunjuk sebelum melakukan laporan!
      </p>
    </div>
    <div class="row">
      <div class="col-lg-7">
        <div class="contact">
          <form class="form" name="enq" method="post" action="contact.php" onsubmit="return validation();">
            <div class="row">
              <div class="form-group col-md-6">
                <input type="text" name="username" class="form-control" placeholder="Username" required="required" />
              </div>
              <div class="form-group col-md-6">
                <input type="email" name="email" class="form-control" placeholder="Email" required="required" />
              </div>
              <div class="form-group col-md-12">
                <input type="text" name="subject" class="form-control" placeholder="Subject" required="required" />
              </div>
              <div class="form-group col-md-12">
                <input type="laporan" name="laporan" class="form-control" placeholder="Laporan" required="required" />
              </div>
            </div>
            <div class="col-md-12 text-center">
              <button type="submit" value="Send message" name="submit" id="submitButton" class="btn btn-contact-bg"
                title="Kirimkan Laporan!">
                <a href="u_succeslaporan_user.php" style="text-decoration: none; color: white; ">Kirim Laporan</a>
              </button>
            </div>
        </div>
        </form>
      </div>
    </div>
    <!--- END COL -->

  </div>
  <!--- END COL -->
</div>
<!--- END ROW -->
</div>
<!--- END CONTAINER -->
</div>