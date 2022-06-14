function inputNumber(numberTag) {
  const displayInput = document.getElementById('values');
  const number = numberTag.target.innerText;
  displayInput.value += number;
}

function keyboardEventListeners() {
  const numbers = ['zero', 'one', 'two', 'tree', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'pi'];
  for (let index = 0; index < numbers.length; index += 1) {
    const number = document.getElementById(numbers[index]);
    number.addEventListener('click', inputNumber);
  }
}

window.onload = () => {
  keyboardEventListeners();
}
