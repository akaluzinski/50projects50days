const jokeContainer = document.getElementById('joke');
const jokeButton = document.getElementById('btn');

const apiURL = 'https://icanhazdadjoke.com';
const config = {
  headers: {
    Accept: 'application/json',
  },
};

async function fetchJoke() {
  const data = await fetch(apiURL, config);
  const { joke } = await data.json();
  return joke;
}

async function onGetJokeClick() {
  const joke = await fetchJoke();
  jokeContainer.innerText = joke;
}

jokeButton.addEventListener('click', onGetJokeClick);
