/* La barre de sous-navigation devient fixe et 
reste collé si jamais elle est en haut de la fenêtre */
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
      $('#sub-nav-lg-md').addClass('fixed');
      $('#sub-nav-sm-xs').addClass('fixed');
      $('#section-1').css('padding-top', '95px');
    } else {
      $('#sub-nav-lg-md').removeClass('fixed');
      $('#sub-nav-sm-xs').removeClass('fixed');
      $('#section-1').css('padding-top', '50px');
    }
  });
});
