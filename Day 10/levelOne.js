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

// 5. Create a set of 5 string elements from array.
console.log("--- Ex 5 ---");

const stringsArray = ["yes", "no", "maybe", "tommorrow", "yesterday"];
const stringsArraySet = new Set(stringsArray);
console.log(stringsArraySet);
 
// 6. Create a map of countries and number of characters of a country.
console.log("--- Ex 6 ---");

const newCountries =[
    ["Finland", "Finland".length],
    ["France", "France".length],
    ["Fiji", "Fiji".length],
]

const countriesMap = new Map(newCountries);
console.log(countriesMap);

