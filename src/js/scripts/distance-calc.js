var n = 0;
$(".plus").click(function () {
  var type_camera = $(".type_camera").val();
  var raz = $(".raz").val();
  var matrix = $(".matrix").val();
  var focus = $(".focus").val();
  var object = $(".object").val();
  var object_detail = $(".object_detail").val();
  n = $(this).parent().parent().find("input").val();

  if (n != "") {
    $(".itog").text("");
    var itog =
      (type_camera * raz * ((100 * object) / object_detail) * focus) / matrix;
    itog = itog / 1000;
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
  var type_camera = $(".type_camera").val();
  var raz = $(".raz").val();
  var matrix = $(".matrix").val();
  var focus = $(".focus").val();
  var object = $(".object").val();
  var object_detail = $(".object_detail").val();
  if (n != "") {
    $(".itog").text("");

    var itog =
      (type_camera * raz * ((100 * object) / object_detail) * focus) / matrix;
    itog = itog / 1000;
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
$(".type_camera").change(function () {
  $(".itog").text("");
  var type_camera = $(".type_camera").val();
  var raz = $(".raz").val();
  var matrix = $(".matrix").val();
  var focus = $(".focus").val();
  var object = $(".object").val();
  var object_detail = $(".object_detail").val();

  var itog =
    (type_camera * raz * ((100 * object) / object_detail) * focus) / matrix;

  itog = itog.toFixed(2);
  $(".itog").text(itog);
});

$(".raz").change(function () {
  $(".itog").text("");
  var type_camera = $(".type_camera").val();
  var raz = $(".raz").val();
  var matrix = $(".matrix").val();
  var focus = $(".focus").val();
  var object = $(".object").val();
  var object_detail = $(".object_detail").val();

  var itog =
    (type_camera * raz * ((100 * object) / object_detail) * focus) / matrix;

  itog = itog.toFixed(2);
  $(".itog").text(itog);
});

$(".matrix").change(function () {
  $(".itog").text("");
  var type_camera = $(".type_camera").val();
  var raz = $(".raz").val();
  var matrix = $(".matrix").val();
  var focus = $(".focus").val();
  var object = $(".object").val();
  var object_detail = $(".object_detail").val();

  var itog =
    (type_camera * raz * ((100 * object) / object_detail) * focus) / matrix;

  itog = itog.toFixed(2);
  $(".itog").text(itog);
});

$(".focus").change(function () {
  $(".itog").text("");
  var type_camera = $(".type_camera").val();
  var raz = $(".raz").val();
  var matrix = $(".matrix").val();
  var focus = $(".focus").val();
  var object = $(".object").val();
  var object_detail = $(".object_detail").val();

  var itog =
    (type_camera * raz * ((100 * object) / object_detail) * focus) / matrix;

  itog = itog.toFixed(2);
  $(".itog").text(itog);
});

$(".object").change(function () {
  $(".itog").text("");
  var type_camera = $(".type_camera").val();
  var raz = $(".raz").val();
  var matrix = $(".matrix").val();
  var focus = $(".focus").val();
  var object = $(".object").val();
  var object_detail = $(".object_detail").val();

  var itog =
    (type_camera * raz * ((100 * object) / object_detail) * focus) / matrix;

  itog = itog.toFixed(2);
  $(".itog").text(itog);
});
$(".value_detail").text(
  "объект занимает по меньшей мере 5 % высоты экрана. Начиная с этого уровня наблюдатель имеет возможность контролировать количество, направление и скорость движения объектов в зоне наблюдения."
);

$(".object_detail").change(function () {
  if ($(".object_detail :selected").val() == "5") {
    $(".value_detail").text("");
    $(".value_detail").text(
      "объект занимает по меньшей мере 5 % высоты экрана. Начиная с этого уровня наблюдатель имеет возможность контролировать количество, направление и скорость движения объектов в зоне наблюдения."
    );
  }

  if ($(".object_detail :selected").val() == "10") {
    $(".value_detail").text("");
    $(".value_detail").text(
      "объект занимает по меньшей мере 10 % высоты экрана. Наблюдатель может с высокой степенью определённости установить присутствие человека в зоне наблюдения."
    );
  }

  if ($(".object_detail :selected").val() == "27") {
    $(".value_detail").text("");
    $(".value_detail").text(
      "объект занимает от 25 до 30 % высоты экрана. В этом масштабе различаются характерные детали, например, одежда."
    );
  }

  if ($(".object_detail :selected").val() == "50") {
    $(".value_detail").text("");
    $(".value_detail").text(
      "объект занимает по меньшей мере 50 % высоты экрана и можно сказать с высокой степенью определённости, наблюдалася ли он ранее в зоне наблюдения."
    );
  }

  if ($(".object_detail :selected").val() == "100") {
    $(".value_detail").text("");
    $(".value_detail").text(
      "объект занимает по меньшей мере 100 % высоты экрана, качество изображения и уровень детализации достаточны для однозначного установления личности."
    );
  }

  $(".itog").text("");
  var type_camera = $(".type_camera").val();
  var raz = $(".raz").val();
  var matrix = $(".matrix").val();
  var focus = $(".focus").val();
  var object = $(".object").val();
  var object_detail = $(".object_detail").val();

  var itog =
    (type_camera * raz * ((100 * object) / object_detail) * focus) / matrix;

  itog = itog.toFixed(2);
  $(".itog").text(itog);
});
