const activeClassName = 'active';

const progressLine = document.getElementById('progress-line');
const back = document.getElementById('back');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActiveIndex = 0;

next.addEventListener('click', onNextClick);
back.addEventListener('click', onBackClick);

function onNextClick() {
  increaseIndex();
  update();
}

function onBackClick() {
  decreaseIndex();
  update();
}

function increaseIndex() {
  currentActiveIndex =
    currentActiveIndex >= circles.length - 1
      ? circles.length - 1
      : currentActiveIndex + 1;
}

function decreaseIndex() {
  currentActiveIndex--;
  if (currentActiveIndex < 0) {
    currentActiveIndex = 0;
  }
}

function update() {
  circles.forEach((circle, i) => {
    if (i <= currentActiveIndex) {
      circle.classList.add(activeClassName);
    } else {
      circle.classList.remove(activeClassName);
    }
  });

  const actives = document.querySelectorAll(`.${activeClassName}`);
  progressLine.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  back.disabled = currentActiveIndex === 0;
  next.disabled = currentActiveIndex === circles.length - 1;
}
