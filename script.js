// Slider 
$(document).ready(function () {
    var owl = $('.header .owl-carousel');
    // Slider owlCarousel
    $('.slider .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 6000,
        smartSpeed: 500,
        nav: false,
        navText: ['<i class="ti-arrow-left" aria-hidden="true"></i>', '<i class="ti-arrow-right" aria-hidden="true"></i>']
    });
    // Slider Fade owlCarousel
    $('.slider-fade .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 6000,
        smartSpeed: 500,
        animateOut: 'fadeOut',
        nav: false,
        navText: ['<i class="ti-arrow-left" aria-hidden="true"></i>', '<i class="ti-arrow-right" aria-hidden="true"></i>']
    });
    owl.on('changed.owl.carousel', function (event) {
        var item = event.item.index - 2; // Position of the current item
        $('h6').removeClass('animated animate__fadeInUp');
        $('h1').removeClass('animated animate__fadeInUp');
        $('p').removeClass('animated animate__fadeInUp');
        $('.btn').removeClass('animated animate__fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('h6').addClass('animated animate__fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated animate__fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated animate__fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('.btn').addClass('animated animate__fadeInUp');
    });
});




// After Scroll
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    //>=, not <=
    if (scroll >= 85) {
        //clearHeader, not clearheader - caps H
        $(".navbar").addClass("dark");
    } else {
        $(".navbar").addClass("dark-rem");
        $(".navbar").removeClass("dark");
    }
});



// Hamburger
$( document ).ready(function() {
    $('.navbar-toggler').on('click', () => {
        $('.navbar-collapse').toggleClass('active');
    })
});


let navDrop = document.querySelectorAll('.dropdown');
navDrop.forEach((item)=>{
    item.addEventListener('click', ()=>{
        item.classList.toggle('active');
    })
}); 