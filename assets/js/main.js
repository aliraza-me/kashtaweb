
(function () {


  new WOW().init();

  $(window).on('load', function () {
    setTimeout(function () {
      $('.preloader').addClass('hide');
    }, 1000);
  });


  $( ".collapse .title" ).click(function() {
    var target = $(this).attr('rel');

    if(!$(this).hasClass('collapsed')){
      $(this).addClass('collapsed');
      $('#' + target).addClass('down');
    } else {
      $('#' + target).removeClass('down');
      $('.collapse .title').removeClass('collapsed');
    }
  });

  // Mobile Filter Opener

  $("#filterMobile").click(function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $('#filterGroup').removeClass('collapsed');
    }else{
      $(this).addClass('active');
      $('#filterGroup').addClass('collapsed');
    }
  });

  // Ranng Slider

  (function() {

      var parent = document.querySelector(".range-slider");
      if(!parent) return;

      var
        rangeS = parent.querySelectorAll("input[type=range]"),
        numberS = parent.querySelectorAll("input[type=number]");

      rangeS.forEach(function(el) {
        el.oninput = function() {
          var slide1 = parseFloat(rangeS[0].value),
            	slide2 = parseFloat(rangeS[1].value);

          if (slide1 > slide2) {
    				[slide1, slide2] = [slide2, slide1];
            // var tmp = slide2;
            // slide2 = slide1;
            // slide1 = tmp;
          }

          numberS[0].value = slide1;
          numberS[1].value = slide2;
        }
      });

      numberS.forEach(function(el) {
        el.oninput = function() {
    			var number1 = parseFloat(numberS[0].value),
    					number2 = parseFloat(numberS[1].value);

          if (number1 > number2) {
            var tmp = number1;
            numberS[0].value = number2;
            numberS[1].value = tmp;
          }

          rangeS[0].value = number1;
          rangeS[1].value = number2;

        }
      });

    })();

  $('.k-slider').slick({
    dots: true,
  });

  // thumbs Mobile Slider

  $('.product-thumbs').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


})();
