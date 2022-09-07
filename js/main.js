$(function () {
  // Header Slide-Toggle
  $(".gnb ul li .toggle").slideUp(500);

  $(".header").on({
    mouseenter: function () {
      // GNB Animation
      $(".gnb ul li .toggle").stop().slideDown(500);
      $(".header .inner-header").addClass("background");
      $(".header .logo a:last-child img").css({
        display: "block",
      });
      $(".header .gnb ul li a.gnb-cat").css({
        color: "#000",
      });
      $(".header .side-menu a i").css({
        color: "#000",
      });
      $(".header .gnb ul li.gnb-list:last-child a.gnb-cat").css({
        color: "#2b8ab0",
      });
    },
    mouseleave: function () {
      $(".gnb ul li .toggle").stop().slideUp(500);
      $(".header .inner-header").removeClass("background");
      $(".header .logo a:last-child img").css({
        display: "",
      });
      $(".header .gnb ul li a.gnb-cat").css({
        color: "",
      });
      $(".header .side-menu a i").css({
        color: "",
      });
    },
  });

  $(".header .gnb ul li").on({
    mouseenter: function () {
      $(this).find("a").addClass("line");
    },
    mouseleave: function () {
      $(this).find("a").removeClass("line");
    },
  });

  $(".best .slide-con").slick({
    dots: true,
    arrows: true,
    slidesToShow: 1,
    prevArrow: $(".best .left-btn"),
    nextArrow: $(".best .right-btn"),
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 800,
    centerMode: true,
    pauseOnHover: true,
  });

  $(".event .event-item").slick({
    arrows: true,
    prevArrow: $(".main .event .prev-btn"),
    nextArrow: $(".main .event .next-btn"),
    autoplay: true,
    autoplaySpeed: 1500,
  });

  const imgOffset = $(".main .event .event-item").offset().top;
  const benefitOffset = $(".main .benefit .title").offset().top;

  $(window).scroll(function () {
    const now = $(this).scrollTop();
    const nowScrollTop = parseInt(now);

    // header
    if (nowScrollTop >= 1) {
      $(".header .inner-header").addClass("active");
      $(".header .logo a:last-child img").addClass("active");
      $(".header .gnb ul li a.gnb-cat").addClass("active");
      $(".header .side-menu a i").addClass("active");
    } else {
      $(".header .inner-header").removeClass("active");
      $(".header .logo a:last-child img").removeClass("active");
      $(".header .gnb ul li a.gnb-cat").removeClass("active");
      $(".header .side-menu a i").removeClass("active");
    }

    if (nowScrollTop >= benefitOffset) {
      $(".main .side-bar .side-img").css({
        display: "block",
      });
    } else {
      $(".main .side-bar .side-img").css({
        display: "",
      });
    }

    if (nowScrollTop >= imgOffset) {
      $(".main .recommend .recommend-items .item").addClass("active");
    }
  });
});
