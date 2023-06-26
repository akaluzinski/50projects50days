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

toggle.addEventListener('click', onDarkModeClick);
