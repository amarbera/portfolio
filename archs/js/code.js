/*********Navbar styles************/

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $(".navstyle").addClass("newnavstyle");
            $(".vis-nav").slideUp(500);
        }
        else {
            $(".navstyle").removeClass("newnavstyle");
            $(".vis-nav").slideDown(500);

        }
    })


    /***********side nav panel**********/

    $(".navbar-toggler").on("click", function () {
        $(".mobileMenu").toggleClass("open")
    });






    var curr_year = (new Date).getFullYear();
    $("#yr").text(curr_year);
    $("#yr").css("color", "white");


});


/*******nav scroll***********/

$(document).ready(function () {

    $("#hm").click(function () {
        var pos = $("#home").offset();
        $("body, html").animate({ "scrollTop": pos.top - 0 }, 1500);
        return false;
    })

    $("#abt").click(function () {
        var pos = $("#about").offset();
        $("body, html").animate({ "scrollTop": pos.top - 50 }, 1500);
        return false;
    })

    $("#pro").click(function () {
        var pos = $("#project").offset();
        $("body, html").animate({ "scrollTop": pos.top - 50 }, 1500);
        return false;
    })

    $("#new").click(function () {
        var pos = $("#news").offset();
        $("body, html").animate({ "scrollTop": pos.top - 50 }, 1500);
        return false;
    })

    $("#ser").click(function () {
        var pos = $("#services").offset();
        $("body, html").animate({ "scrollTop": pos.top - 50 }, 1500);
        return false;
    })

    $("#cnt").click(function () {
        var pos = $("#contact").offset();
        $("body, html").animate({ "scrollTop": pos.top - 50 }, 1500);
        return false;
    })

});