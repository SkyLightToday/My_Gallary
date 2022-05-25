const sliderMain = new Swiper('.slider_main', {
    freeMode : true,//листать слайдер без привязке к позиции
    centeredSlides : true,//1 slide в центре
    mousewheel : true,//прокрутка на мыше
    parallax: true,//красивое внутреннее движение картинки
    //slidesPerView: 3.5,//сколько слайдов будет на экране
    breakpoints: {
        0: {
            slidesPerView: 2.5,
            spaceBetween: 20//растояние между слайдами
            //от 0 до 680 будут применятся эти стили
        },
        680: {
            slidesPerView: 3.5,
            spaceBetween: 60//растояние между слайдами
        }
    }
});

const sliderBg = new Swiper('.slider_bg', {
    centeredSlides : true,//1 slide в центре
    parallax: true,//красивое внутреннее движение картинки
    //slidesPerView: 3.5,//сколько слайдов будет на экране
    spaceBetween: 60,
    slidesPerView: 3.5,
});

sliderMain.controller.control = sliderBg;//связывание слайдеров

document.querySelectorAll('.slider__item').forEach(item => {
    item.addEventListener('click', event => {
        item.classList.toggle('opened')
    });
});

let desc = document.querySelector('.description');
sliderMain.on('slideChange', e => {
    sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden');
})