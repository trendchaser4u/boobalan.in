!function(e){function o(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,o),n.l=!0,n.exports}var t={};o.m=e,o.c=t,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},o.p="/static/js",o(o.s=0)}([function(e,o,t){"use strict";t.r(o);const a=document;let n;const i=e=>{a.removeEventListener("DOMContentLoaded",i),n=e};a.addEventListener("DOMContentLoaded",i);const s=!0,r=(e,...o)=>{s||console&&console[e]&&console[e](...o)},l=(...e)=>r("info",...e);((e,o)=>{const t=o||window;if("complete"===a.readyState)e.call(t,n);else{const o=i=>{a.removeEventListener("DOMContentLoaded",o),n=i,e.call(t,i)};a.addEventListener("DOMContentLoaded",o)}})(function(e){navigator.serviceWorker&&s&&navigator.serviceWorker.register("/sw.js").catch(e=>{console.error("Unable to register service worker.",e)}),$(".js-fullheight").css("height",$(window).height()),$(window).resize(function(){$(".js-fullheight").css("height",$(window).height())}),$(".js-colorlib-nav-toggle").on("click",function(e){e.preventDefault(),$(this),$("body").hasClass("menu-show")?($("body").removeClass("menu-show"),$("#colorlib-main-nav > .js-colorlib-nav-toggle").removeClass("show")):($("body").addClass("menu-show"),setTimeout(function(){$("#colorlib-main-nav > .js-colorlib-nav-toggle").addClass("show")},900))}),function(){var e=0;$(".animate-box").waypoint(function(o){"down"!==o||$(this.element).hasClass("animated")||(e++,$(this.element).addClass("item-animate"),setTimeout(function(){$("body .animate-box.item-animate").each(function(e){var o=$(this);setTimeout(function(){"fadeIn"===o.data("animate-effect")?o.addClass("fadeIn animated"):o.addClass("fadeInUp animated"),o.removeClass("item-animate")},200*e,"easeInOutExpo")})},100))},{offset:"85%"})}(),$(".owl-carousel").owlCarousel({animateOut:"fadeOut",animateIn:"fadeIn",autoplay:!0,loop:!0,margin:0,nav:!0,dots:!1,autoHeight:!0,mouseDrag:!1,autoplayHoverPause:!1,items:1,navText:["<i class='icon-arrow-left3 owl-direction'></i>","<i class='icon-arrow-right3 owl-direction'></i>"]}),$(".owl-carousel1").owlCarousel({animateOut:"fadeOut",animateIn:"fadeIn",autoplay:!0,loop:!0,margin:0,nav:!1,dots:!0,autoHeight:!0,mouseDrag:!1,autoplayHoverPause:!1,center:!0,items:1,navText:["<i class='icon-arrow-left3 owl-direction'></i>","<i class='icon-arrow-right3 owl-direction'></i>"]}),$(".image-popup").magnificPopup({type:"image",removalDelay:300,mainClass:"mfp-with-zoom",gallery:{enabled:!0},zoom:{enabled:!0,duration:300,easing:"ease-in-out",opener:function(e){return e.is("img")?e:e.find("img")}}}),$(".image-popup-link").magnificPopup({type:"image"}),$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1}),l(`Event: ${e.type}`,`Datestamp: ${this.date}`)},{date:new Date})}]);