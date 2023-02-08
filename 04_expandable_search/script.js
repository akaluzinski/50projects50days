const search = document.querySelector('.expandable-search');
const button = document.querySelector('.btn');
const searchInput = document.querySelector('.input');

button.addEventListener('click', () => {
  search.classList.toggle('active');
  searchInput.focus();
});
