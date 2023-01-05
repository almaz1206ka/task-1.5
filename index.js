
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 16,
    slidesPerView: 1.31,
    variableWidth: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
        bulletElement: 'span',
        bulletClass: 'swiper-pagination-bullet',
        bulletActiceClass: 'swiper-pagination-bullet-active',
    },
    breakpoints: {
        400: {
            slidesPerView: 2.5,
            spaceBetween: 16,
        } 
    }
});





// function windowWidthControl() {
//     if(window.screen.width < '365') {
//         const swiper = new Swiper('.swiper', {
//             direction: 'horizontal',
//             loop: true,
//             spaceBetween: 16,
//             slidesPerView: 1.31,
//             variableWidth: true,
//             pagination: {
//                 el: '.swiper-pagination',
//                 clickable: true,
//                 type: 'bullets',
//                 bulletElement: 'span',
//                 bulletClass: 'swiper-pagination-bullet',
//                 bulletActiceClass: 'swiper-pagination-bullet-active',
//             },
//             breakpoints: {
//                 400: {
//                     slidesPerView: 2.5,
//                     spaceBetween: 16,
//                 }
//             }
//         });
//     } 
// };

// window.addEventListener('load', function () {
//     windowWidthControl();
// })

// window.addEventListener('resize', function () {
//     windowWidthControl();
// })



const items = document.querySelectorAll('.hidden');
console.log(items);

const showMore = document.querySelector('.show-more');

const btn = document.querySelector('.arrow');
console.log(btn);

const text = document.querySelector('.text');

btn.addEventListener('click', function(event) {
    event.preventDefault();
    items.forEach((item, index) => {
        if(index > 3){
        } else{
            item.classList.toggle('active');
            console.log(item);
        }
    })
    showMore.classList.toggle('active');
    btn.classList.toggle('rotate');
    if(text.textContent == 'Показать все') {
        text.textContent = 'Скрыть';
    } else {
        text.textContent = 'Показать все';
    }
})



// const Swiper = document.querySelector('.swiper').swiper;


// const item = document.querySelectorAll('.items');
// console.log(item);
// const ipadVisibleItems = [];
// const ipadHiddenItems = [];

// const desktopVisibleItems = [];
// const desktopHiddenItems = [];

// function windowWidthControl() {
//     if(window.screen.width > '760'){

//     } else{swiper.remove}
// }