const contentBoxes = document.querySelectorAll('.content-box');
const showClassName = 'show';

window.addEventListener('scroll', onWindowScroll);

function onWindowScroll() {
  contentBoxes.forEach((box) => {
    if (isThresholdMet(box)) {
      box.classList.add(showClassName);
    } else {
      box.classList.remove(showClassName);
    }
  });
}

function isThresholdMet(element) {
  const thresholdHeight = window.innerHeight * 0.8;
  const { top } = element.getBoundingClientRect();
  return top < thresholdHeight;
}
