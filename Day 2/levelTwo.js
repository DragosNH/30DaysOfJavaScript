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

// 6. I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence = 'I hope this course is not full of jargon';
console.log("Sentence: " + sentence.includes('jargon'));

// 7. Generate a random number between 0 and 100 inclusively.
let randNum = Math.floor(Math.random() * 100);
console.log("Random number: " + randNum)

// 8. Generate a random number between 50 and 100 inclusively.
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
console.log("Number between 50 and 100: " + getRandomArbitrary(50, 100));

// 9. Generate a random number between 0 and 255 inclusively.
let randNum2 = Math.floor((Math.random() * 255) + 1)
console.log("Random number ex 9: " + randNum2)

// 10. Access the 'JavaScript' string characters using a random number.
let js = 'JavaScript'
let randomLetter = Math.floor(Math.random() * js.length)
console.log(js[randomLetter]);

// 11. Use console.log() and escape characters to print the following pattern.
console.log("1 1 1 1 1\n 2 1 2 4 8\n 3 1 3 9 27\n 4 1 4 16 64\n 5 1 5 25 125");

// 12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let lastSentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(lastSentence.slice(31, 54))