// ------ Level 1 ------

// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
console.log("--- Ex 1 ---");
let yourAge = prompt('Enter your age: ');

if (yourAge <= 16){
    console.log(`You are left with ${18 - yourAge} years to drive.`);
} else if(yourAge == 17) {
    console.log(`You are left with 1 year to drive.`);
} else if(yourAge >= 18) {
    console.log('You are old enogh to drive');
}

// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
console.log(("--- Ex 2 ---"));
let myAge = 25;

if (yourAge > myAge) {
    console.log(`You are ${yourAge - myAge} years older than me.`);
} else if (yourAge < myAge) {
    console.log(`I am ${myAge - yourAge} years older than you.`);
} else {
    console.log(`We have the same age!`);
    
}

// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways:
// - using if else
// - ternary operator.

console.log(("--- Ex 3 ---"));
let a = 4
let b = 3

console.log("- If statement -");

if (a > b){
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${a} is lesser than ${b}`);
}

console.log("- Ternary operator -");
a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${a} is lesser than ${b}`);

// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
console.log(("--- Ex 4 ---"));
if (yourAge % 2){
    console.log(`${yourAge} is odd`);
} else {
    console.log(`${yourAge} is even`);
}