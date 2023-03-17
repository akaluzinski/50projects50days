const box = document.getElementById('box');
const button = document.getElementById('toggle-button');

let isRotate = false;

function toggle() {
  isRotate = !isRotate;
  box.setAttribute('data-rotate', isRotate);
}

button.addEventListener('click', toggle);
