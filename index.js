
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 55,
    slidesPerView: 1.5,
    centerInsufficientSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
    },
})