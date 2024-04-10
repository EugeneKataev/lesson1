const slides = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg"];
let currentSlide = 0;
let intervalMoveSlide;

function loadSlides() {
    const numSlide = document.getElementById("num_slide");
    numSlide.textContent = `${currentSlide + 1}`;

    let firstBlock = document.querySelector(".slide-img-block");
    firstBlock.querySelector("img").src = getBackSlide(currentSlide);;

    let divs = document.querySelectorAll(".slide-img-block")
    let lastBlock = divs[divs.length - 1];
    lastBlock.querySelector("img").src = getNextSlide(currentSlide);

    let centerBlock = divs[divs.length - 2];
    centerBlock.querySelector("img").src = slides[currentSlide];

}
function sliderAutoMove(action) {
    if (action) {
        intervalMoveSlide = setTimeout(nextStepSlide, 3000);
    } else {
        clearTimeout(intervalMoveSlide);
    }

}

function backStepSlide(){
    const block = document.querySelector(".slider-main");

    if (!block.classList.contains("animate")) {
        let firstBlock = document.querySelector(".slide-img-block");
        let firstWidth = firstBlock.offsetWidth;
        block.setAttribute("data-step", "back");
        block.classList.add("animate");
        block.style.transform = `translateX(${firstWidth}px)`;
    }
}

function nextStepSlide() {
    const block = document.querySelector(".slider-main");

    if (!block.classList.contains("animate"))
    {
        let divs = document.querySelectorAll(".slide-img-block")
        let lastBlock = divs[divs.length - 1];
        let lastWidth = lastBlock.offsetWidth;
        block.setAttribute("data-step", "next");
        block.classList.add("animate");
        block.style.transform = `translateX(-${lastWidth}px)`;
    }
}

function getNextSlide(currentImg) {
    let rightIndex = currentImg + 1;
    if (rightIndex > (slides.length - 1)) {
        rightIndex = 0;
    }

    return slides[rightIndex];
}
function getBackSlide(currentImg) {
    let leftIndex = currentImg - 1;
    if (leftIndex < 0) {
        leftIndex = (slides.length - 1);
    }

    return slides[leftIndex];
}

function changeAfterTransition(elem, step) {
    elem.classList.remove("animate");
    elem.style.transform = "none";

    switch (step) {
        case "next":
            currentSlide++;
            currentSlide = (currentSlide > (slides.length - 1)) ? 0 : currentSlide;

            console.log(currentSlide);
            let firstBlock = document.querySelector(".slide-img-block")
            elem.appendChild(firstBlock);
            firstBlock.querySelector("img").src = getNextSlide(currentSlide);;
            break
        case "back":
            currentSlide--;
            currentSlide = (currentSlide < 0) ? (slides.length - 1) : currentSlide;

            console.log(currentSlide);
            let divs = document.querySelectorAll(".slide-img-block")
            let lastBlock = divs[divs.length - 1];
            elem.insertBefore(lastBlock, elem.firstChild);
            lastBlock.querySelector("img").src = getBackSlide(currentSlide);
            break
    }
}

function numImgSlide() {
    const numSlide = document.getElementById("num_slide");
    numSlide.textContent = `${currentSlide + 1}`;
}