let display = document.getElementById('display');
let currentInput = '';
let currentOperator = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(operator) {
    if (currentInput === '') return; // Evita adicionar operador sem número
    if (previousInput !== '') {
        calculate(); // Se já há um número anterior, realiza o cálculo
    }
    currentOperator = operator;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    if (currentInput === '' || previousInput === '') return;
    let result;
    switch (currentOperator) {
        case '+':
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(previousInput) / parseFloat(currentInput);
            break;
        default:
            return;
    }
    display.value = result;
    currentInput = result.toString();
    previousInput = '';
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    currentOperator = '';
    display.value = '';
}
