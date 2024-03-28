document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const numberButtons = document.querySelectorAll('.number');
    const operatorButtons = document.querySelectorAll('.operator');
    const clearButton = document.getElementById('clear');
    const enterButton = document.getElementById('enter');

    numberButtons.forEach(button => {
        button.addEventListener('click', function() {
            appendToDisplay(button.textContent);
        });
    });

    operatorButtons.forEach(button => {
        button.addEventListener('click', function() {
            appendToDisplay(button.textContent);
        });
    });

    clearButton.addEventListener('click', clearDisplay);

    enterButton.addEventListener('click', calculateResult);
});

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    let expression = document.getElementById('display').value;

    try {
        var result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}