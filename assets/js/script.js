const displayInput = document.getElementById('values');

function inputSymbol(symbolTag) {
  const symbol = symbolTag.target.innerText;
  if (displayInput.value.length > 0) {
    displayInput.value += ` ${symbol} `;
  }
}

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
  const symbols = ['addition', 'subtraction', 'multiply', 'divide'];
  for (let index = 0; index < symbols.length; index += 1) {
    const symbol = document.getElementById(symbols[index]);
    symbol.addEventListener('click', inputSymbol)
  }
}

window.onload = () => {
  keyboardEventListeners();
}
