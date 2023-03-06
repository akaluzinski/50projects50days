const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  counter.innerHTML = '0';

  const updateCounter = () => {
    const targetValue = +counter.getAttribute('data-target');
    const initialValue = +counter.innerText;
    const interval = 200;

    if (initialValue < targetValue) {
      counter.innerText = `${Math.ceil(initialValue + targetValue / interval)}`;
      setTimeout(updateCounter, 1);
    }
  };

  updateCounter();
});
