AOS.init();

//Owl-Carsoul/////////////

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    autoplay: 1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})


$(document).ready(function(){

    $('a[href^="#"]',button[href^="#"]).click(function () {
        var target = this.hash,
        $target = $(target).offset();
       $('html, body').animate({'scrollTop': $target.top-70}, 1000);
    });


    $(window).scroll(function(){
        if($(this).scrollTop() > 400)
        {
            $(".scrolltop").fadeIn();
        }
        else
        {
            $(".scrolltop").fadeOut();
        }
    });

    $(".scrolltop").click(function(){
        var pos = $("#hm").offset();
        $("body,html").animate({"scrollTop" : pos.top-100}, 2000);
    })
});