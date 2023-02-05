const panelSelector = '.panel';
const activeClassName = 'active';

const panels = document.querySelectorAll(panelSelector);

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    resetActive();
    panel.classList.add(activeClassName);
  });
});

function resetActive() {
  panels.forEach((panel) => {
    panel.classList.remove(activeClassName);
  });
}
