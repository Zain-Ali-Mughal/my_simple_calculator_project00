#! /usr/bin/env node
// Developing a simple command line calculator using TypeScipt, Node.js and Inquirer.
import inquirer from "inquirer"; // inquirer is used to get information from the console.
import chalk from "chalk"; // chalk is used to add color and styles to the console output.
console.log(chalk.green(`
==========================================
            Simple Calculator             
==========================================
`));
// await is used to ensure the code waits for the user's input before proceeding.
// This line will display the questions to the user and pause execution until the user provides responses to all questions.
let answers = await inquirer.prompt([
    {
        message: "Enter the First Number",
        type: "input",
        name: "num1",
    },
    {
        message: "Enter the Second Number",
        type: "input",
        name: "num2",
    },
    {
        message: "Select the Operator",
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],
    },
]);
// Now making conditional statements for calculations using if-else.
// The if-else chain checks the operator selected by the user and performs the corresponding arithmetic operation.
let result;
if (answers.operator === "+") {
    result = Number(answers.num1) + Number(answers.num2);
}
else if (answers.operator === "-") {
    result = Number(answers.num1) - Number(answers.num2);
}
else if (answers.operator === "*") {
    result = Number(answers.num1) * Number(answers.num2);
}
else if (answers.operator === "/") {
    result = Number(answers.num1) / Number(answers.num2);
}
else {
    result = "Invalid Operator";
}
console.log(chalk.blue(`
------------------------------------------
`));
console.log(chalk.yellow(`Result: ${result}`));
console.log(chalk.blue(`
------------------------------------------
`));
// The above code will run on the console.
