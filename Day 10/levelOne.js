// ------ Level 1 ------
console.log("------ Level 1 ------");

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

// 1. create an empty set.
console.log("--- Ex 1 ---");

const epmtySet = new Set();
console.log(epmtySet);

// 2. Create a set containing 0 to 10 using loop.
console.log("--- Ex 2 ---");

const oneToTen = [1,2,3,4,5,6,7,8,9,10];
const setOneToTen = new Set(oneToTen)
console.log(setOneToTen);

// 3. Remove an element from a set.
console.log("--- Ex 3 ---");

setOneToTen.delete(5);
console.log(setOneToTen);

// 4. Clear a set.
console.log("--- Ex 4 ---");

setOneToTen.clear();
console.log(setOneToTen);
