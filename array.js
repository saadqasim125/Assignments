// ==========================================
// JAVASCRIPT ARRAY METHODS - QUESTIONS 1-20
// ==========================================


// Q1. push()
// Add Mango and Orange to the end of the array.

const fruits = ['Apple', 'Banana'];

fruits.push('Mango', 'Orange');

console.log("Q1:", fruits);
// Output: [ 'Apple', 'Banana', 'Mango', 'Orange' ]


// ==========================================


// Q2. pop()
// Remove the last task and store the removed value.

const tasks = ['Login', 'Dashboard', 'Logout'];

const removedTask = tasks.pop();

console.log("Q2 Tasks:", tasks);
console.log("Q2 Removed:", removedTask);
// Output:
// Q2 Tasks: [ 'Login', 'Dashboard' ]
// Q2 Removed: Logout


// ==========================================


// Q3. unshift() + shift()
// Add Student A to beginning, then remove first student.

const students = ['Student B', 'Student C'];

students.unshift('Student A');

const servedStudent = students.shift();

console.log("Q3 Remaining:", students);
console.log("Q3 Served:", servedStudent);
// Output:
// Q3 Remaining: [ 'Student B', 'Student C' ]
// Q3 Served: Student A


// ==========================================


// Q4. slice()
// Create a new array containing CSS, JS and React.

const topics = ['HTML', 'CSS', 'JS', 'React', 'Node'];

const selectedTopics = topics.slice(1, 4);

console.log("Q4:", selectedTopics);
console.log("Original:", topics);
// Output:
// Q4: [ 'CSS', 'JS', 'React' ]
// Original remains unchanged


// ==========================================


// Q5. splice()
// Remove jQuery from its current position.

const technologies = ['HTML', 'CSS', 'jQuery', 'React'];

technologies.splice(2, 1);

console.log("Q5:", technologies);
// Output: [ 'HTML', 'CSS', 'React' ]


// ==========================================


// Q6. includes()
// Check whether student@gmail.com is registered.

const emails = [
    'ali@gmail.com',
    'student@gmail.com',
    'ahmed@gmail.com'
];

const isRegistered = emails.includes('student@gmail.com');

console.log("Q6:", isRegistered);
// Output: true


// ==========================================


// Q7. indexOf()
// Find the index of the first Karachi.

const cities = ['Karachi', 'Lahore', 'Islamabad', 'Karachi'];

const cityIndex = cities.indexOf('Karachi');

console.log("Q7:", cityIndex);
// Output: 0

// If city is not found, indexOf() returns -1.


// ==========================================


// Q8. slice() vs splice()
// Difference between slice() and splice().

const arr1 = ['A', 'B', 'C', 'D'];

const sliced = arr1.slice(1, 3);

console.log("Q8 slice:", sliced);
console.log("Original after slice:", arr1);


// splice changes the original array
const arr2 = ['A', 'B', 'C', 'D'];

const spliced = arr2.splice(1, 2);

console.log("Q8 splice:", spliced);
console.log("Original after splice:", arr2);

/*
slice():
- Does NOT change original array.
- Returns a new array.
- Used to extract/copy elements.

splice():
- CHANGES the original array.
- Can add, remove or replace elements.
*/


// ==========================================


// Q9. map()
// Add 10% tax to every product price.

const prices = [1000, 2500, 800, 1500];

const pricesWithTax = prices.map(price => price * 1.10);

console.log("Q9:", pricesWithTax);
// Output: [ 1100, 2750, 880, 1650 ]


// ==========================================


// Q10. map()
// Create full names from firstName and lastName.

const users = [
    { firstName: 'Ali', lastName: 'Khan' },
    { firstName: 'Ahmed', lastName: 'Raza' },
    { firstName: 'Sara', lastName: 'Malik' }
];

const fullNames = users.map(user => {
    return user.firstName + ' ' + user.lastName;
});

console.log("Q10:", fullNames);
// Output:
// [ 'Ali Khan', 'Ahmed Raza', 'Sara Malik' ]


// ==========================================


// Q11. filter()
// Get marks where pass is >= 50.

const marks = [35, 76, 49, 90, 50, 20];

