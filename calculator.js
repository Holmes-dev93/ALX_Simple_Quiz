// 1. Implement Arithmetic Functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    // Handle division by zero
    if (number2 === 0) {
        return "Error: Division by zero";
    }
    return number1 / number2;
}

// Helper function to safely get and parse input values
function getInputs() {
    // Retrieve input values by ID
    const input1 = document.getElementById('number1').value;
    const input2 = document.getElementById('number2').value;

    // Use parseFloat to convert inputs to floating-point numbers.
    // Use || 0 to default to 0 if the input is empty or invalid (e.g., just a minus sign).
    const number1 = parseFloat(input1) || 0;
    const number2 = parseFloat(input2) || 0;
    
    return { number1, number2 };
}

// Helper function to display the result
function displayResult(result) {
    document.getElementById('calculation-result').textContent = result;
}

// 2. Attach Event Listeners
document.getElementById('add').addEventListener('click', function() {
    const { number1, number2 } = getInputs();
    const result = add(number1, number2);
    displayResult(result);
});

document.getElementById('subtract').addEventListener('click', function() {
    const { number1, number2 } = getInputs();
    const result = subtract(number1, number2);
    displayResult(result);
});

document.getElementById('multiply').addEventListener('click', function() {
    const { number1, number2 } = getInputs();
    const result = multiply(number1, number2);
    displayResult(result);
});

document.getElementById('divide').addEventListener('click', function() {
    const { number1, number2 } = getInputs();
    const result = divide(number1, number2);
    displayResult(result);
});
