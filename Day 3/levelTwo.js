// --- Level 2 ---

// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
console.log("--- Ex. 1 ---");
let base = 50;
let height = 20;
let area = 0.5 * base * height;
console.log(`Area o' the triangle: ${area}`);

// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c).
console.log("--- Ex. 2 ---");
let a = 20;
let b = 20;
let c = 20;
let perimeter = a + b + c;
console.log(`Perimeter of triangle is: ${perimeter}`);

// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width)).
console.log("--- Ex. 3 ---");
let theLength = 20;
let width = 20;
perimeter = 2 * (theLength + width);
area = theLength * width;
console.log(`Area = ${area} and Perimeter = ${perimeter}`);

// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
console.log("--- Ex. 4 ---");
let pi = 3.14;
let r = 20;
area = pi * r * r;
let circle = 2 * pi * r;
console.log(`Area: ${area} | Circle: ${circle}`);

// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
console.log("--- Ex. 5 ---");
let x = 5;
let y = 2 * x - 2;
console.log(`y-intercept: ${y}`);

// 6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
console.log("--- Ex. 6 ---");
x = (6 - 10);
y = (2 - 2);
let m =  y / x;
console.log(m);

// 7. Compare the slope of above two questions.
console.log("--- Ex. 7 ---");
y = 2 * x - 2;
console.log(m);

// 8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
console.log("--- Ex. 8 ---");
x = 5;
y = x * 2 + 6 * x + 9;
console.log(y);

// 9. Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
console.log("--- Ex. 9 ---");
let hours = 25;
let ratePerHour = 12.5;
let weeklyEarning = hours * ratePerHour;
console.log(weeklyEarning);

// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.
console.log("--- Ex. 10 ---");
let firstName = 'Dragos';
firstName.lenght > 7 ? console.log("Your name is long") : console.log('Your name is short');

// 11. Compare your first name length and your family name length and you should get this output.
console.log("--- Ex. 11 ---");
let lastName = 'Enache';

firstName.length > lastName.length
? console.log(`Your first name ${firstName} is longer than your last name ${lastName}`)
: firstName.length < lastName.length
? console.log(`Your last name ${lastName} is longer than your first name ${firstName}`)
: console.log(`${firstName} and ${lastName} are equal`);

// 12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge. 
console.log("--- Ex. 12 ---");
let myAge = 250;
let yourAge = 25;

myAge > yourAge ? console.log('I am older than you') : console.log('You are older than me');

// 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
/*
Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.
*/

console.log("--- Ex. 13 ---");
let apropiateDrivingAge = new Date().getFullYear() - 2005;
let drivingAge = 18;
let inapropiateDrivingAge = new Date().getFullYear() - 2015;

apropiateDrivingAge > 18 ? console.log(`You are ${drivingAge}. You are old enough to drive`) : console.log(`You are ${inapropiateDrivingAge}. You will be allowed to drive after ${ drivingAge - inapropiateDrivingAge} years.`);

// 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years.
console.log("--- Ex. 14 ---");
const years = 100; 
const secondsInYear = 60 * 60 * 24 * 365; 
const totalSeconds = years * secondsInYear;
console.log(`You lived ${totalSeconds} seconds.`);

// 15. Create a human readable time format using the Date time object.
/* 
YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm
*/

console.log("--- Ex. 15 ---");
let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();
let currentDay = new Date().getDate();
let currentHour = new Date().getHours();
let currentMinute = new Date().getMinutes();

console.log(`${currentYear}/${currentMonth + 1}/${currentDay} ${currentHour}:${currentMinute}`);
console.log(`${currentDay}/${currentMonth + 1}/${currentYear} ${currentHour}:${currentMinute}`);
