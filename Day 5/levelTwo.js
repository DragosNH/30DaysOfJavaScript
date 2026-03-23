// --- Level 2 ---
console.log("------ Level 2 ------");

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

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

// 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file.

// 2. First remove all the punctuations and change the string to array and count the number of words in the array.
console.log("--- Ex 2 ---");
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.split(' ');
console.log(words);
console.log(words.length);

// 3. In the following shopping cart add, remove, edit items.
/*
- add 'Meat' in the beginning of your shopping cart if it has not been already added.
- add Sugar at the end of you shopping cart if it has not been already added.
- remove 'Honey' if you are allergic to honey.
- modify Tea to 'Green Tea'.
*/

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');
let removeHoney = shoppingCart[4]
shoppingCart.splice(removeHoney,1)
shoppingCart.splice(2,2, "Green Tea")
console.log(shoppingCart);

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries.includes('Ethiopia')){
    console.log('ETHIOPIA');
}

// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
console.log(webTechs.includes("Sass"));

if (webTechs.includes("Sass")){
    console.log('Sass is a CSS preprocess');
} else{
    webTechs.push("Sass")
    console.log(webTechs);   
}

