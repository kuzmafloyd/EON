$(document).ready(function() {

  // Smooth Scroll
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
          }
        }
    });
  });


  // Drop Down Menu
  $(".dropdown-section").click(function(){
    $(this).children(".dropdown-content").slideToggle();
    $(this).children("button").slideToggle();

  });

  // Gallery View Toggle

    $("#gallery-view").click(function(){
      $(this).addClass('active');
      $('#single-view').removeClass('active');
      $("#gallery-container").addClass('gallery-view').removeClass('single-view');
    });

    $("#single-view").click(function(){
      $(this).addClass('active');
      $('#gallery-view').removeClass('active');
      $("#gallery-container").addClass('single-view').removeClass('gallery-view');
    });

    $("#video-button").click(function(){
      $(this).toggleClass('active');
      $('#video-popup').fadeToggle();
    });



	$('.lightbox-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		}
	});



//   $('.portfolio-images').masonry({
//     // options
//     itemSelector: '.grid-item',
//     columnWidth: 200,
//     gutter: 10
//   });
//
//   $('ul#filter a').click(function() {
//
//     $(this).css('outline','none');
//     $('ul#filter .current').removeClass('current');
//     $(this).parent().addClass('current');
//
//     var filterVal = $(this).text().toLowerCase().replace(' ','-');
//
//     if(filterVal == 'all') {
//       $('ul#portfolio li.hidden').fadeIn('slow').removeClass('hidden').addClass('grid-item');
//       $('.portfolio-images').masonry({
//         // options
//         itemSelector: '.grid-item',
//         columnWidth: 100,
//         gutter: 10
//       });
//     } else {
//       $('ul#portfolio li').each(function() {
//         if(!$(this).hasClass(filterVal)) {
//           $(this).fadeOut('normal').addClass('hidden');
//           $(this).removeClass('grid-item');
//           $('.portfolio-images').masonry({
//             // options
//             itemSelector: '.grid-item',
//             columnWidth: 200,
//             gutter: 10
//           });
//         } else {
//           $(this).fadeIn('slow').removeClass('hidden');
//           $(this).addClass('grid-item');
//         }
//       });
//     };
//
//     return false;
//   });
// }); // document ready function





  $('ul#filter a').click(function() {
    $(this).css('outline','none');
    $('ul#filter .current').removeClass('current');
    $(this).parent().addClass('current');

    var filterVal = $(this).text().toLowerCase().replace(' ','-');

    if(filterVal == 'all') {
      $('ul#portfolio li').fadeOut('fast').addClass('hidden');
      $('ul#portfolio li.hidden').delay(500).fadeIn('fast').removeClass('hidden');
    } else {
      $('ul#portfolio li').each(function() {
        if(!$(this).hasClass(filterVal)) {
          $(this).fadeOut('fast').addClass('hidden');
          //$(this).delay(1000).fadeOut('slow').addClass('hidden');
        } else {
          $(this).fadeOut('fast').addClass('hidden');
          $(this).delay(500).fadeIn('fast').removeClass('hidden');
        }
      });
    }

    return false;
  });


  $(".hamburger").click(function(){

    $(this).toggleClass('active');
    $(".mobile-nav").fadeToggle();

  });

}); // document ready function
