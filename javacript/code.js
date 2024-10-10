// Get all key elements
const keys = document.querySelectorAll('.key');
// Get the input div where we will display pressed keys
const inputDisplay = document.querySelector('.input');

// Function to handle key click
keys.forEach(key => {
    key.addEventListener('click', () => {
        const keyValue = key.getAttribute('data-key');
        // Append the clicked key value to the input display
        inputDisplay.textContent += keyValue;
    });
});
