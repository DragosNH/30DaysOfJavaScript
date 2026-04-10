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

// 9. Use map to change to each name to uppercase in the names array.
console.log("--- Ex 9 ---");

const uperName = names.map((name) => name.toUpperCase());
console.log(uperName);

// 10. Use map to map the products array to its corresponding prices.
console.log("--- Ex 10 ---");

const prices = products.map((price) => price.price);
console.log(prices);

// 11. Use filter to filter out countries containing land.
console.log("--- Ex 11 ---");

const landCountries = countries.filter(country => country.includes('land'));
console.log(landCountries);

// 12. Use filter to filter out countries having six character.
console.log("--- Ex 12 ---");

const sixChar = countries.filter(country => country.length !== 6);
console.log(sixChar);

// 13. Use filter to filter out countries containing six letters and more in the country array.
console.log("--- Ex 13 ---");

const lessThanSix = countries.filter(country => country < 6);
console.log(lessThanSix);

// 14. Use filter to filter out country start with 'E';
console.log("--- Ex 14 ---");

const noECountries = countries.filter(country => !country.includes("e"));
console.log(noECountries);

// 15. Use filter to filter out only prices with values.
console.log("--- Ex 15 ---");

const noValuePrices = products.filter(
  item => item.price === '' || item.price.toString().trim() === ''
);

console.log(noValuePrices);

// 16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
console.log("--- Ex 16 ---");

const getStringLists = arr => {
  let filter = arr.filter(item => {
    return typeof item === "string";
  });

  return filter;
}

console.log(getStringLists(["Body", 52, "yes", true, "no", false, "maybe"]));

// 17. Use reduce to sum all the numbers in the numbers array.
console.log("--- Ex 17 ---");

const sum = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sum);

// 18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries.
console.log("--- Ex 18 ---");
const concatenatedCountries = countries.reduce((acc, curr) => acc + ", " + curr);
console.log(concatenatedCountries + " are north European countries.");
