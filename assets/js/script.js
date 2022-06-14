const displayInput = document.getElementById('values');

function backspaceClick() {
  if (displayInput.value.length > 0) {
    displayInput.value = displayInput.value.substring(0, displayInput.value.length - 1);
  }
}

function inputNumber(numberTag) {
  const number = numberTag.target.innerText;
  displayInput.value += number;
}

function keyboardEventListeners() {
  const numbers = ['zero', 'one', 'two', 'tree', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'pi'];
  for (let index = 0; index < numbers.length; index += 1) {
    const number = document.getElementById(numbers[index]);
    number.addEventListener('click', inputNumber);
  }
  document.getElementById('backspace').addEventListener('click', backspaceClick);
}

window.onload = () => {
  keyboardEventListeners();
}
