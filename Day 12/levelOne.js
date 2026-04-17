// --------- Level 1 ---------
console.log("------ Level 1 ------");

// 1. Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’.
console.log("--- Ex 1 ---");

let text = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";

let pattern = /\d+/g;
let income = text.match(pattern).map(x => parseFloat(x)).reduce((sum, x) => sum + x, 0);
console.log(income)

