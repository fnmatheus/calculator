const displayInput = document.getElementById('values');

function dotClick(dotTag) {
  const dot = dotTag.target.innerText;
  const lastCharacter = displayInput.value[displayInput.value.length - 1];
  if (lastCharacter === ' ' || displayInput.value === '') {
    displayInput.value += `0${dot}`;
  } else {
    displayInput.value += dot;
  }
}

function testSymbol() {
  const symbol = displayInput.value[displayInput.value.length - 2];
  if (symbol === '-' || symbol === '+' || symbol === '*' || symbol === '÷') {
    return false;
  }
  return true;
}

function inputSymbol(symbolTag) {
  const symbol = symbolTag.target.innerText;
  const test = testSymbol();
  if (testSymbol() === true) {
    if (symbol === '-') {
      displayInput.value += ` ${symbol} `;
    } else if (displayInput.value.length > 0) {
      displayInput.value += ` ${symbol} `;
    }
  } else if (displayInput.value.length > 3) {
    displayInput.value = displayInput.value.substring(0, displayInput.value.length - 3);
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
  document.getElementById('dot').addEventListener('click', dotClick);
}

window.onload = () => {
  keyboardEventListeners();
}
