const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const time = document.querySelector('.time');
const date = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const darkModeClassName = 'dark';

function onDarkModeClick(event) {
    const html = document.querySelector('html');
    if(html.classList.contains(darkModeClassName)) {
        html.classList.remove(darkModeClassName)
        event.target.innerHTML = 'Dark mode';
    } else {
        html.classList.add(darkModeClassName);
        event.target.innerHTML = 'Light mode';
    }
}

function setTime() {
    const now = new Date();
    const month = now.getMonth();
    const day = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const hourDegrees = scale(hours % 12, 0, 11, 0, 360)

    hour.style.transform = `translate(-50%, -100%) rotate(${hourDegrees}deg)`;

}

const scale = (number, inMin, inMax, outMin, outMax) => (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
toggle.addEventListener('click', onDarkModeClick);

setTime();