$(document).ready(function () {
  AOS.init({
    once: true,
    offset: 0,
    easing: "ease-in-out-cubic",
    duration: "400",
  });

  if ($(this).scrollTop() >= 42) {
    $(".header-nav").addClass("scrolled");
  } else {
    $(".header-nav").removeClass("scrolled");
  }
  $(window).on("load", function () {
    if ($(this).scrollTop() >= 42) {
      $(".header-nav").addClass("scrolled");
    } else {
      $(".header-nav").removeClass("scrolled");
    }
  });
  $(document).scroll(function () {
    if ($(this).scrollTop() >= $("#main").offset().top) {
      $(".back-top").addClass("active");
    } else {
      $(".back-top").removeClass("active");
    }
    if ($(this).scrollTop() >= 42) {
      $("#header").addClass("scrolled");
    } else {
      $("#header").removeClass("scrolled");
    }
  });
  $(".back-top").on("click", function () {
    $(".back-top").removeClass("active");
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  $(".list-event").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: "0",
    dots: false,
    fade: false,
    autoplay: false,
    infinite: true,
    draggable: false,
    swipeToSlide: false,
    touchMove: false,
    swipe: false,
    nextArrow: ".next_caro",
    prevArrow: ".prev_caro",

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
$(".technology-content")
  .find(".layer-show")
  .hover(
    function () {
      $($(this).attr("data-show")).addClass("active");
    },
    function () {
      $(".technology-item").removeClass("active");
    }
  ),
  $(".technology-item").hover(
    function () {
      $(this).addClass("active");
    },
    function () {
      $(".technology-item").removeClass("active");
    }
    // ),
    // $(".control-list__item").click(function () {
    //   $(".project-tab").find(".tab-item").css("opacity", 1),
    //     $(".project-tab").find(".tab-item").css("transform", "scale(1)"),
    //     $(this).addClass("active"),
    //     $(this).siblings().removeClass("active"),
    //     $($(this).attr("data-show")).slideDown(),
    //     $($(this).attr("data-show")).siblings().slideUp();
    // });
  );
