const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percent = document.getElementById('percent');
const remained = document.getElementById('remained');
const fullCupClassName = 'full';

function updateMainCup() {
  const fullCupsCount = getFullCupsCount();
  const totalCupsCount = smallCups.length;
  if (!fullCupsCount) {
    percent.style.visibility = 'hidden';
    percent.style.height = 0;
  } else {
    const height = `${(fullCupsCount / totalCupsCount) * 100}`;

    percent.style.visibility = 'visible';
    percent.style.height = height;
  }
}

smallCups.forEach((smallCup, i) => {
  smallCup.addEventListener('click', () => {
    highlightCups(i);
  });
});

function highlightCups(lastCupToHighlightIdx) {
  if (
    smallCups[lastCupToHighlightIdx].classList.contains(fullCupClassName) &&
    (lastCupToHighlightIdx === getFullCupsCount() - 1 ||
      !smallCups[lastCupToHighlightIdx].nextElementSibling.classList.contains(
        fullCupClassName
      ))
  ) {
    lastCupToHighlightIdx--;
  }

  smallCups.forEach((smallCup, i) => {
    if (i <= lastCupToHighlightIdx) {
      smallCup.classList.add(fullCupClassName);
    } else {
      smallCup.classList.remove(fullCupClassName);
    }
  });

  updateMainCup();
}

function getFullCupsCount() {
  return document.querySelectorAll('.cup-small.full').length;
}
