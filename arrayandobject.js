// ==========================================
// ARRAY QUESTIONS
// ==========================================

// Q1. Print array elements
console.log("Q1. Print array elements");

let arr1 = [10, 20, 30, 40, 50];

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

console.log("------------------------------------------");


// Q2. Find array length without using .length directly
console.log("Q2. Find array length");

let arr2 = [10, 20, 30, 40, 50];
let count = 0;

for (let item of arr2) {
    count++;
}

console.log("Array length:", count);

console.log("------------------------------------------");


// Q3. Reverse array without using .reverse()
console.log("Q3. Reverse array");

function reverseArray(arr) {
    let reversed = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }

    return reversed;
}

console.log(reverseArray([1, 2, 3, 4, 5]));

console.log("------------------------------------------");


// Q4. Sum of array
console.log("Q4. Sum of array");

let arr4 = [10, 20, 30, 40];
let sum = 0;

for (let i = 0; i < arr4.length; i++) {
    sum += arr4[i];
}

console.log("Sum:", sum);

console.log("------------------------------------------");


// Q5. Filter even numbers
console.log("Q5. Filter even numbers");

let arr5 = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNumbers = [];

for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] % 2 === 0) {
        evenNumbers.push(arr5[i]);
    }
}

console.log("Even numbers:", evenNumbers);

console.log("==========================================");


// ==========================================
// OBJECT QUESTIONS
// ==========================================


// Q6. Access object properties
console.log("Q6. Access object properties");

let student = {
    name: "Ali",
    age: 18,
    grade: "A"
};

console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Grade:", student.grade);

console.log("------------------------------------------");


// Q7. Loop through object using for...in
console.log("Q7. Loop through object");

for (let key in student) {
    console.log(key + ": " + student[key]);
}

console.log("------------------------------------------");


// Q8. Object methods
console.log("Q8. Calculator object");

let calculator = {

    add: function(a, b) {
        return a + b;
    },

    subtract: function(a, b) {
        return a - b;
    },

    multiply: function(a, b) {
        return a * b;
    },

    divide: function(a, b) {
        return a / b;
    }
};

console.log("Addition:", calculator.add(10, 5));
console.log("Subtraction:", calculator.subtract(10, 5));
console.log("Multiplication:", calculator.multiply(10, 5));
console.log("Division:", calculator.divide(10, 5));

console.log("------------------------------------------");


// Q9. Nested objects
console.log("Q9. Nested object");

let student2 = {
    name: "Ali",
    age: 18,

    address: {
        city: "Karachi",
        country: "Pakistan"
    }
};

console.log("City:", student2.address.city);
console.log("Country:", student2.address.country);

console.log("------------------------------------------");


// Q10. Convert object keys and values into separate arrays
console.log("Q10. Convert object to arrays");

let student3 = {
    name: "Ali",
    age: 18,
    grade: "A"
};

let keys = Object.keys(student3);
let values = Object.values(student3);

console.log("Keys:", keys);
console.log("Values:", values);

console.log("==========================================");
console.log("Assignment Completed!");