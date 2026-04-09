// ------ Level 1 ------
console.log("------ Level 1 ------");

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// 1. Explain the difference between forEach, map, filter, and reduce.

/*
forEach is used only in arrays. 
map iterates arrays and modifies the elements.
filter filters out elements and modifies them. 
reduce takes multiple values and returns a single value.
*/

// 2. Define a callback function before you use it in forEach, map, filter or reduce.
const callback = n => {
    return n * 2;
}

// 3. Use forEach to console.log each country in the countries array.
console.log("--- Ex 3 ---");

countries.forEach(country => console.log(country));

// 4. Use forEach to console.log each name in the names array.
console.log("--- Ex 4 ---");
names.forEach(name => console.log(name));

// 5. Use forEach to console.log each number in the numbers array.
console.log("--- Ex 5 ---");

numbers.forEach(num => console.log(num));

// 6. Use map to create a new array by changing each country to uppercase in the countries array.
console.log("--- Ex 6 ---");

const uppercaseCountries = countries.map((country) => country.toUpperCase());
console.log(uppercaseCountries);

// 7. Use map to create an array of countries length from countries array.
console.log("--- Ex 7 ---");

const countriesArray = countries.map((country) => country.length);
console.log(countriesArray);

// 8. Use map to create a new array by changing each number to square in the numbers array.
console.log("--- Ex 8 ---");

const squareNumber = numbers.map((square) => square**2);
console.log(squareNumber);

