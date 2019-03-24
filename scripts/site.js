$(document).ready(function() {

  // Full Screen Nav Overlay
  $('.menu-burger, .menu-items').on('click', function() {
    $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
    $('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
  });


  // Image Fadein

  $('img').on('webkitAnimationEnd', function(e) {
    $(this).addClass('visible');
  });

  $('img').on('MSAnimationEnd', function(e) {
    $(this).addClass('visible');
  });

  $('img').on('animationend', function(e) {
    $(this).addClass('visible');
  });

  //Portriat Fade Out

  $(window).scroll(function() {
    $("#portrait").css("opacity", 1 - $(window).scrollTop() / 600);
  });

  // Sticky

  var instance = $('article.info').fixTo('.case-study');
  var stickyInfo = function() {
    var windowWidth = $(window).width();
    if (windowWidth > 1040) {
      //fix
      instance.fixTo('start');
    } else {
      //unfix
      instance.fixTo('stop');
    }
  };

  stickyInfo();

  $(window).resize(function() {
    stickyInfo();
  });

  // Smooth Scrolling
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 900, 'swing', function() {
      window.location.hash = target;
    });
  });
});