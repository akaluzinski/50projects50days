const tags = document.getElementById('tags');
const textarea = document.getElementById('textarea');
const separator = ',';
const activeClassName = 'active';

textarea.focus();

function createTag(label) {
  const newTag = document.createElement('span');
  newTag.classList.add('tag');
  newTag.innerText = label;
  return newTag;
}

function createTags(value) {
  tags.innerHTML = '';

  const tagTexts = value
    .split(separator)
    .map((label) => label.trim())
    .filter((label) => label.length > 0)
    .forEach((label) => tags.appendChild(createTag(label)));
}

function cleanTextArea(event) {
  setTimeout(() => {
    event.target.value = '';
  }, 10);
}

function markActiveTag(tag) {
  tag.classList.add(activeClassName);
}

function markInactiveTag(tag) {
  tag.classList.remove(activeClassName);
}

function pickRandomTag() {
  const allTags = document.querySelectorAll('.tag');
  return allTags[Math.floor(Math.random() * allTags.length)];
}

function selectRandom() {
  const times = 100;
  const changesIntervalMs = 50;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    markActiveTag(randomTag);
    setTimeout(() => {
      markInactiveTag(randomTag);
    }, changesIntervalMs);
  }, changesIntervalMs);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      markActiveTag(randomTag);
    }, changesIntervalMs);
  }, times * changesIntervalMs);
}

function pickUpRandom(event) {
  if (event.key === 'Enter') {
    cleanTextArea(event);
    selectRandom();
  }
}

function onKeyUp(event) {
  createTags(event.target.value);
  pickUpRandom(event);
}

textarea.addEventListener('keyup', onKeyUp);
