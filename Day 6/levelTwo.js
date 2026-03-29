console.log("------ Level 2 ------");

// 1. Develop a small script which generate any number of characters random id.
console.log("--- Ex 1 ---");

let result = '';
let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let randomNumber = Math.floor(Math.random() * 50);

for (let i = 0; i <= randomNumber; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
}

console.log(result);

// 2. Write a script which generates a random hexadecimal number.
console.log("--- Ex 2 ---");
let hexCode = '#';
let hexCharacters = '123456789ABCDEF';

for (let i = 0; i < 6; i++){
    let randomIndex = Math.floor(Math.random() * hexCharacters.length);
    hexCode += hexCharacters.charAt(randomIndex);
}

console.log(hexCode);

// 3. Write a script which generates a random rgb color number.
console.log("--- Ex 3 ---");

let rgb = 0;
let rgbMaxValue = 355; 
let randomValue1 = Math.floor(Math.random() * rgbMaxValue);
let randomValue2 = Math.floor(Math.random() * rgbMaxValue);
let randomValue3 = Math.floor(Math.random() * rgbMaxValue);

for (let i = 0; i <= rgbMaxValue; i++){
    rgb += randomValue1
    rgb += randomValue2
    rgb += randomValue3
}

console.log(`rgb(${randomValue1}, ${randomValue2}, ${randomValue3})`);

// 4. Using the above countries array, create the following new array.
console.log("--- Ex 4 ---");
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

let countriesListed = [];
let upperCountriesListed = [];

for (let i = 0; i < countries.length; i++) {
    countriesListed.push(countries[i]);
}

for (let i = 0; i < countriesListed.length; i++) {
    upperCountriesListed.push(
        countriesListed[i].toUpperCase()
    );
}

console.log(upperCountriesListed);

// 5. Using the above countries array, create an array for countries length'.
console.log("--- Ex 5 ---");

let countriesLen = [];

for (let i = 0; i < countries.length; i++) {
    countriesLen.push(countries[i].length);
}

console.log(countriesLen);

// 6. Use the countries array to create the following array of arrays:
/*
  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]
*/

console.log("--- Ex 6 ---");

countriesListed = [];
countriesLen = [];
let countriesInitials = [];

for (let i = 0; i < countries.length; i++) {
    countriesListed.push(countries[i]);
    countriesInitials.push(
        countries[i].slice(0, 3).toUpperCase()
    );
    countriesLen.push(countries[i].length);
    console.log(`[${countriesListed[i]}, ${countriesInitials[i]}, ${countriesLen[i]}]`);
}

// 7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
console.log("--- Ex 7 ---");

let landCountries = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes('land')) {
        landCountries.push(countries[i]);
    }
}

console.log(landCountries);

// 8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
console.log("--- Ex 8 ---");

let iaCountries = [];
for (let i = 0; i < countries.length; i++){
    if (countries[i].includes('ia')) {
        iaCountries.push(countries[i]);
    }
}
console.log(iaCountries);

// 9. Using the above countries array, find the country containing the biggest number of characters.
console.log("--- Ex 9 ---");

let biggestValue = [];
for (let i = 0; i < countries.length; i++){
    if(countries[i].length > 7){
        biggestValue.push(countries[i]);
    };
};

console.log(biggestValue);

// 10. Using the above countries array, find the country containing only 5 characters.
console.log("--- Ex 10 ---");

let fiveCharCountries = [];

for (let i = 0; i < countries.length; i++){
    if(countries[i].length === 5){
        fiveCharCountries.push(countries[i])
    }
}

console.log(fiveCharCountries);

// 11. Find the longest word in the webTechs array.
console.log("--- Ex 11 ---");

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const longestWeb = [];

for(let i = 0; i < webTechs.length; i++){
    if(webTechs[i].length > 7){
        longestWeb.push(webTechs[i]);
    };
};

console.log(longestWeb);

// 12. Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
console.log("--- Ex 12 ---");

let webList = [];

for (let i = 0; i < webTechs.length; i++) {
    webList.push([webTechs[i], webTechs[i].length]);
}

console.log(webList);

// 13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack.
console.log("--- Ex 13 ---");

const mernStack = ["MongoDb", "Express", "React", "Node"];
const acronym = [];

for (let i=0; i < mernStack.length; i++){
    acronym.push(mernStack[i].charAt(0));
}

console.log(`${acronym.join('')}`);

// 14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
console.log("--- Ex 14 ---");

let iteratedWebTecs = [];

for(let i = 0; i < webTechs.length; i++){
    iteratedWebTecs.push(webTechs[i]);
    
}

console.log(`${iteratedWebTecs}`);


// 15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
console.log("--- Ex 15 ---");

const fruitArray = ['banana', 'orange', 'mango', 'lemon'];
const reversedFruit = []
for(let i = fruitArray.length-1; i >= 0; i--){
    reversedFruit.push(fruitArray[i])
}

console.log(reversedFruit);

// 16. Print all the elements of array as shown below.
/* 
  HTML
  CSS
  JS
  REACT
  NODE
  EXPRESS
  MONGODB
*/
console.log("--- Ex 16 ---");

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

let newFullStack = [];

for (let i = 0; i < fullStack.length; i++){
    newFullStack.push(fullStack[i]);
}

console.log(`${newFullStack}`);
