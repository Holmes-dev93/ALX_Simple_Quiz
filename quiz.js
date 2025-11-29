// Function Declaration
function checkAnswer() {
    // 1. Identify the Correct Answer
    const correctAnswer = "4";
    
    // Select the element for feedback
    const feedbackElement = document.getElementById('feedback');

    // 2. Retrieve the User’s Answer
    // Use document.querySelector to find the checked radio button with name="quiz"
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');
    
    // Check if an answer was selected
    if (!selectedRadio) {
        feedbackElement.textContent = "Please select an answer before submitting.";
        feedbackElement.style.color = "#dc3545"; // Error color
        return;
    }

    // Access the value property of the selected radio button
    const userAnswer = selectedRadio.value;

    // 3. Compare the User’s Answer with the Correct Answer
    if (userAnswer === correctAnswer) {
        // Correct answer logic
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = "#28a745"; // Success color
    } else {
        // Incorrect answer logic
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = "#dc3545"; // Error color
    }
}

// 4. Add an Event Listener to the Submit Button
// Get the button element
const submitButton = document.getElementById('submit-answer');

// Add a click event listener, passing the checkAnswer function (without parentheses)
submitButton.addEventListener('click', checkAnswer);
