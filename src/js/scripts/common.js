// * плавный скролл на якоря

$("body").on("click", '[href*="#"]', function (e) {
  var fixed_offset = 100;
  if (!$(this.hash).length) return;
  $("html,body")
    .stop()
    .animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 2000);
  e.preventDefault();
});

// $(".drop").hover(
//   function () {
//     $(".menu").slideDown(300);
//   },
//   function () {
//     $(".menu").slideUp(300);
//   }
// );
$(document).on("mouseenter", ".drop", function () {
  $(".menu").slideDown(300);
});
$(document).on("mouseleave", ".menu", function () {
  $(".menu").slideUp(300);
});
$(document).on("mouseenter", ".header__nav-item", function () {
  if (!$(this).hasClass("drop")) {
    $(".menu").slideUp(300);
  }
});

/*phone mask */
$("[data-tel-input]").inputmask({
  mask: "+7 (999) 999-99-99",
  showMaskOnHover: false,
  placeholder: "_",
});

// * Вычисляет ширину полосы прокрутки
function scrollWidth() {
  const div = document.createElement("div");
  div.style.height = "50px";
  div.style.width = "50px";
  div.style.overflowY = "scroll";

  document.body.appendChild(div);

  const scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
}

// * Убирает прокрутку у body
function bodyFixed() {
  $("body").css({
    "padding-right": scrollWidth() + "px",
    overflow: "hidden",
  });
}

function clearInlineStyle(element) {
  element.removeAttr("style");
}
/* accordeon */
$(".accordeon__head").on("click", function () {
  $(this)
    .toggleClass("open")
    .closest(".accordeon__item")
    .toggleClass("active")
    .find(".accordeon__body")
    .slideToggle(300);
});

/* btns animation */
// * The function of adding a loader to the button
function addBtnLoader(btn) {
  btn
    .attr("disabled", "disabled")
    .css("width", btn.outerWidth() + "px")
    .css("height", btn.outerHeight() + "px")
    .html(
      '<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>'
    );
}

// * The function of removing the loader from the button
function removeBtnLoader(btn, btnOld) {
  btn.removeAttr("disabled").removeAttr("style").html(btnOld);
}

/* modals */

function showModal(modalParam) {
  let modal = $(`.modal[data-modal=${modalParam}]`);
  let bg = $(".modals");
  if (bg.is(":visible")) {
    modal.fadeIn(300);
  } else {
    $(".modals").fadeIn(300);
    modal.fadeIn(300);
    bodyFixed();
  }
}

function hideModal(modalParam) {
  let modal = $(`.modal[data-modal=${modalParam}]`);
  $(".modals").fadeOut(300);
  modal.fadeOut(300);
  clearInlineStyle($("body"));
}
function openSuccessModal() {
  showModal("thanks-modal");
}
function clearModalForm(form = null) {
  const forms =
    form !== null ? form.get() : document.querySelectorAll(".modal__form");
  if (form.length) {
    forms.forEach((form) => {
      form.reset();
      form.querySelectorAll(".custom-input.filled").forEach((input) => {
        input.classList.remove("filled");
      });
      let span = form.querySelector(".custom-input__span");
      if (span) {
        span.innerText = "Прикрепите ТЗ если есть";
      }
    });
  }
}
$(".openmodal").on("click", function (e) {
  e.preventDefault();
  const modalId = $(this).attr("data-modal");
  showModal(modalId);
});

$(".modal__close, .modal[data-modal=thanks-modal] .primary-btn").on(
  "click",
  function () {
    let form = $(this).closest(".modal").find("form");
    const element = $(this);
    const modal = element.closest(".modal").attr("data-modal");
    hideModal(modal);
    clearModalForm(form);
  }
);
function ajaxPost(url, data, headers = {}, params = {}) {
  return fetch(url, {
    method: "POST",
    body: data,
    headers: headers,
    ...params,
  });
}

