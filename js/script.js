/* global $ , document , window  */
$(document).ready(function(){

    //$('.home').height($(window).height());
    
    // Show Navbar when Click on icon
    $('.icon').click(function(){
        $('.nav-list').slideToggle();
    });
    
    // when scroll body .. sticky navbar
    $(window).scroll(function(){
        
        var sc = $(this).scrollTop();
        
        if(sc > 80){  // Show Sticky Navbar
            
            $('header').addClass('sticky');
        }
        else {
            $('header').removeClass('sticky');
        }
        
        if( sc > 1981) {
            $('.timer').countTo(); // Run Count To Plugin
            $(window).off('scroll');
        }
        
        if ( sc > 500) { // Fade The Scroll Top Btn
            
            $('.scrollTop').fadeIn();
            
        } else {
            
            $('.scrollTop').fadeOut();
            
        }
        
    });
    
    // Portfolio Buttons Change bg 
    $('.buttons button').click(function(){
        
        $(this).addClass('active-btn').siblings().removeClass('active-btn');
        
        var CSSFilter = $(this).attr('id');
        
        if( CSSFilter === 'all' ) {
            $('.images > div ').fadeIn();
        } else {
            $('.images > div ').fadeOut();
            $('.images').contents().filter('.' + CSSFilter).fadeIn();
        }
        
    });
    
    // owl carousel >> Team Section
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
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
    });
    
    $('li a').click(function(){
        
        $('html,body').animate({
            
            scrollTop : $('.' + $(this).data('scroll')).offset().top - 40
                        
        },1500)
        
    })
  
    
});