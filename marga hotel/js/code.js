$(document).ready(function () {
    var a = (new Date).getFullYear();

    $("#year").text(a);

    /*----navbar collapse-------*/

    $(".navbar-toggler").on("click", function () {
      $(".mobileMenu").toggleClass("open");
    })

  })

  AOS.init();



  $.mq.action('xs',function () {
    
      $('.js-test1').text('xs');
    
    },function () {
    
      console.log('xs out');
    
    });
    
    $.mq.action('sm',function () {
      $('.js-test1').text('sm');
    },function () {
      console.log('sm out');
    });
    
    $.mq.action('md',function () {
    
      $('.js-test1').text('md');
    
    },function () {
    
      console.log('md out');
    
    });
    
    $.mq.action('lg',function () {
    
      $('.js-test1').text('lg');
    
    },function () {
    
      console.log('lg out');
    
    });
    
     
    
    $('.js-test2').mq('(max-width: 900px)',function () {
    
      $(this).css('color','green').text('@media (max-width: 900px) { true }');
    
    },function () {
    
      $(this).css('color','red').text('@media (max-width: 900px) { false }');
    
    });
    