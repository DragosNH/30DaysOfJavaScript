// --- Level 2 --- 
// 1. Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// 2. Using console.log() print out the following quote by Mother Teresa:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
const value = '10';
const numberValue = Number(value);
console.log(numberValue === 10);

// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(Math.round(parseFloat('9.8')) == 10)

// 5. Check if 'on' is found in both python and jargon.

let var1 = 'Python';
let var2 = 'Jargon';

console.log(var1.includes('on'))
console.log(var2.includes('on'))