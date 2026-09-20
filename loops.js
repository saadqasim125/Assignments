// ==========================================
// ASSIGNMENT 01 - LOOP PRACTICE
// ==========================================


// Q1: Write a program using a for loop to print numbers from 1 to 10.

console.log("Q1 Output:");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("------------------------------------------");


// Q2: Use a while loop to calculate the sum of the first N natural numbers.

let n = 10;
let counter = 1;
let sum = 0;

while (counter <= n) {
    sum += counter;
    counter++;
}

console.log("Q2 Output: Sum of first " + n + " natural numbers = " + sum);

console.log("------------------------------------------");


// Q3: Print the multiplication table of a given number using a for loop.

let tableNumber = 5;

console.log("Q3 Output: Multiplication Table of " + tableNumber);

for (let i = 1; i <= 10; i++) {
    console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
}

console.log("------------------------------------------");


// Q4: Write a program using a while loop to find the factorial of a given number.

let factorialNumber = 5;
let factorial = 1;
let factorialCounter = 1;

while (factorialCounter <= factorialNumber) {
    factorial *= factorialCounter;
    factorialCounter++;
}

console.log(
    "Q4 Output: Factorial of " +
    factorialNumber +
    " = " +
    factorial
);

console.log("------------------------------------------");


// Q5: Print numbers from 10 down to 1 using a for loop.

console.log("Q5 Output:");

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("------------------------------------------");


// Q6: Use a do-while loop to print all even numbers up to N.

let evenN = 20;
let evenCounter = 2;

console.log("Q6 Output: Even numbers up to " + evenN);

do {
    console.log(evenCounter);
    evenCounter += 2;
} while (evenCounter <= evenN);

console.log("------------------------------------------");


// Q7: Write a program using a while loop to calculate the sum of digits
// of a given number.

let digitNumber = 12345;
let digitSum = 0;

while (digitNumber > 0) {
    let digit = digitNumber % 10;
    digitSum += digit;
    digitNumber = Math.floor(digitNumber / 10);
}

console.log("Q7 Output: Sum of digits = " + digitSum);

console.log("------------------------------------------");


// Q8: Generate the first 10 terms of the Fibonacci series using a for loop.

let first = 0;
let second = 1;

console.log("Q8 Output: First 10 Fibonacci terms:");

for (let i = 1; i <= 10; i++) {
    console.log(first);

    let next = first + second;
    first = second;
    second = next;
}

console.log("------------------------------------------");


// Q9: Use a do-while loop to keep asking the user for a number
// until they guess the correct one.
//
// For automatic console execution, a sample guess is used.
// The correct number is 7.

let correctNumber = 7;
let guesses = [3, 5, 7];
let guessIndex = 0;
let userGuess;

do {
    userGuess = guesses[guessIndex];

    console.log("Q9 Output: Guess = " + userGuess);

    guessIndex++;
} while (userGuess !== correctNumber && guessIndex < guesses.length);

if (userGuess === correctNumber) {
    console.log("Q9 Output: Correct! You guessed the number.");
} else {
    console.log("Q9 Output: Game over.");
}

console.log("------------------------------------------");


// Q10: Write a program using a for loop to check if a given number is prime.

let primeNumber = 29;
let isPrime = true;

if (primeNumber < 2) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(primeNumber); i++) {
        if (primeNumber % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log("Q10 Output: " + primeNumber + " is a prime number.");
} else {
    console.log("Q10 Output: " + primeNumber + " is not a prime number.");
}

console.log();
console.log();
console.log();