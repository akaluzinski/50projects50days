const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');
const activeClass = 'active';

let activeSlideIdx = 0;
rightButton.addEventListener('click', () => {
  activeSlideIdx++;
  if (activeSlideIdx > slides.length - 1) {
    activeSlideIdx = 0;
  }

  setBackgroundToBody();
  setActiveSlide();
});

leftButton.addEventListener('click', () => {
  activeSlideIdx--;
  if (activeSlideIdx < 0) {
    activeSlideIdx = slides.length - 1;
  }

  setBackgroundToBody();
  setActiveSlide();
});

function setBackgroundToBody() {
  body.style.backgroundImage = slides[activeSlideIdx].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove(activeClass);
  });

  slides[activeSlideIdx].classList.add(activeClass);
}

setBackgroundToBody();