$(".validate-field").on("input", function () {
  $(this).removeClass("validate-error");
});
$("form").on("submit", function (e) {
  e.preventDefault();
  let form = $(this);
  let btn = form.find("button");
  let btnHtml = btn.html();
  let validateFields = false;
  let correct = 0;
  const fieldsCount = form.find(".validate-field").length;
  let fd = new FormData(form[0]);

  form.find(".validate-field").each(function () {
    let inputVal = $(this)
      .val()
      .toString()
      .replace(/[^\d.]/g, "");
    if ($(this).attr("name") === "phone" && inputVal.length < 11) {
      correct--;
      $(this).addClass("validate-error");
    }
    if (!$(this).val()) {
      $(this).addClass("validate-error");
    } else {
      correct++;
    }
    if (correct === fieldsCount) {
      validateFields = true;
    }
  });

  if (validateFields) {
    form
      .find(".validate-field")
      .closest("custom-area")
      .removeClass("validate-error");
    addBtnLoader(btn);
    ajaxPost("", fd)
      .then(function (response) {
        // return response.json();
      })
      .then(function (data) {
        clearModalForm(form);
        removeBtnLoader(btn, btnHtml);

        if (form.hasClass("modal__form")) {
          let modal = form.closest(".modal");
          modal.fadeOut(300);
          setTimeout(function () {
            openSuccessModal();
          }, 300);
        } else {
          $(".modals").fadeIn(300);
          openSuccessModal();
        }
      })
      ["catch"](function (error) {
        return console.log(error);
      });
  }
});
/* создает оформление списка*/
$(document).ready(function () {
  let orderedList = $(document).find(".post ol");
  orderedList.each(function () {
    let items = $(this).find("li");
    items.each(function () {
      let self = $(this);
      let itemIndex = self.index();
      self.append(`<span></span><span></span>`);
      self.append(`<div class="number">${itemIndex + 1}</div>`);
    });
  });
});
/*Раскрывает дропдаун в таблице */
$(".custom-table__dropdown").on("click", function () {
  $(this).toggleClass("active");
  $(this).next(".custom-table__body").slideToggle(300);
});
/*переключает теги */
$(".tag").on("click", function () {
  $(this).addClass("active").siblings().removeClass("active");
});

/*поиск в шапке */
$(".search__input").on("input", function () {
  $(this).closest(".search").addClass("active");
});

$(".search__close").on("click", function () {
  $(this).closest(".search").removeClass("active");
  $(this).closest(".search").find("input").val("");
});

