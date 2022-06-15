const displayInput = document.getElementById('values');

function dotClick(dotTag) {
  const dot = dotTag.target.innerText;
  const lastCharacter = displayInput.value[displayInput.value.length - 1];
  if (lastCharacter === ' ' || displayInput.value === '') {
    displayInput.value += `0${dot}`;
  } else if(lastCharacter !== dot) {
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
    if (displayInput.value[displayInput.value.length - 1] === ' ') {
      displayInput.value = displayInput.value.substring(0, displayInput.value.length - 3);
    } else {
      displayInput.value = displayInput.value.substring(0, displayInput.value.length - 1);
    }
  }
}

function inputCharacter(characterTag) {
  const character = characterTag.target.innerText;
  displayInput.value += character;
}

function keyboardEventListeners() {
  const numbers = ['zero', 'one', 'two', 'tree', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'pi', 'first-bracket', 'second-bracket'];
  for (let index = 0; index < numbers.length; index += 1) {
    const number = document.getElementById(numbers[index]);
    number.addEventListener('click', inputCharacter);
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
