window.$ = window.jQuery = require('jquery');
global.Popper = require('popper.js');
var bootstrap = require('bootstrap');
var mixitup = require('mixitup');
var magnificPopup = require('magnific-popup');
var matchHeight = require('jquery-match-height');

var ScrollReveal = require('scrollreveal');

ScrollReveal().reveal('.reveal',{ interval: 300 });
ScrollReveal().reveal('.up',{ distance: '20px'});

var design = document.getElementById('Design');

if (design) {
var mixer = mixitup('.items .row', {
  selectors: {
      control: '[data-mixitup-control]'
  }
});
};

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
  scrollTop: ($('#Design').offset().top)
},500);
});

$('.designLink').click(function(){
  $('html, body').animate({
    scrollTop: ($('#Design').offset().top)
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

// hamburger
var hamburger = document.querySelector('.hamburger');
var homeNav = document.querySelector('.homeNav');
hamburger.addEventListener('click', function(){
if (hamburger.classList.contains('is-active')) {
  $.magnificPopup.close();
  hamburger.classList.toggle('is-active');
  
  setTimeout(function(){
    homeNav.classList.remove('mfp-hide');
  },500);

} else {
  
  hamburger.classList.toggle('is-active');
  
  $.magnificPopup.open({
    items: {
        src: '.homeNav' 
    },
    type: 'inline',
    mainClass: 'menuOverlay mfp-fade',
    removalDelay: 400,
    modal: {
      enabled: true
    }
});
}
});

(function($) {
	
	/*
	* We need to turn it into a function.
	* To apply the changes both on document ready and when we resize the browser.
	*/
	
	function mediaSize() { 
		/* Set the matchMedia */
		if (window.matchMedia('(min-width: 768px)').matches && hamburger.classList.contains('is-active')) {
      $.magnificPopup.close();
      hamburger.classList.toggle('is-active');
      setTimeout(function(){
        homeNav.classList.remove('mfp-hide');
      },400);
		} 
	};
	
	/* Call the function */
  mediaSize();
  /* Attach the function to the resize event listener */
	window.addEventListener('resize', mediaSize, false);  
	
})(jQuery);


// homepage
var uLink = document.querySelector('.uniLink');
var benUni = document.querySelector('.benUni');

if(uLink){
uLink.addEventListener('click', function(){
benUni.classList.toggle('uniHello');
benUni.classList.remove('vHidden');
});
};

// gallery

// var photoNumber = 34;
// var thumbPath = '/photos/thumbs/';
// var fullPath = '/photos/full/';

 var grid = document.getElementById('photoGrid');

// function makeGallery(){
// var galleryHTML = '';
// for (i=1; i<photoNumber; i++){
//     galleryHTML += '<a class="tile" href="' + fullPath + 'img-' + i + '.jpg">' + '<img class="img-fluid gal-img-' + i + '" src="' + thumbPath + 'img-' + i + '.jpg">' + '<div class="overlay"></div>' + '</a>';

// }
// return galleryHTML;

// };


if (grid){
// grid.innerHTML = makeGallery();


// for (i=1; i<photoNumber; i++){
//     var img = document.querySelector('.gal-img-' + i);
//     var width = img.naturalWidth;
//     var height = img.naturalHeight;
//     img.width = width;
//     img.height = height;
// };

$('#photoGrid').each(function() { // the containers for all your galleries
  $(this).magnificPopup({
      delegate: 'a', // the selector for gallery item
      type: 'image',
      gallery: {
        enabled:true
      },
      mainClass: 'mfp-fade photoOverlay',
    removalDelay: 400,
    tCounter: false,
  });
});
};

