// --- Level 1 ---

// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Dragos';
let lastName = 'Enache';
let country = 'France';
let city = 'Saint - Louis';
let age = 4000;
let isMarried = false;
let year = new Date().getFullYear();

console.log("--- Ex. 1 ---");
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// 2. Check if type of '10' is equal to 10.
console.log("--- Ex. 2 ---");
console.log(typeof '10' === 10);

// 3. Check if parseInt('9.8') is equal to 10.
console.log("--- Ex. 3 ---");
console.log(parseInt('9.8') == 10);

// 4.Boolean value is either true or false.
// Write three JavaScript statement which provide truthy value.
// Write three JavaScript statement which provide falsy value.
console.log("--- Ex. 4 ---");
console.log("- Truthy -");
console.log(5 > 2);
console.log(5 !== '5');
console.log(2 + 5 == 7);

console.log("- Falsy -");
console.log(5 < 2);
console.log(5 - 2 == 2);
console.log(5 === '5');

// 5.Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log().
/*
4 > 3 => true
4 >= 3 => true
4 < 3 => false
4 <= 3 => false
4 == 4 => true
4 === 4 => true
4 != 4 => false
4 !== 4 => false
4 != '4' => false
4 == '4' => true
4 === '4' => false
Find the length of python and jargon and make a falsy comparison statement. */

console.log("--- Ex. 5 ---");
let py = 'python';
let jarg = 'jargon';
console.log(py.length != jarg.length);

// 6.Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log().
/*
4 > 3 && 10 < 12 => true
4 > 3 && 10 > 12 => false
4 > 3 || 10 < 12 => true
4 > 3 || 10 > 12 => true
!(4 > 3) => false
!(4 < 3) => true
!(false) => true
!(4 > 3 && 10 < 12) => false
!(4 > 3 && 10 > 12) => true
!(4 === '4') => true
There is no 'on' in both dragon and python => false*/

console.log("--- Ex. 6 ---");
console.log(!'python'.includes('on'));
console.log(!'dragon'.includes('on'));

// 7. Use the Date object to do the following activities:

console.log("--- Ex. 7 ---");
// What is the year today?
let currentYear = new Date().getFullYear();
console.log(currentYear);
// What is the month today as a number? 
let month = new Date().getMonth();
console.log(month);
// What is the day today as a number?
let day = new Date().getDate();
console.log(day);
// What is the date today?
console.log(`${day}/${month + 1}/${year}`);
// What is the hours now?
let hour = new Date().getHours();
console.log(hour);
// What is the minutes now?
let minute = new Date().getMinutes();
console.log(minute);
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
let allSeconds = Date.now();
console.log(allSeconds);