/* мобильное меню */
$(".burger").on("click", function () {
  $(".mobile-menu").addClass("open");
  bodyFixed();
});
$(".mobile-menu__close").on("click", function () {
  $(".mobile-menu").removeClass("open");
  $(".mobile-submenu").removeClass("open");
  $(".mobile-submenu").find(".mobile-menu__title").remove();
  $(".mobile-submenu").find(".mobile-menu__back").remove();
  clearInlineStyle($("body"));
});
$(".mobile-menu__list").find(".mobile-menu__link_drop").removeAttr("href");
$(".mobile-menu__link_drop").on("click", function () {
  let mobSubmenu = $(this).next(".mobile-submenu");
  let submenuTitle = $(this).text();
  let submenuBack;
  mobSubmenu.addClass("open");
  // mobSubmenu.find(".mobile-menu__title").text(submenuTitle);

  if ($(this).closest("ul").hasClass("mobile-menu__list")) {
    submenuBack = $(this).closest("ul").prev(".mobile-menu__title").text();
  } else {
    submenuBack = $(this)
      .closest(".mobile-submenu")
      .prev(".mobile-menu__link_drop")
      .text();
  }
  // mobSubmenu.find(".mobile-menu__back").text(submenuBack);
  mobSubmenu.prepend(`<div class="mobile-menu__back">${submenuBack}</div>`);
  mobSubmenu.prepend(`<div class="mobile-menu__title">${submenuTitle}</div>`);
});
$(document).on("click", ".mobile-menu__back", function () {
  $(this).closest(".mobile-submenu").removeClass("open");
  $(this).closest(".mobile-submenu").find(".mobile-menu__title").remove();
  $(this).closest(".mobile-submenu").find(".mobile-menu__back").remove();
});
// $(".drop-submenu").on("click", function () {
//   $(this).next(".mobile-submenu").addClass("open");
// });
/*таблица в подуслуге в моб версии */
$(document).ready(function () {
  let firstColText = $(".custom-table__head")
    .find(".custom-table__column:nth-child(1)")
    .text();
  let secondColText = $(".custom-table__head")
    .find(".custom-table__column:nth-child(2)")
    .text();
  let thirdColText = $(".custom-table__head")
    .find(".custom-table__column:nth-child(3)")
    .text();
  console.log(firstColText, secondColText, thirdColText);
  if ($(window).width() < 660) {
    $(".custom-table__row")
      .find(".custom-table__column:nth-child(1)")
      .before(
        `<div class="custom-table__column custom-table__column_mobile" style="font-weight: 700">${firstColText}</div>`
      );
    $(".custom-table__row")
      .find(".custom-table__column:nth-child(3)")
      .before(
        `<div class="custom-table__column custom-table__column_mobile" style="font-weight: 700">${secondColText}</div>`
      );
    $(".custom-table__row")
      .find(".custom-table__column:nth-child(5)")
      .before(
        `<div class="custom-table__column custom-table__column_mobile" style="font-weight: 700">${thirdColText}</div>`
      );
  } else {
    $(".custom-table__column_mobile").remove();
  }
});

/* добавляет иконку выбранного Option в select в портфолио */
// $(".custom-select__field").change(function (e) {
//   let parent = $(this).closest(".custom-select");
//   let iconBlock = parent.find(".custom-select__icon");
//   let dataIcon = $(this).find(":selected").attr("data-icon");
//   console.log(dataIcon);
//   iconBlock.attr("style", `background-image: url(${dataIcon})`);
// });
$(".filter__item").on("click", function () {
  if ($(this).children(".filter__chosen").hasClass("active")) {
    $(this).children(".filter__chosen").removeClass("active");
    return;
  } else {
    $(".filter__chosen").removeClass("active");
    $(this).children(".filter__chosen").addClass("active");
  }
});
$(".filter__item li").on("click", function () {
  let txt = $(this).text();
  let icon = $(this).find(".filter__icon");
  if (icon.length) {
    let iconSvg = icon.html();
    $(this)
      .closest(".filter__item")
      .find(".filter__chosen-icon")
      .show()
      .html(iconSvg);
  } else {
    $(this).closest(".filter__item").find(".filter__chosen-icon").hide();
  }
  $(this)
    .closest(".filter__item")
    .find(".filter__chosen")
    .addClass("active")
    .find(".filter__chosen-text")
    .text(txt);
});
/*хлебные крошки в моб версии */
if ($(window).width() < 992) {
  let mainCrumb = $(".breadcrumbs-item:eq(-2)");
  mainCrumb.addClass("back").attr("style", "display: flex");
} else {
  $(".breadcrumbs-item").removeClass("back").removeAttr("style");
}
/* переносит название услуги в 2 строки */
let title = $(".services-card__title");
title.each(function () {
  let text = $(this).text();
  $(this).html(text.replace(" ", "<br>"));
});
/*считает отсуп у навигации слайдера на главной*/
function sliderIndent() {
  if ($(window).width() > 1232) {
    let windowWidth = $(window).width();
    let indentsWidth = windowWidth - 1172;
    let navIndent = indentsWidth / 2;
    $(".hero__slider-container").attr("style", `right: ${navIndent}px`);
    console.log(windowWidth, indentsWidth);
  }
}
$(document).ready(function () {
  sliderIndent();
});
$(window).on("resize", function () {
  sliderIndent();
});
