
/*----------------auto typed script--------------*/
var typed = new Typed('.type', {
    strings: [
        'Web Designer.',
        'Front-End Developer.',
        'Blogger.',
        'App Developer.'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,

});


AOS.init();

/*-------navbar style-------------------*/


$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $(".navstyle").addClass("newnavstyle");
        }
        else {
            $(".navstyle").removeClass("newnavstyle");

        }
    })

/*------------Navbar side panel-----------------*/


$(".navbar-toggler").on("click", function () {
    $(".mobileMenu").toggleClass("open")
  });


});


/*----------sidescroll----------------*/



$(document).ready(function () {
    $("#edu").click(function () {
        var pos = $("#education").offset();
        $("body, html").animate({ 'scrollTop': pos.top - 150 }, 1500);
        return false;
    });

    $("#exp").click(function () {
        var pos1 = $("#experiance").offset();
        $("body, html").animate({ 'scrollTop': pos1.top - 150 }, 1500);
        return false;
    });

    $("#skil").click(function () {
        var pos2 = $("#skills").offset();
        $("body, html").animate({ 'scrollTop': pos2.top - 150 }, 1500);
        return false;
    });


    /*-------------nav scroll-----------*/


    $("#hm").click(function () {
        var pos = $("#home").offset();
        $("body, html").animate({ "scrollTop": pos.top - 0}, 1500);
        return false;
    })


    $("#abt").click(function () {
        var pos = $("#about").offset();
        $("body, html").animate({ "scrollTop": pos.top - 100 }, 1500);
        return false;
    })

    $("#rem").click(function () {
        var pos = $("#resume").offset();
        $("body, html").animate({ "scrollTop": pos.top - 80 }, 1500);
        return false;
    })

    $("#ser").click(function () {
        var pos = $("#service").offset();
        $("body, html").animate({ "scrollTop": pos.top - 0 }, 1500);
        return false;
    })

    $("#pro").click(function () {
        var pos = $("#project").offset();
        $("body, html").animate({ "scrollTop": pos.top - 70 }, 1500);
        return false;
    })

    $("#cnt").click(function () {
        var pos = $("#contact").offset();
        $("body, html").animate({ "scrollTop": pos.top - 80 }, 1500);
        return false;
    })






    /*-------------Progress Bar--------------*/

    $('.circlechart').circlechart();

      
});


    /*------------Dimensions of cards-----------*/

    $(document).ready(function(){

        var commonHt = 0;
        
        if($("#box1").height() > $("#box2").height())
        {

            commonHt = $("#box1").height()
        }
       else 
       {
           commonHt = $("#box2").height()
       }
       $("#box1").css("min-height",commonHt);
       $("#box2").css("min-height",commonHt);

       /**********date*********/

       var curr_year = (new Date).getFullYear();
       $("#yr").text(curr_year);
       $("#yr").css("color","white");



    });

    


