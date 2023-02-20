const container = document.querySelector('.container');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

left.addEventListener('mouseenter', onLeftMouseEnter);
left.addEventListener('mouseleave', onLeftMouseLeave);

function onLeftMouseEnter() {
  container.classList.add('hover-left');
}

function onLeftMouseLeave() {
  container.classList.remove('hover-left');
}

right.addEventListener('mouseenter', onRightMouseEnter);
right.addEventListener('mouseleave', onRightMouseLeave);

function onRightMouseEnter() {
  container.classList.add('hover-right');
}

function onRightMouseLeave() {
  container.classList.remove('hover-right');
}
