import inquirer from 'inquirer';
// 1) compter will generate a random number -Done.
// 2) using input for guessing number -Done
// 3) computer user input with computer generted number and show result
let randomNumber = 8;
let answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number :",
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("congratulations you guessed right number.");
}
else {
    console.log("you guessed wrong number");
}
