$(document).ready(function()
{
    

    $(window).scroll(function()
    {
        
        // sticky navbar on scroll script
        if(this.scrollY > 20)
        {
            $('.navbar').addClass("sticky");
        }
        else
        {
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script


        if(this.scrollY > 500)
        {
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }



    });
//  -------------------------------------

$(document).ready(function(){
    $(".b1").mouseenter(function(){
        
        $(".ptext").css("color","black");
        $(".bbtn").css("background","black");
        $(".bbtn").css("color","crimson");

    });

    $(".b1").mouseleave(function(){
        $(".ptext").css("color","crimson");
        $(".bbtn").css("background","crimson");
        $(".bbtn").css("color","black");

    });

    $(".b2").mouseenter(function(){
        
        $(".ptext2").css("color","black");
        $(".bbtn2").css("background","black");
        $(".bbtn2").css("color","crimson");

    });

    $(".b2").mouseleave(function(){
        $(".ptext2").css("color","crimson");
        $(".bbtn2").css("background","crimson");
        $(".bbtn2").css("color","black");

    });

    $(".b3").mouseenter(function(){
        
        $(".ptext3").css("color","black");
        $(".bbtn3").css("background","black");
        $(".bbtn3").css("color","crimson");

    });

    $(".b3").mouseleave(function(){
        $(".ptext3").css("color","crimson");
        $(".bbtn3").css("background","crimson");
        $(".bbtn3").css("color","black");

    });

    $(".b4").mouseenter(function(){
        
        $(".ptext4").css("color","black");
        $(".bbtn4").css("background","black");
        $(".bbtn4").css("color","crimson");

    })

    $(".b4").mouseleave(function(){
        $(".ptext4").css("color","crimson");
        $(".bbtn4").css("background","crimson");
        $(".bbtn4").css("color","black");

    });

    $(".b5").mouseenter(function(){
        
        $(".ptext5").css("color","black");
        $(".bbtn5").css("background","black");
        $(".bbtn5").css("color","crimson");

    });

    $(".b5").mouseleave(function(){
        $(".ptext5").css("color","crimson");
        $(".bbtn5").css("background","crimson");
        $(".bbtn5").css("color","black");

    });

})
// ----------------------------------------


    // slide-up script
    $('.scroll-up-btn').click(function()
    {
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });



    $('.navbar .menu li a').click(function()
    {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });



    // toggle menu/navbar script
    $('.menu-btn').click(function()
    {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });




    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["web Developer","web-Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["web Developer", "web-Designer", "Graphic Desginer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});