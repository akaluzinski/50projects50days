const loadText = document.querySelector('.loading-text');
const backgroundImage = document.querySelector('.background-image');

const blurIntervalMs = 25;
const maxBlurPx = 30;

let progress = 0;

let intervalHandlerId = setInterval(blurring, blurIntervalMs);

function blurring() {
  if (++progress >= 100) {
    clearInterval(intervalHandlerId);
  }

  loadText.innerText = `${progress}%`;
  let blurPx = Math.max(maxBlurPx - 0.3 * progress, 0);
  backgroundImage.style.filter = `blur(${blurPx}px)`;
}
