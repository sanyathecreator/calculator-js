const display = document.getElementById('display');
const operators = ['+', '-', '*', '/', '.'];

function appendToDisplay(value) {
    if (checkLastCharacter(value)) {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = 'Error';
    }
}

function checkLastCharacter(value) {
    if (operators.includes(value) && operators.includes(display.value.slice(-1))) {
        return false;
    }
    return true;
}