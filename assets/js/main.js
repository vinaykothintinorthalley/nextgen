$(document).ready(function(){

  //page slide function
  $(".navbar-nav li a").on( "click", function() {

    var ourclass = $(this).attr('class');
    
    $('html, body').animate({
            scrollTop: $("#"+ourclass).offset().top-114
        }, 1500); 

    $(".navbar-nav li a").removeClass("active");

    $(this).addClass("active");

    $(".navbar-collapse").removeClass("show");
    

    });

    $(".get-started").on( "click", function(){
      $(document).ready(function () {
        $('.navbar-nav a').removeClass('active');
        });
    
        $('html, body').animate({
            scrollTop: $("#contact").offset().top - 104
        }, 1500);
    
        $('.navbar-collapse').removeClass('show');
    
    });

    $("#contactForm").validate({
      rules: {
        fullName: {
          required: true,
          minlength: 3
        },
        email: {
          required: true,
          email: true
        },
        message: {
          required: true,
          minlength: 10
        }
      },
      messages: {
        fullName: {
          required: "Please enter your full name",
          minlength: "Your name must be at least 3 characters long"
        },
        email: {
          required: "Please enter your email address",
          email: "Please enter a valid email address"
        },
        message: {
          required: "Please enter your message",
          minlength: "Your message must be at least 10 characters long"
        }
      },
      errorElement: "div",
      errorPlacement: function (error, element) {
        error.addClass("error");
        error.insertAfter(element);
      },
      highlight: function (element, errorClass, validClass) {
        $(element).addClass("is-invalid").removeClass("is-valid");
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element).addClass("is-valid").removeClass("is-invalid");
      },
      submitHandler: function (form) {
        $("#successMessage").show();
        setTimeout(function () {
          $("#successMessage").fadeOut();
          form.reset();
          $(".form-control").removeClass("is-valid");
        }, 3000);
        return false;
      }
    });


});

$(window).on( "scroll", function() {
  var scrollDistance = $(window).scrollTop() + 114;
  // Assign active class to nav links while scolling
  $('.page-section').each(function(i) {
          if ($(this).position().top <= scrollDistance) {
              $('.navbar-nav a.active').removeClass('active');
              $('.navbar-nav a').eq(i).addClass('active');
          }
  });
});