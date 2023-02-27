const tags = document.getElementById('tags');
const textarea = document.getElementById('textarea');
const separator = ',';

textarea.focus();

function createTags(value) {
  tags.innerHTML = '';

  const tagTexts = value
    .split(separator)
    .map((tag) => tag.trim())
    .filter((tag) => tag.length > 0)
    .forEach((tag) => {
      const newTag = document.createElement('span');
      newTag.classList.add('tag');
      newTag.innerText = tag;
      tags.appendChild(newTag);
    });
}

function onKeyUp({ target }) {
  createTags(target.value);
}

textarea.addEventListener('keyup', onKeyUp);
