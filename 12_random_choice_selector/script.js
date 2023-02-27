const tags = document.getElementById('tags');
const textarea = document.getElementById('textarea');
const separator = ',';

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

function onKeyUp({ target }) {
  createTags(target.value);
}

textarea.addEventListener('keyup', onKeyUp);
