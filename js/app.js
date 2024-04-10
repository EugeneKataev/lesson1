window.addEventListener('DOMContentLoaded', () => {

        loadSlides();
        sliderAutoMove(true);
        numImgSlide();
});


document.getElementById("back").addEventListener("click", () => {

        sliderAutoMove(false);
        backStepSlide();

})

document.getElementById("next").addEventListener("click", () => {

        sliderAutoMove(false);
        nextStepSlide();

})

document.querySelector(".slider-main").addEventListener("transitionend", (e) => {

        let step = e.target.getAttribute("data-step");

        changeAfterTransition(e.target, step);
        numImgSlide();
        sliderAutoMove(false);
        sliderAutoMove(true);

})