const passingMarks = marks.filter(mark => mark >= 50);

console.log("Q11:", passingMarks);
// Output: [ 76, 90, 50 ]


// ==========================================


// Q12. filter() + map()
// Get names of users who are 18 or older.

const users2 = [
    { name: 'Ali', age: 17 },
    { name: 'Ahmed', age: 20 },
    { name: 'Sara', age: 18 },
    { name: 'John', age: 16 }
];

const adultNames = users2
    .filter(user => user.age >= 18)
    .map(user => user.name);

console.log("Q12:", adultNames);
// Output: [ 'Ahmed', 'Sara' ]


// ==========================================


// Q13. find()
// Find the user whose id is 103.

const users3 = [
    { id: 101, name: 'Ali' },
    { id: 102, name: 'Ahmed' },
    { id: 103, name: 'Sara' },
    { id: 104, name: 'John' }
];

const foundUser = users3.find(user => user.id === 103);

if (foundUser) {
    console.log("Q13:", foundUser);
} else {
    console.log("Q13: User not found");
}

// Output:
// { id: 103, name: 'Sara' }


// ==========================================


// Q14. find() vs filter()

const users4 = [
    { id: 1, name: 'Ali' },
    { id: 2, name: 'Ahmed' },
    { id: 3, name: 'Ali' }
];

const oneUser = users4.find(user => user.name === 'Ali');

const manyUsers = users4.filter(user => user.name === 'Ali');

console.log("Q14 find:", oneUser);
console.log("Q14 filter:", manyUsers);

/*
find():
- Returns the FIRST matching element.
- Returns undefined if nothing is found.

filter():
- Returns ALL matching elements.
- Returns an array.
*/


// ==========================================


// Q15. reduce()
// Calculate the total cart bill.

const cartPrices = [1200, 350, 999, 450];

const totalBill = cartPrices.reduce((total, price) => {
    return total + price;
}, 0);

console.log("Q15:", totalBill);
// Output: 2999


// ==========================================


// Q16. reduce()
// Count how many times each technology appears.

const technologies2 = ['JS', 'React', 'JS', 'Node', 'React', 'JS'];

const technologyCount = technologies2.reduce((count, tech) => {

    if (count[tech]) {
        count[tech]++;
    } else {
        count[tech] = 1;
    }

    return count;

}, {});

console.log("Q16:", technologyCount);

// Output:
// { JS: 3, React: 2, Node: 1 }


// ==========================================


// Q17. sort()
// Sort numbers in ascending order.

const numbers = [25, 3, 100, 12, 8];

numbers.sort((a, b) => a - b);

console.log("Q17:", numbers);
// Output: [ 3, 8, 12, 25, 100 ]

/*
Why not just numbers.sort()?

Because JavaScript's default sort()
converts values to strings.

Example:
[25, 3, 100, 12].sort()

may produce:
[100, 12, 25, 3]

So for numbers use:

sort((a, b) => a - b)
*/


// ==========================================


// Q18. sort() + immutability
// Sort a copy without changing the original array.

const reactState = [50, 10, 30, 20, 40];

const sortedState = [...reactState].sort((a, b) => a - b);

console.log("Q18 Original:", reactState);
console.log("Q18 Sorted:", sortedState);

// Original:
// [50, 10, 30, 20, 40]

// Sorted:
// [10, 20, 30, 40, 50]

/*
sort() changes the original array.

Therefore, create a copy first:

[...reactState].sort(...)
*/


// ==========================================


// Q19. some()
// Check whether at least one product is out of stock.

const stockQuantities = [5, 0, 7, 2];

const outOfStock = stockQuantities.some(quantity => quantity === 0);

console.log("Q19:", outOfStock);
// Output: true


// ==========================================


// Q20. every() + some()
// Check:
// (a) whether every student passed
// (b) whether at least one student scored 90 or above

const studentMarks = [65, 75, 92, 88, 95];

const everyPassed = studentMarks.every(mark => mark >= 50);

const atLeastOne90 = studentMarks.some(mark => mark >= 90);

console.log("Q20 Every passed:", everyPassed);
console.log("Q20 At least one 90+: ", atLeastOne90);

