// 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript';

// 2. Print the string on the browser console using console.log().
console.log(challenge)

// 3. Print the length of the string on the browser console using console.log().
console.log("Challenge length: " + challenge.length)

// 4. Change all the string characters to capital letters using toUpperCase() method.
console.log("To upper case: " + challenge.toUpperCase())

// 5. Change all the string characters to lowercase letters using toLowerCase() method.
console.log("To lower case: " + challenge.toLowerCase())

// 6. Cut (slice) out the first word of the string using substr() or substring() method.
console.log(challenge.substring(3, 6));
console.log(challenge.substr(3, 3));

// 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substring(0, 2));

// 8. Check if the string contains a word Script using includes() method.
console.log(challenge.includes("Script"));

// 9. Split the string into an array using split() method.
console.log(challenge.split());

// 10. Split the string 30 Days Of JavaScript at the space using split() method.
console.log(challenge.split(" "));
