// === PART 2: FUNCTION DEMONSTRATIONS (Scope, Parameters, Return Values) ===

// Global variable - accessible anywhere in this script
let globalBaseNumber = 2;

// Function 1: Calculates the square of a given number
// - `number` is a parameter (local scope)
// - returns a value
function calculateSquare(number) {
    // `result` is a local variable, only exists inside this function
    const result = number * number;
    return result;
}

// Function 2: Calculates the cube of a given number
// Demonstrates reuse of a function (calculateSquare) within another function
function calculateCube(number) {
    // You can call other functions you've created!
    const square = calculateSquare(number); 
    const result = square * number;
    return result;
}

// Function 3: A function that uses both a parameter and the global variable
// Demonstrates the difference between local and global scope
function calculateSquarePlusGlobal(number) {
    const result = calculateSquare(number) + globalBaseNumber;
    return result;
}

// Function 4: Puts it all together and interacts with the DOM
// This function is called by the button's onclick event in the HTML
function calculatePowers() {
    // Get the value from the input field
    const inputElement = document.getElementById('numInput');
    // Convert the input string to a number using the `+` operator
    const inputNumber = +inputElement.value; 

    // Check if the input is valid
    if (isNaN(inputNumber)) {
        alert("Please enter a valid number.");
        return; // Exit the function early
    }

    // Call our custom functions, passing the input as a parameter
    const squared = calculateSquare(inputNumber);
    const cubed = calculateCube(inputNumber);
    const squaredPlusGlobal = calculateSquarePlusGlobal(inputNumber);

    // Build the result string and display it
    const resultString = `
        Square: ${squared} |
        Cube: ${cubed} |
        Square + ${globalBaseNumber}: ${squaredPlusGlobal}
    `;
    document.getElementById('result').textContent = resultString;
}


// === PART 3: COMBINING CSS ANIMATIONS WITH JAVASCRIPT ===

// Get DOM elements once at the start
const profileCard = document.getElementById('profileCard');
const colorBtn = document.getElementById('colorBtn');

// Function 5: Toggles the 'is-flipped' class to trigger the CSS flip animation
// This function is called by the buttons with class 'flip-btn'
function flipCard() {
    // The classList.toggle method adds the class if it's not there,
    // and removes it if it is. This is perfect for toggle actions.
    profileCard.classList.toggle('is-flipped');
}

// Function 6: Dynamically adds a CSS class to celebrate, then removes it after the animation
function changeColor() {
    // 1. Add the class to trigger the animation
    profileCard.classList.add('celebrate');

    // 2. Wait for the animation to finish (0.5s, see CSS), then remove the class.
    // This allows the animation to be triggered again on the next click.
    setTimeout(() => {
        profileCard.classList.remove('celebrate');
    }, 500); // Time in milliseconds (ms)
}

// Function 7: Changes the status text and color (simple DOM manipulation)
function toggleStatus() {
    const statusElement = document.getElementById('statusText');
    // Check the current text to decide what to do next
    if (statusElement.textContent === 'Available') {
        statusElement.textContent = 'Away';
        statusElement.style.color = '#ff9f1a';
    } else {
        statusElement.textContent = 'Available';
        statusElement.style.color = '#2ed573';
    }
}


// === EVENT LISTENERS === 
// This is a cleaner way to attach events than using 'onclick' in HTML.

// Attach the flipCard function to both flip buttons
document.querySelectorAll('.flip-btn').forEach(button => {
    button.addEventListener('click', flipCard);
});

// Attach the changeColor function to the color button
colorBtn.addEventListener('click', changeColor);
