import inquirer from "inquirer";
import chalk from "chalk";

const answers =(
{
  numberOne: number,
  numberTwo: number,
  operator: string,
}= await inquirer.prompt([
  { type: "number", name: "numberOne", message: "Enter your first number" },
  {
    type: "number",
    name: "numberTwo",
    message: "Enter your second number",
  },
  {
    type: "list",
    name: "operators",
    message: "Select an operator",
    choices: ["+", "-", "*", "/"],
  }
]));

const { numberOne, numberTwo, operator } = answers;

let result;
switch (operator) {
  case "+":
    result = numberOne + numberTwo;
    break;
  case "-":
    result = numberOne - numberTwo;
    break;
  case "*":
    result = numberOne * numberTwo;
    break;
  case "/":
    result = numberOne / numberTwo;
    break;
  default:
    console.log(chalk.red("Invalid operator"));
    break;
}

console.log(`${numberOne} ${operator} ${numberTwo} = ${result}`);
