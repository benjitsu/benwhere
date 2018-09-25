window.$ = window.jQuery = require('jquery');
global.Popper = require('popper.js');
var bootstrap = require('bootstrap');
var mixitup = require('mixitup');
var magnificPopup = require('magnific-popup');
var matchHeight = require('jquery-match-height');

var mixer = mixitup('.items .row', {
  selectors: {
      control: '[data-mixitup-control]'
  }
});


$('.dropdown-chevron-mobile').on('click', function(e) {

  e.preventDefault();

  // Toggles the arrow class on itself.
  $(this).toggleClass('open');

  // Get the parent list item and its id.
  var parent = $(e.target).parent('li');
  parent.children('ul').toggleClass('open');

});

/* Back to top */
$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
    $('.back-to-top').fadeIn();
  } else {
    $('.back-to-top').fadeOut();
  }
});

$('.back-to-top').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
});


$('.arrow').click(function(){
$('html, body').animate({
  scrollTop: ($('#Design').offset().top -50)
},500);
});

/* Match height */
$('.pricing-card-features').matchHeight();
$('.panel').matchHeight();

/* Magnific Popup */
$('.image-link').magnificPopup({
  type:'image',
  gallery: {
    enabled: true
  }
});


$('.ajax-popup-link').magnificPopup({
  type: 'ajax',
  mainClass: 'mfp-move-from-top',
  removalDelay: 400,
  fixedContentPos: true,
  closeBtnInside: true,
});



var uLink = document.querySelector('.uniLink');
var benUni = document.querySelector('.benUni');

uLink.addEventListener('click', function(){
benUni.classList.toggle('uniHello');
});