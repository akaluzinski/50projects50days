const hourNeedle = document.querySelector('.hour');
const minuteNeedle = document.querySelector('.minute');
const secondNeedle = document.querySelector('.second');
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
    const hourDegrees = rotateDeg(now.getHours() % 12, 11);
    const minuteDegrees = rotateDeg(now.getMinutes(), 59);
    const secondsDegrees = rotateDeg(now.getSeconds(), 59);

    const transformStyle = newDegree => `translate(-50%, -100%) rotate(${newDegree}deg)`

    hourNeedle.style.transform = transformStyle(hourDegrees);
    minuteNeedle.style.transform = transformStyle(minuteDegrees);
    secondNeedle.style.transform = transformStyle(secondsDegrees);

}

const rotateDeg = (number, inMax) => number * 360 / inMax
toggle.addEventListener('click', onDarkModeClick);

setTime();