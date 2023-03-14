const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percent = document.getElementById('percent');
const remained = document.getElementById('remained');
const fullCupClassName = 'full';

const glassVolumeMl = 250;
const litersExpected = 2;

function setRemainedStyle(visibility, heightPx) {
  remained.style.visibility = visibility;
  remained.style.height = `${heightPx}px`;
}

function setPercentStyle(visibility, heightPx) {
  percent.style.visibility = visibility;
  percent.style.height = `${heightPx}px`;
}

function updateMainCup() {
  const fullCupsCount = getFullCupsCount();
  const totalCupsCount = smallCups.length;
  if (!fullCupsCount) {
    setPercentStyle('hidden', 0);
  } else {
    const ratio = fullCupsCount / totalCupsCount;
    setPercentStyle('visible', ratio * 330);
    percent.innerText = `${ratio * 100}%`;
  }

  if (fullCupsCount === totalCupsCount) {
    setRemainedStyle('hidden', 0);
  } else {
    setRemainedStyle('visible');
    liters.innerHTML = `${
      litersExpected - (glassVolumeMl * fullCupsCount) / 1000
    }L`;
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

updateMainCup();
