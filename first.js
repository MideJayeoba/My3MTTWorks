// // Mide Jayeoba
// // 2023-10-04


// function checkList(todolist, word) {
//     // Check if the word is in the array
//     if (todolist.includes(word)) {
//         console.log(`yes, ${word} is on our list`);
//         todolist.splice(todolist.indexOf(word), 1); // remove the word from the array
//     }


//     // if the word is not in the array
//     else {
//         console.log(`no, "${word}" is not on our list`);
//         // ask the user if they want to add it to the list
//         let answer = prompt("Do you want to add this word to the list?"); // Prompt the user for a word
//         // if the user says yes, add the word to the array
//         if (answer.toLowerCase === "yes") {
//             todolist.push(word); // add the word to the array
//             console.log(`${word} has been added to the list`);
//             return todolist;
//         }}
//     } 

// let todolist = ["Buy groceries", "Clean the house", "Finish project"];
// let word = prompt("Enter a word to check: ");
// checkList(todolist, word); // Call the function with the word and the array


// Console-based calculator

const readline = require('readline');

// Create an interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Variables to store calculator state
let currentInput = '';
let operator = '';
let firstOperand = null;
let secondOperand = null;

// Function to perform the calculation
function calculate(firstOperand, operator, secondOperand) {
    switch (operator) {
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '*':
            return firstOperand * secondOperand;
        case '/':
            if (secondOperand === 0) {
                return 'Error: Division by zero';
            }
            return firstOperand / secondOperand;
        default:
            return 'Error: Invalid operator';
    }
}

// Function to handle user input
function handleInput(input) {
    if (!isNaN(input)) {
        // If input is a number, append it to the current input
        currentInput += input;
        console.log(`Current Input: ${currentInput}`);
    } else if (['+', '-', '*', '/'].includes(input)) {
        // If input is an operator
        if (firstOperand === null) {
            firstOperand = parseFloat(currentInput);
            operator = input;
            currentInput = '';
            console.log(`Operator set to: ${operator}`);
        } else {
            console.log('Error: Operator already set. Press "=" to calculate.');
        }
    } else if (input === '=') {
        // If input is "="
        if (firstOperand !== null && currentInput !== '') {
            secondOperand = parseFloat(currentInput);
            const result = calculate(firstOperand, operator, secondOperand);
            console.log(`Result: ${result}`);
            // Reset calculator state
            firstOperand = null;
            secondOperand = null;
            operator = '';
            currentInput = '';
        } else {
            console.log('Error: Incomplete expression.');
        }
    } else if (input === 'C') {
        // If input is "C", reset the calculator
        firstOperand = null;
        secondOperand = null;
        operator = '';
        currentInput = '';
        console.log('Calculator reset.');
    } else {
        console.log('Error: Invalid input.');
    }
}

// Start the calculator
function startCalculator() {
    console.log('Welcome to the Console Calculator!');
    console.log('Enter numbers, operators (+, -, *, /), "=" to calculate, or "C" to reset.');
    rl.on('line', (input) => {
        handleInput(input.trim());
        console.log('Enter next input:');
    });
}

startCalculator();