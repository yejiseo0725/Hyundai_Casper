$(function () {
  // Header Slide-Toggle
  //   $(".gnb ul li .toggle").slideUp();
  $(".header .inner-header").on("mouseenter", function () {
    $(".gnb ul li .toggle").stop().slideToggle();
    // $(".gnb ul li .toggle").slideDown();
  });

  $(".header .inner-header").on("mouseleave", function () {
    $(".gnb ul li .toggle").slideUp();
  });

  $(".best .slide-con").slick({
    dots: true,
    arrows: true,
    slidesToShow: 1,
    // centerPadding: '50%',
    prevArrow: $(".best .left-btn"),
    nextArrow: $(".best .right-btn"),
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true,
  });

  $(".event .event-item").slick({
    arrows: true,
    prevArrow: $(".main .event .prev-btn"),
    nextArrow: $(".main .event .next-btn"),
    autoplay: true,
    autoplaySpeed: 1500,
  });
});
