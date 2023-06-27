const hourNeedle = document.querySelector('.hour');
const minuteNeedle = document.querySelector('.minute');
const secondNeedle = document.querySelector('.second');
const time = document.querySelector('.time');
const date = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const darkModeClassName = 'dark';

const onDarkModeClick = event => {
    const html = document.querySelector('html');
    if (html.classList.contains(darkModeClassName)) {
        html.classList.remove(darkModeClassName)
        event.target.innerHTML = 'Dark mode';
    } else {
        html.classList.add(darkModeClassName);
        event.target.innerHTML = 'Light mode';
    }
};

const rotateDeg = (number, inMax) => number * 360 / inMax
const transformStyle = newDegree => `translate(-50%, -100%) rotate(${newDegree}deg)`

function getWeekday(date) {
    return date.toLocaleDateString(navigator.language, { weekday: 'long' })
}

function getMonth(date) {
    return date.toLocaleDateString(navigator.language, { month: 'short' });
}

function setTime() {
    const now = new Date();
    const month = now.getMonth();
    const day = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const hourDegrees = rotateDeg(hours % 12, 11);
    const minuteDegrees = rotateDeg(minutes, 59);
    const secondsDegrees = rotateDeg(now.getSeconds(), 59);

    hourNeedle.style.transform = transformStyle(hourDegrees);
    minuteNeedle.style.transform = transformStyle(minuteDegrees);
    secondNeedle.style.transform = transformStyle(secondsDegrees);

    time.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
    date.innerHTML = `${getWeekday(now)}, ${getMonth(now)}<span class='circle'>${day}</span>`
}

setTime();
toggle.addEventListener('click', onDarkModeClick);
setInterval(setTime, 1000);