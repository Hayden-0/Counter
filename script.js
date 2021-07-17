const number = document.getElementById('number');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');
const color = document.querySelector('span');
let total = 0;

increase.addEventListener('click', () => {
    total++
    number.textContent = total;

    if (number.textContent > 0) {
        color.style.color = '#228B22';
    }

    if (number.textContent == 0) {
        color.style.color = 'black';
    }
})

reset.addEventListener('click', () => {
    number.textContent = 0;
    total = 0;

    if (number.textContent == 0) {
        color.style.color = 'black';
    }
})

decrease.addEventListener('click', () => {
    total --
    number.textContent = total;

    if (number.textContent < 0) {
        color.style.color = 'red';
    }

    if (number.textContent == 0) {
        color.style.color = 'black';
    }
})


