let displayValue = '0';

function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function appendToDisplay(value) {
    if (displayValue === '0' && value !== '.') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function toggleHiddenButtons() {
    const hiddenButtons = document.querySelectorAll('.calculator button.hidden');
    hiddenButtons.forEach(button => {
        button.style.display = button.style.display === 'none' ? 'inline-block' : 'none';
    });
}



