// These variables hold the values used in the calculator
let displayValue = ''; // Holds the value displayed on the calculator screen
let num1 = ''; // Holds the first number for calculation
let num2 = ''; // Holds the second number for calculation
let operator = ''; // Holds the operator (+, -, *, /) for the calculation

// This function appends the clicked button value to the calculator display
function appendToDisplay(value) {
    // If the value is "=", and both num1 and num2 are not empty, it triggers the calculation
    if (value === '=' && num1 !== '' && num2 !== '') {
        calculate();
        setTimeout(() => {
            clearDisplay();
        }, 1000); // Adjust the delay time as needed
        return;
    }

    // If the value is "C", it clears the display
    if (value === 'C') {
        clearDisplay();
        return;
    }

    // If the value is "CE", it clears the last entry
    if (value === 'CE') {
        clearLastEntry();
        return;
    }

    // Appends the clicked button value to the displayValue variable
    displayValue += value;
    // Updates the calculator display with the new displayValue
    document.getElementById('display').value = displayValue;

    // Checks if the value is a number
    if (!isNaN(value)) {
        // If operator is empty, it means we're still inputting num1
        if (!operator) {
            num1 += value; // Append the value to num1
        } else {
            num2 += value; // Otherwise, append the value to num2
        }
    } else {
        // If the value is not a number and not a dot (decimal point), and operator is empty, assign the value to operator
        if (value !== '.' && !operator) {
            operator = value;
        }
    }
}

// This function performs the calculation based on the operator and two numbers
function calculate() {
    let result;
    // Switch statement to determine the operation based on the operator
    switch (operator) {
        case '+':
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case '*':
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case '/':
            result = parseFloat(num1) / parseFloat(num2);
            break;
    }
    // Updates the calculator display with the result
    document.getElementById('display').value = result;
    // Assigns the result to num1 for possible further calculations
    num1 = result.toString();
    // Resets num2 and operator for the next calculation
    num2 = '';
    operator = '';
}

// This function clears the calculator display and resets all variables
function clearDisplay() {
    displayValue = ''; // Clears the displayValue
    num1 = ''; // Clears num1
    num2 = ''; // Clears num2
    operator = ''; // Clears operator
    // Updates the calculator display to an empty string
    document.getElementById('display').value = displayValue;
}

// This function clears the last entry
function clearLastEntry() {
    // If there is an operator, clear num2
    if (operator) {
        num2 = '';
    } else { // Otherwise, clear num1
        num1 = '';
    }
    // Update displayValue to remove the last character
    displayValue = displayValue.slice(0, -1);
    // Updates the calculator display with the updated displayValue
    document.getElementById('display').value = displayValue;
}
