// --- Level 1 ---
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
// 1. Declare an empty array.
const emptyArray = [];

// 2. Declare an array with more than 5 number of elements
const elementsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 3.Find the length of your array.
console.log("--- Ex 3 ---");
console.log(elementsArray.length); // 10

// 4.Get the first item, the middle item and the last item of the array.
console.log("--- Ex 4 ---");
console.log(elementsArray[0]);
console.log(elementsArray[5]);
console.log(elementsArray[9]);

// 5.Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5.
console.log("--- Ex 5 ---");
const mixedDataTypes = ["Potato", true, ["yes", "no", "maybe"], 5, "string", "element", 10, "this is a string"];
console.log(mixedDataTypes.length);

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon.
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// 7. Print the array using console.log().
console.log("--- Ex 7 ---");
console.log(itCompanies);

// 8. Print the number of companies in the array.
console.log("--- Ex 8 ---");
console.log(itCompanies.length); // 7

// 9. Print the first company, middle and last company.
console.log("--- Ex 9 ---");
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[6]);

// 10. Print out each company.
console.log("--- Ex 10 ---");
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

// 11. Change each company name to uppercase one by one and print them out.
console.log("--- Ex 11 ---");
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log("--- Ex 12 ---");
console.log("Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies");

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found.
console.log("--- Ex 13 ---");
console.log("- If exists -");

if (itCompanies.includes("Facebook")){
    console.log("Facebook");
}else{
    console.log("Company not found");
}

console.log("- If does not exists -");

if (itCompanies.includes("Meta")){
    console.log("Facebook");
}else{
    console.log("Company not found");
}

// 14. Filter out companies which have more than one 'o' without the filter method.
console.log("--- Ex 14 ---");
let result = [];

// Facebook
if (itCompanies[0].toLowerCase().split("o").length - 1 > 1) {
    result.push(itCompanies[0]);
}

// Google
if (itCompanies[1].toLowerCase().split("o").length - 1 > 1) {
    result.push(itCompanies[1]);
}

// Microsoft
if (itCompanies[2].toLowerCase().split("o").length - 1 > 1) {
    result.push(itCompanies[2]);
}

// Apple
if (itCompanies[3].toLowerCase().split("o").length - 1 > 1) {
    result.push(itCompanies[3]);
}

// IBM
if (itCompanies[4].toLowerCase().split("o").length - 1 > 1) {
    result.push(itCompanies[4]);
}

// Oracle
if (itCompanies[5].toLowerCase().split("o").length - 1 > 1) {
    result.push(itCompanies[5]);
}

// Amazon
if (itCompanies[6].toLowerCase().split("o").length - 1 > 1) {
    result.push(itCompanies[6]);
}

console.log(result);

// 15. Sort the array using sort() method.
console.log("--- Ex 15 ---");
console.log(itCompanies.sort());

// 16. Reverse the array using reverse() method.
console.log("--- Ex 16 ---");
console.log(itCompanies.reverse());

// 17. Slice out the first 3 companies from the array.
console.log("--- Ex 17 ---");
console.log(itCompanies.slice(3, 7));

// 18. Slice out the last 3 companies from the array.
console.log("--- Ex 18 ---");
console.log(itCompanies.slice(0,4));

// 19. Slice out the middle IT company or companies from the array.
console.log("--- Ex 19 ---");
let midCompany = itCompanies.slice(parseInt(itCompanies.length/2));
console.log(midCompany);

// 20.Remove the first IT company from the array.
console.log("--- Ex 20 ---");
console.log(itCompanies.shift());
