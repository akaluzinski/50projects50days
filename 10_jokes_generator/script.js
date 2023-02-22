const jokeContainer = document.getElementById('joke');
const jokeButton = document.getElementById('btn');

const apiURL = 'https://icanhazdadjoke.com';
const config = {
  headers: {
    Accept: 'application/json',
  },
};

function fetchJoke() {
  fetch(apiURL, config)
    .then((result) => result.json())
    .then(({ joke }) => {
      jokeContainer.innerHTML = joke;
    });
}

function onGetJokeClick() {
  fetchJoke();
}

jokeButton.addEventListener('click', onGetJokeClick);
