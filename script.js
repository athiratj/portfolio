$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar
    if (this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }
  });

  $('.navbar .menu li a').click(function () {
    // smooth scroll
    $('html').css("scrollBehavior", "smooth");
  });

  // toggle menu
  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });

});