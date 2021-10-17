$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

let animItems = document.querySelectorAll('._anim-items');

if(animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(){
        for(let index = 0; index < animItems.length; index++){
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight; 
            const animItemsOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((scrollY > animItemsOffset - animItemPoint) && scrollY < (animItemsOffset + animItemHeight)){
                animItem.classList.add('_active');
            } else{
                if(!animItem.classList.contains('_anim-no-hide')){
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect();
         var   scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    setTimeout(() => {
        animOnScroll();
    }, 900);
    
}

new Swiper('.slider-1',{
    // Стрелки
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev'
    // },
    // навигация
    // буллеты, текущее положение, прогрессор
    // pagination: {
        // el: '.swiper-pagination',
        // // буллеты
        //  clickable: true,
        // // динамические буллеты
        // dynamicBullets: true,
        // фракция
        // type: 'fraction',
        // renderFraction: function(currentClass, totalClass){
        //     return 'Фото <span class="' + currentClass + '"</span>' +
        //         ' из ' +
        //         '<span class="' + totalClass + '"</span>'
        // },
        // прогрессор
        // type: 'progressbar',

    // },
    // скролл
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    //     // возможность перетаскивать скролл
    //     draggable: true
    // },

    // включение\отключение
    // перетаскивания на пк
    simulateTouch: true,
    // чувствительность свайпа
    touchRatio: 1,
    // угол срабатывания свайпа
    touchAngle: 45,
    // курсор перетаскивания
    grabCursor: true,

    // переключение при клике на слайд
    slideToClickedSlide: true,

    // навигация по хешу
    // hashNavigation: {
    //     // отслеживать состояние
    //     watchState: true,
    // },

    // управление клавиатурой
    // keyboard: {
    //     // включить\откл
    //     enabled: true,
    //     // только когда слайдер в приделах вьюпорта
    //     onlyInViewport: true,
    // },

    // управление колесом мыши
    // mousewheel: {
    //     // чувствительность колеса мыши
    //     sensitivity: 1,
    //     // класс объекта на котором будет срабатывать прокрутка мышью
    //     eventsTarget: ".image-slider"
    // },

    // автовысота
    // autoHeight: true,

    // количество слайдов для показа
     slidesPerView: 'auto',
    // slidesPerView: 'auto',

    // отключение функионала если слайдов меньше чем нужно
    watchOverflow: true,

    // отступ между слайдами
    spaceBetween: 30,

    // количество пролистанных слайдов
    slidesPerGroup: 1,

    // активный слайд по центру
    centeredSlides: true,
    
    // стартовый слайд
    initialSlide:0,

    // мультирядность
    slidesPerColumn: 1,

    // бесконечность слайдера
    loop: true,

    // количество дублируемых слайдов
    loopedSlides: 2,

    // свободный режим
    freeMode: true,

    // автопрокрутка
     autoplay: {
         // пауза между прокруткой
         delay:2000,
         // закончить на последнем слайде
         // если выключена бесконечность
         stopOnLastSlide: true,
         // отключить после ручного переключателя
         disableOnInteraction: false,
     },

    // скорость
    speed: 300,

    // вертикальный слайдер
    // direction:'vertical',


    // адаптивность
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480:{
            slidesPerView:2,
        },
        992: {
            slidesPerView:3,
        },
    },
});

new Swiper('.slider-2',{
    // Стрелки
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev'
    // },
    // навигация
    // буллеты, текущее положение, прогрессор
    // pagination: {
        // el: '.swiper-pagination',
        // // буллеты
        //  clickable: true,
        // // динамические буллеты
        // dynamicBullets: true,
        // фракция
        // type: 'fraction',
        // renderFraction: function(currentClass, totalClass){
        //     return 'Фото <span class="' + currentClass + '"</span>' +
        //         ' из ' +
        //         '<span class="' + totalClass + '"</span>'
        // },
        // прогрессор
        // type: 'progressbar',

    // },
    // скролл
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    //     // возможность перетаскивать скролл
    //     draggable: true
    // },

    // включение\отключение
    // перетаскивания на пк
    simulateTouch: true,
    // чувствительность свайпа
    touchRatio: 1,
    // угол срабатывания свайпа
    touchAngle: 45,
    // курсор перетаскивания
    grabCursor: true,

    // переключение при клике на слайд
    slideToClickedSlide: true,

    // навигация по хешу
    // hashNavigation: {
    //     // отслеживать состояние
    //     watchState: true,
    // },

    // управление клавиатурой
    // keyboard: {
    //     // включить\откл
    //     enabled: true,
    //     // только когда слайдер в приделах вьюпорта
    //     onlyInViewport: true,
    // },

    // управление колесом мыши
    // mousewheel: {
    //     // чувствительность колеса мыши
    //     sensitivity: 1,
    //     // класс объекта на котором будет срабатывать прокрутка мышью
    //     eventsTarget: ".image-slider"
    // },

    // автовысота
    //  autoHeight: true,

    // количество слайдов для показа
     slidesPerView: 'auto',
    // slidesPerView: 'auto',

    // отключение функионала если слайдов меньше чем нужно
    watchOverflow: true,

    // отступ между слайдами
    spaceBetween: 30,

    // количество пролистанных слайдов
    slidesPerGroup: 1,

    // активный слайд по центру
    centeredSlides: true,
    
    // стартовый слайд
    initialSlide:0,

    // мультирядность
    slidesPerColumn: 1,

    // бесконечность слайдера
    loop: true,

    // количество дублируемых слайдов
    loopedSlides: 2,

    // свободный режим
    freeMode: true,

    // автопрокрутка
     autoplay: {
         // пауза между прокруткой
         delay:2000,
         // закончить на последнем слайде
         // если выключена бесконечность
         stopOnLastSlide: true,
         // отключить после ручного переключателя
         disableOnInteraction: false,
     },

    // скорость
    speed: 300,

    // вертикальный слайдер
    // direction:'vertical',


    // адаптивность
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480:{
            slidesPerView:2,
        },
        992: {
            slidesPerView:3,
        },
    },
});
new Swiper('.slider-3',{
    // Стрелки
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev'
    // },
    // навигация
    // буллеты, текущее положение, прогрессор
    // pagination: {
        // el: '.swiper-pagination',
        // // буллеты
        //  clickable: true,
        // // динамические буллеты
        // dynamicBullets: true,
        // фракция
        // type: 'fraction',
        // renderFraction: function(currentClass, totalClass){
        //     return 'Фото <span class="' + currentClass + '"</span>' +
        //         ' из ' +
        //         '<span class="' + totalClass + '"</span>'
        // },
        // прогрессор
        // type: 'progressbar',

    // },
    // скролл
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    //     // возможность перетаскивать скролл
    //     draggable: true
    // },

    // включение\отключение
    // перетаскивания на пк
    simulateTouch: true,
    // чувствительность свайпа
    touchRatio: 1,
    // угол срабатывания свайпа
    touchAngle: 45,
    // курсор перетаскивания
    grabCursor: true,

    // переключение при клике на слайд
    slideToClickedSlide: true,

    // навигация по хешу
    // hashNavigation: {
    //     // отслеживать состояние
    //     watchState: true,
    // },

    // управление клавиатурой
    // keyboard: {
    //     // включить\откл
    //     enabled: true,
    //     // только когда слайдер в приделах вьюпорта
    //     onlyInViewport: true,
    // },

    // управление колесом мыши
    // mousewheel: {
    //     // чувствительность колеса мыши
    //     sensitivity: 1,
    //     // класс объекта на котором будет срабатывать прокрутка мышью
    //     eventsTarget: ".image-slider"
    // },

    // автовысота
    //  autoHeight: true,

    // количество слайдов для показа
     slidesPerView: 'auto',
    // slidesPerView: 'auto',

    // отключение функионала если слайдов меньше чем нужно
    watchOverflow: true,

    // отступ между слайдами
    spaceBetween: 30,

    // количество пролистанных слайдов
    slidesPerGroup: 1,

    // активный слайд по центру
    centeredSlides: true,
    
    // стартовый слайд
    initialSlide:0,

    // мультирядность
    slidesPerColumn: 1,

    // бесконечность слайдера
    loop: true,

    // количество дублируемых слайдов
    loopedSlides: 2,

    // свободный режим
    freeMode: true,

    // автопрокрутка
     autoplay: {
         // пауза между прокруткой
         delay:2000,
         // закончить на последнем слайде
         // если выключена бесконечность
         stopOnLastSlide: true,
         // отключить после ручного переключателя
         disableOnInteraction: false,
     },

    // скорость
    speed: 300,

    // вертикальный слайдер
    // direction:'vertical',


    // адаптивность
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480:{
            slidesPerView:2,
        },
        992: {
            slidesPerView:3,
        },
    },
});
new Swiper('.slider-4',{
    // Стрелки
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev'
    // },
    // навигация
    // буллеты, текущее положение, прогрессор
    // pagination: {
        // el: '.swiper-pagination',
        // // буллеты
        //  clickable: true,
        // // динамические буллеты
        // dynamicBullets: true,
        // фракция
        // type: 'fraction',
        // renderFraction: function(currentClass, totalClass){
        //     return 'Фото <span class="' + currentClass + '"</span>' +
        //         ' из ' +
        //         '<span class="' + totalClass + '"</span>'
        // },
        // прогрессор
        // type: 'progressbar',

    // },
    // скролл
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    //     // возможность перетаскивать скролл
    //     draggable: true
    // },

    // включение\отключение
    // перетаскивания на пк
    simulateTouch: true,
    // чувствительность свайпа
    touchRatio: 1,
    // угол срабатывания свайпа
    touchAngle: 45,
    // курсор перетаскивания
    grabCursor: true,

    // переключение при клике на слайд
    slideToClickedSlide: true,

    // навигация по хешу
    // hashNavigation: {
    //     // отслеживать состояние
    //     watchState: true,
    // },

    // управление клавиатурой
    // keyboard: {
    //     // включить\откл
    //     enabled: true,
    //     // только когда слайдер в приделах вьюпорта
    //     onlyInViewport: true,
    // },

    // управление колесом мыши
    // mousewheel: {
    //     // чувствительность колеса мыши
    //     sensitivity: 1,
    //     // класс объекта на котором будет срабатывать прокрутка мышью
    //     eventsTarget: ".image-slider"
    // },

    // автовысота
    //  autoHeight: true,

    // количество слайдов для показа
     slidesPerView: 'auto',
    // slidesPerView: 'auto',

    // отключение функионала если слайдов меньше чем нужно
    watchOverflow: true,

    // отступ между слайдами
    spaceBetween: 30,

    // количество пролистанных слайдов
    slidesPerGroup: 1,

    // активный слайд по центру
    centeredSlides: true,
    
    // стартовый слайд
    initialSlide:0,

    // мультирядность
    slidesPerColumn: 1,

    // бесконечность слайдера
    loop: true,

    // количество дублируемых слайдов
    loopedSlides: 2,

    // свободный режим
    freeMode: true,

    // автопрокрутка
     autoplay: {
         // пауза между прокруткой
         delay:2000,
         // закончить на последнем слайде
         // если выключена бесконечность
         stopOnLastSlide: true,
         // отключить после ручного переключателя
         disableOnInteraction: false,
     },

    // скорость
    speed: 300,

    // вертикальный слайдер
    // direction:'vertical',


    // адаптивность
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480:{
            slidesPerView:2,
        },
        992: {
            slidesPerView:3,
        },
    },
});
