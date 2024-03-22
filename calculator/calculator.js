let currentInput = '';
let operator = '';
let currentResult = 0;

function appendValue(value) {
    currentInput += value;
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes('.')){
        currentInput += '.';
        updateDisplay();
    }
}

function setOperator(op){
 operator = op;0
 currentResult = parseFloat(currentInput);
 currentInput = '';
}

function calculate(){
    const inputValue = parseFloat(currentInput);
    switch (operator) {
        case '+':
            currentResult += inputValue;
            break;
        case '-' :
            currentResult -= inputValue;
            break;
        case '*' :
            currentResult *= inputValue;
            break;
        case '/':
            if (inputValue !==0) {
                currentResult /= inputValue;
            } else {
                alert("Cannot divide by zero!");
            }
            break;
    }
    currentInput = currentResult.toString();
    updateDisplay();
    operator = '';
}

function clearDisplay() {
    currentInput = '';
    currentResult = 0;
    operator = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput || '0';
}