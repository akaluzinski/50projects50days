const showNavigationClassName = 'show-navigation';

const openMenu = document.getElementById('open-navigation');
const closeMenu = document.getElementById('close-navigation');
const container = document.querySelector('.container');

openMenu.addEventListener('click', onOpenMenuClick);
closeMenu.addEventListener('click', onCloseMenuClick);

function onOpenMenuClick() {
  container.classList.add(showNavigationClassName);
}

function onCloseMenuClick() {
  container.classList.remove(showNavigationClassName);
}
