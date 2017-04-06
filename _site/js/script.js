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


}); // document ready function
