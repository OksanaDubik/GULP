function slider() {
    const sliderLine = document.querySelector(".header-slider__article-line");
    const sliderArticle = document.querySelectorAll('.header-slider__article');
    const sliderPagination = document.querySelectorAll(".header-slider__pagination svg")

    let sliderCount = 0
    let sliderWidth;
    //Автозапуск слайдера
    const autoSlider = setInterval(() => {
        if (window.innerWidth <= 949) {
            nextSlide()
        } else {
            nextSlide()
            prevSlide()
        }
    }, 3000);

    sliderArticle.forEach(el => {
        el.addEventListener('mousedown', function () {
            clearTimeout(autoSlider)
        })
        el.addEventListener('click', nextSlide)
    })

//Адаптивность слайдера
    window.addEventListener('resize', showSlide)

//Задаем ширину слайда
    function showSlide() {
        sliderWidth = document.querySelector(".header-slider__article-basis").offsetWidth;
        sliderLine.style.width = sliderWidth * sliderArticle.length + 'px';
        sliderArticle.forEach(item => item.style.width = sliderWidth + 'px')
        rollSlider();
    }

    showSlide();

//Перелистываем слады вперед
    function nextSlide() {
        sliderCount++;
        if (sliderCount >= sliderArticle.length) sliderCount = 0;
        rollSlider()
        thisSlide(sliderCount)
    }

//Перелистываем слады назад
    function prevSlide() {
        sliderCount--;
        if (sliderCount < 0) sliderCount = sliderArticle.length - 1;
        rollSlider()
        thisSlide(sliderCount)
    }


//Задаем шаг при перемещении
    function rollSlider() {
        sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
    }

//указывает какой слайд по счету активен
    function thisSlide(index) {
        sliderPagination.forEach(item => {
            item.classList.remove('header-slider__pagination-active')
        })
        sliderPagination[index].classList.add('header-slider__pagination-active');

    }

//Вешает клик на точку
    sliderPagination.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            sliderCount = index;
            rollSlider();
            thisSlide(sliderCount);
        })
    })
}

export default slider