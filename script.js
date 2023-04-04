const numbers = document.querySelectorAll('.number');

numbers.forEach((number) => {
  number.addEventListener('click', (event) => {
    for(let i = 0; i < numbers.length; i++) {
      numbers[i].classList.remove('clicked');
    }

    number.classList.add('clicked');
  });
});