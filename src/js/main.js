/**
 * main.js
 * Entrypoint for webpack
 */
import 'bootstrap';
require('imports-loader?!./lib/jquery.waypoints.min.js');
require('imports-loader?!./lib/jquery.magnific-popup.min.js');
require('imports-loader?!./lib/owl.carousel.min.js');
require('imports-loader?!./lib/jquery.easing.1.3.js');
require('imports-loader?this=>window!./lib/modernizr-2.6.2.min.js');
require('imports-loader?this=>window!./lib/respond.min.js');

import ready from './utils/ready';
import registerServiceWorker from './utils/serviceWorker';
import { info } from './utils/debug';

// iPad and iPod detection	
function isiPad() {
  return (navigator.platform.indexOf("iPad") != -1);
};

function isiPhone() {
  return (
    (navigator.platform.indexOf("iPhone") != -1) ||
    (navigator.platform.indexOf("iPod") != -1)
  );
};

function fullHeight() {
  $('.js-fullheight').css('height', $(window).height());
  $(window).resize(function () {
    $('.js-fullheight').css('height', $(window).height());
  });
};

function burgerMenu() {
  $('.js-colorlib-nav-toggle').on('click', function (event) {
    event.preventDefault();
    var $this = $(this);
    if ($('body').hasClass('menu-show')) {
      $('body').removeClass('menu-show');
      $('#colorlib-main-nav > .js-colorlib-nav-toggle').removeClass('show');
    } else {
      $('body').addClass('menu-show');
      setTimeout(function () {
        $('#colorlib-main-nav > .js-colorlib-nav-toggle').addClass('show');
      }, 900);
    }
  })
};

// Animations
function contentWayPoint() {
  var i = 0;
  $('.animate-box').waypoint(function (direction) {
    if (direction === 'down' && !$(this.element).hasClass('animated')) {
      i++;
      $(this.element).addClass('item-animate');
      setTimeout(function () {

        $('body .animate-box.item-animate').each(function (k) {
          var el = $(this);
          setTimeout(function () {
            var effect = el.data('animate-effect');
            if (effect === 'fadeIn') {
              el.addClass('fadeIn animated');
            } else {
              el.addClass('fadeInUp animated');
            }

            el.removeClass('item-animate');
          }, k * 200, 'easeInOutExpo');
        });

      }, 100);
    }
  }, { offset: '85%' });
};

function counter() {
  $('.js-counter').countTo({
    formatter: function (value, options) {
      return value.toFixed(options.decimals);
    },
  });
};

function counterWayPoint() {
  if ($('#colorlib-counter').length > 0) {
    $('#colorlib-counter').waypoint(function (direction) {

      if (direction === 'down' && !$(this.element).hasClass('animated')) {
        setTimeout(counter, 400);
        $(this.element).addClass('animated');
      }
    }, { offset: '90%' });
  }
};

// Owl Carousel
function owlCarouselFeatureSlide() {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplay: true,
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoHeight: true,
    mouseDrag: false,
    autoplayHoverPause: false,
    items: 1,
    navText: [
      "<i class='icon-arrow-left3 owl-direction'></i>",
      "<i class='icon-arrow-right3 owl-direction'></i>"
    ]
  });
  var owl1 = $('.owl-carousel1');
  owl1.owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplay: true,
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    autoHeight: true,
    mouseDrag: false,
    autoplayHoverPause: false,
    center: true,
    items: 1,
    navText: [
      "<i class='icon-arrow-left3 owl-direction'></i>",
      "<i class='icon-arrow-right3 owl-direction'></i>"
    ]
  });
};

function magnifPopup() {
  $('.image-popup').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-with-zoom',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true, // By default it's false, so don't forget to enable it
      duration: 300, // duration of the effect, in milliseconds
      easing: 'ease-in-out', // CSS transition easing function
      // The "opener" function should return the element from which popup will be zoomed in
      // and to which popup will be scaled down
      // By defailt it looks for an image tag:
      opener: function (openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  });
};

function linkMagnifPopup() {
  $('.image-popup-link').magnificPopup({
    type: 'image'
  });
};

function magnifVideo() {
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });
};

function onReady(e) {
  registerServiceWorker();
  fullHeight();
  burgerMenu();
  // counterWayPoint();
  contentWayPoint();
  owlCarouselFeatureSlide();
  magnifPopup();
  linkMagnifPopup();
  magnifVideo();
  info(`Event: ${e.type}`, `Datestamp: ${this.date}`);
};

ready(onReady, {
  date: new Date(),
});
