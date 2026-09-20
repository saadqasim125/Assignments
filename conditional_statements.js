// ==========================================
// ASSIGNMENT 01 - CONDITIONAL STATEMENTS
// ==========================================

// Q1: Write a program that checks if a number is positive, negative, or zero.

let number1 = 10;

if (number1 > 0) {
    console.log("Q1 Output: The number is positive.");
} else if (number1 < 0) {
    console.log("Q1 Output: The number is negative.");
} else {
    console.log("Q1 Output: The number is zero.");
}

console.log("------------------------------------------");


// Q2: Using an if-else statement, determine whether a given integer is even or odd.

let number2 = 7;

if (number2 % 2 === 0) {
    console.log("Q2 Output: The number is even.");
} else {
    console.log("Q2 Output: The number is odd.");
}

console.log("------------------------------------------");


// Q3: Write a program that takes two numbers and prints the larger one using conditional statements.

let number3A = 25;
let number3B = 40;

if (number3A > number3B) {
    console.log("Q3 Output: The larger number is " + number3A);
} else if (number3B > number3A) {
    console.log("Q3 Output: The larger number is " + number3B);
} else {
    console.log("Q3 Output: Both numbers are equal.");
}

console.log("------------------------------------------");


// Q4: Using if-else-if, assign grades (A, B, C, D, F) based on a student's percentage score.

let percentage = 85;

if (percentage >= 90) {
    console.log("Q4 Output: Grade A");
} else if (percentage >= 80) {
    console.log("Q4 Output: Grade B");
} else if (percentage >= 70) {
    console.log("Q4 Output: Grade C");
} else if (percentage >= 60) {
    console.log("Q4 Output: Grade D");
} else {
    console.log("Q4 Output: Grade F");
}

console.log("------------------------------------------");


// Q5: Write a program that checks if a given year is a leap year using conditional statements.

let year = 2024;

if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    console.log("Q5 Output: " + year + " is a leap year.");
} else {
    console.log("Q5 Output: " + year + " is not a leap year.");
}

console.log("------------------------------------------");


// Q6: Use a switch-case to print the name of the day when given a number.
// 1 = Monday, 2 = Tuesday, ... 7 = Sunday.

let dayNumber = 3;

switch (dayNumber) {
    case 1:
        console.log("Q6 Output: Monday");
        break;
    case 2:
        console.log("Q6 Output: Tuesday");
        break;
    case 3:
        console.log("Q6 Output: Wednesday");
        break;
    case 4:
        console.log("Q6 Output: Thursday");
        break;
    case 5:
        console.log("Q6 Output: Friday");
        break;
    case 6:
        console.log("Q6 Output: Saturday");
        break;
    case 7:
        console.log("Q6 Output: Sunday");
        break;
    default:
        console.log("Q6 Output: Invalid day number.");
}

console.log("------------------------------------------");


// Q7: Create a simple calculator using switch-case that performs
// addition, subtraction, multiplication, or division based on user input.

let calculatorNumber1 = 20;
let calculatorNumber2 = 5;
let operator = "*";

switch (operator) {
    case "+":
        console.log(
            "Q7 Output: " + (calculatorNumber1 + calculatorNumber2)
        );
        break;

    case "-":
        console.log(
            "Q7 Output: " + (calculatorNumber1 - calculatorNumber2)
        );
        break;

    case "*":
        console.log(
            "Q7 Output: " + (calculatorNumber1 * calculatorNumber2)
        );
        break;

    case "/":
        if (calculatorNumber2 !== 0) {
            console.log(
                "Q7 Output: " + (calculatorNumber1 / calculatorNumber2)
            );
        } else {
            console.log("Q7 Output: Cannot divide by zero.");
        }
        break;

    default:
        console.log("Q7 Output: Invalid operator.");
}

console.log("------------------------------------------");


// Q8: Write a program that checks whether a given character
// is a vowel or consonant using switch-case.

let character = "a";

switch (character.toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Q8 Output: The character is a vowel.");
        break;

    default:
        console.log("Q8 Output: The character is a consonant.");
}

console.log("------------------------------------------");


// Q9: Using switch-case, print instructions based on traffic light color.
// Red = Stop, Yellow = Wait, Green = Go.

let trafficLight = "Red";

switch (trafficLight.toLowerCase()) {
    case "red":
        console.log("Q9 Output: Stop");
        break;

    case "yellow":
        console.log("Q9 Output: Wait");
        break;

    case "green":
        console.log("Q9 Output: Go");
        break;

    default:
        console.log("Q9 Output: Invalid traffic light color.");
}

console.log("------------------------------------------");


// Q10: Write a program using switch-case where the user selects from a menu.
// 1 = Check Balance, 2 = Deposit, 3 = Withdraw, 4 = Exit.

let menuChoice = 1;
let balance = 5000;

switch (menuChoice) {
    case 1:
        console.log("Q10 Output: Your balance is Rs. " + balance);
        break;

    case 2:
        let depositAmount = 1000;
        balance += depositAmount;
        console.log(
            "Q10 Output: Rs. " +
            depositAmount +
            " deposited. New balance: Rs. " +
            balance
        );
        break;

    case 3:
        let withdrawAmount = 1000;

        if (withdrawAmount <= balance) {
            balance -= withdrawAmount;
            console.log(
                "Q10 Output: Rs. " +
                withdrawAmount +
                " withdrawn. New balance: Rs. " +
                balance
            );
        } else {
            console.log("Q10 Output: Insufficient balance.");
        }
        break;

    case 4:
        console.log("Q10 Output: Exit");
        break;

    default:
        console.log("Q10 Output: Invalid menu choice.");
}

console.log();
console.log();
console.log();