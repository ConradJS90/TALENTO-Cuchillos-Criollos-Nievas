var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    speed: 500,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        swiper.slideNext();
    } else if (event.key === 'ArrowLeft') {
        swiper.slidePrev();
    }
});