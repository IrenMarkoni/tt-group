$(".day").change(function () {
  $(".itog").text("");
  var day = $(".day").val();
  var kol_vo_kan = $(".kol_vo_kanalov").val();
  var razresh = $(".razreshi").val();
  var bitreit = $(".bit").val();
  var kol_vo_au = $(".kol_vo_au").val();
  var sutki = $(".sutki").val();
  var itog =
    sutki * day * kol_vo_kan * (razresh * bitreit * 24 + kol_vo_au * 28 * 24);
  itog = itog / 1000000;
  itog = itog.toFixed(2);

  $(".itog").text(itog);
});

$(".kol_vo_kanalov").change(function () {
  $(".itog").text("");
  var day = $(".day").val();
  var kol_vo_kan = $(".kol_vo_kanalov").val();
  var razresh = $(".razreshi").val();
  var bitreit = $(".bit").val();
  var kol_vo_au = $(".kol_vo_au").val();
  var sutki = $(".sutki").val();
  var itog =
    sutki * day * kol_vo_kan * (razresh * bitreit * 24 + kol_vo_au * 28 * 24);
  itog = itog / 1000000;
  itog = itog.toFixed(2);
  $(".itog").text(itog);
});

$(".razreshi").change(function () {
  $(".itog").text("");
  var day = $(".day").val();
  var kol_vo_kan = $(".kol_vo_kanalov").val();
  var razresh = $(".razreshi").val();
  var bitreit = $(".bit").val();
  var kol_vo_au = $(".kol_vo_au").val();
  var sutki = $(".sutki").val();
  var itog =
    sutki * day * kol_vo_kan * (razresh * bitreit * 24 + kol_vo_au * 28 * 24);
  itog = itog / 1000000;
  itog = itog.toFixed(2);
  $(".itog").text(itog);
});
$(".bitreit").change(function () {
  $(".itog").text("");
  var day = $(".day").val();
  var kol_vo_kan = $(".kol_vo_kanalov").val();
  var razresh = $(".razreshi").val();
  var bitreit = $(".bit").val();
  var kol_vo_au = $(".kol_vo_au").val();
  var sutki = $(".sutki").val();
  var itog =
    sutki * day * kol_vo_kan * (razresh * bitreit * 24 + kol_vo_au * 28 * 24);
  itog = itog / 1000000;
  itog = itog.toFixed(2);
  $(".itog").text(itog);
});
$(".kol_vo_au").change(function () {
  $(".itog").text("");
  var day = $(".day").val();
  var kol_vo_kan = $(".kol_vo_kanalov").val();
  var razresh = $(".razreshi").val();
  var bitreit = $(".bit").val();
  var kol_vo_au = $(".kol_vo_au").val();
  var sutki = $(".sutki").val();
  var itog =
    sutki * day * kol_vo_kan * (razresh * bitreit * 24 + kol_vo_au * 28 * 24);
  itog = itog / 1000000;
  itog = itog.toFixed(2);
  $(".itog").text(itog);
});
$(".sutki").change(function () {
  $(".itog").text("");
  var day = $(".day").val();
  var kol_vo_kan = $(".kol_vo_kanalov").val();
  var razresh = $(".razreshi").val();
  var bitreit = $(".bit").val();
  var kol_vo_au = $(".kol_vo_au").val();
  var sutki = $(".sutki").val();
  var itog =
    sutki * day * kol_vo_kan * (razresh * bitreit * 24 + kol_vo_au * 28 * 24);
  itog = itog / 1000000;
  itog = itog.toFixed(2);

  $(".itog").text(itog);
});
$(".bit").change(function () {
  $(".itog").text("");
  var day = $(".day").val();
  var kol_vo_kan = $(".kol_vo_kanalov").val();
  var razresh = $(".razreshi").val();
  var bitreit = $(".bit").val();
  var kol_vo_au = $(".kol_vo_au").val();
  var sutki = $(".sutki").val();
  var itog =
    sutki * day * kol_vo_kan * (razresh * bitreit * 24 + kol_vo_au * 28 * 24);
  itog = itog / 1000000;
  itog = itog.toFixed(2);

  $(".itog").text(itog);
});
var n = 0;
$(".plus").click(function () {
  n = $(this).parent().parent().find("input").val();
  if (n != "") {
    $(".itog").text("");
    var day = $(".day").val();
    var kol_vo_kan = $(".kol_vo_kanalov").val();
    var razresh = $(".razreshi").val();
    var bitreit = $(".bit").val();
    var kol_vo_au = $(".kol_vo_au").val();
    var sutki = $(".sutki").val();
    var itog =
      sutki * day * kol_vo_kan * (razresh * bitreit * 24 + kol_vo_au * 28 * 24);
    itog = itog / 1000000;
    itog = itog.toFixed(2);
    $(".itog").text(itog);

    if (n >= 1) {
      n = parseFloat(n);
      n = n + 1;

      $(this).parent().parent().find("input").val(n);
    } else {
      $(this).parent().parent().find("input").val(1);
    }
  } else {
    $(this).parent().parent().find("input").val(1);
  }
});
$(".minus").click(function () {
  n = $(this).parent().parent().find("input").val();
  if (n != "") {
    $(".itog").text("");
    var day = $(".day").val();
    var kol_vo_kan = $(".kol_vo_kanalov").val();
    var razresh = $(".razreshi").val();
    var bitreit = $(".bit").val();
    var kol_vo_au = $(".kol_vo_au").val();
    var sutki = $(".sutki").val();
    var itog =
      sutki * day * kol_vo_kan * (razresh * bitreit * 24 + kol_vo_au * 28 * 24);
    itog = itog / 1000000;
    itog = itog.toFixed(2);
    $(".itog").text(itog);

    if (n > 1) {
      n = parseFloat(n);
      n = n - 1;

      $(this).parent().parent().find("input").val(n);
    } else {
      $(this).parent().parent().find("input").val(1);
    }
  } else {
    $(this).parent().parent().find("input").val(1);
  }
});
