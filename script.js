// Get the input field and buttons
const buttons = document.querySelectorAll('.key');
const inputField = document.getElementById('inputA');
let currentInput = '';  // Store the current input string
// const Numberoutput = document.getElementById('Number-output')

// Function to handle button click
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');  // Get the button value

        if (value === 'AC') {
            // Clear the input field
            currentInput = '';
            inputField.value = '';
        } else if (value === '=') {
            // When '=' is clicked, evaluate the expression
            try {
                // Use eval to calculate the result
                const result = eval(currentInput); // Caution: eval can be a security risk if used incorrectly.
                inputField.value = result;  // Display the result
                inputField.value = result;  // Display the result
                document.getElementById('Number-output').innerHTML = " The result is : " + result ; 
                currentInput = result.toString();  // Update currentInput with the result
            } catch (error) {
                inputField.value = 'Error';  // Display error if invalid expression
                currentInput = '';  // Reset input
            }
        } else {
            // Append the clicked button value to the input
            currentInput += value;
            inputField.value = currentInput;
        }
    });
});
