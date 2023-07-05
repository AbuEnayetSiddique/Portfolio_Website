
    $(document).ready(function() {
      // Sticky navigation
      var navbar = $('#navbar');
      var stickyNavTop = navbar.offset().top;

      var stickyNav = function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > stickyNavTop) {
          navbar.addClass('sticky');
        } else {
          navbar.removeClass('sticky');
        }
      };

      stickyNav();

      $(window).scroll(function() {
        stickyNav();
      });

      // Scrollspy
      $('body').scrollspy({ target: '#navbar', offset: 100 });

      // Active nav-link
      $('#navbar a.nav-link').on('click', function() {
        $('#navbar a.nav-link').removeClass('active');
        $(this).addClass('active');
      });

      // Box shadow on scroll
      $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
          navbar.addClass('box-shadow');
        } else {
          navbar.removeClass('box-shadow');
        }
      });
    });
