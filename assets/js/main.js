$(document).ready(function(){

  //page slide function
  $(".navbar-nav li a").click(function() {

    var ourclass = $(this).attr('class');
    
    $('html, body').animate({
            scrollTop: $("#"+ourclass).offset().top-114
        }, 1500); 

    $(".navbar-nav li a").removeClass("active");

    $(this).addClass("active");

    $(".navbar-collapse").removeClass("show");
    

    });

    $(".get-started").click(function(){
      $(document).ready(function () {
        $('.navbar-nav a').removeClass('active');
        });
    
        $('html, body').animate({
            scrollTop: $("#contact").offset().top - 104
        }, 1500);
    
        $('.navbar-collapse').removeClass('show');
    
    });

});

$(window).scroll(function() {
  var scrollDistance = $(window).scrollTop() + 114;
  // Assign active class to nav links while scolling
  $('.page-section').each(function(i) {
          if ($(this).position().top <= scrollDistance) {
              $('.navbar-nav a.active').removeClass('active');
              $('.navbar-nav a').eq(i).addClass('active');
          }
  });
}).scroll();