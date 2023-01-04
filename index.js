
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

window.addEventListener('resize', function () {
    windowWidthControl();
})



const items = document.querySelectorAll('.container__items');
console.log(items);

const hidden = items.filter(item => items.length > 8);
console.log(hidden);

const btn = document.querySelector('.arrow');
console.log(btn);

// items.forEach(function(item, i) {
//         if (i > 5) {
//             ipadHidden.push(item);
//         } else{
//             ipadVisible.push(item);
//         };
//         console.log(ipadHidden);
//     } 
// );

// btn.addEventListener('click', () => {
//     console.log(items.classlist);
//     if (items.classlist('hidden')) {
//         btn.textContent = 'Скрыть';
//     } else {
//         btn.textContent = 'Показать элемент';
//     }
//     items.classlist.toggle('hidden')
// });



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