#! /use/bin/env node

// // Assignment of calculator// // Assignment of calculator

import inquirer from "inquirer";

let ans = await inquirer.prompt([
    {
        name : "Num_One",
        message : "Enter First Number: ", 
        type : "number"
    },
    {
      name : "Num_Two",
      message : "Enter Second Number: ", 
      type : "number"
    },
    {
      name : "Operators",
      message : "Select the Operator ", 
      type : "list",
      choices: [ 'Add' , 'Subtract' , 'Multiply' , 'Divide' ]
    },
]);

let answer
  switch (ans.Operators) {

    case 'Add':
      answer = ans.Num_One + ans.Num_Two
      console.log("The answer of the addition is :" , answer);
      break;

    case 'Subtract':
      answer = ans.Num_One - ans.Num_Two
      console.log("The answer of the subtraction is :" , answer);
      break;

    case 'Multiply':
      answer = ans.Num_One * ans.Num_Two
      console.log("The answer of the multiplication is :" , answer);
      break;

    case 'Divide':
      answer = ans.Num_One / ans.Num_Two
        console.log("The answer of the division is :" , answer);
        break;
  }