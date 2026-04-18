// --------- Level 1 ---------
console.log("------ Level 1 ------");

// 1. Display the countries array as a table.
console.log("--- Ex 1 ---");

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]

console.table(countries);

// 2. Display the countries object as a table.
console.log("--- Ex 2 ---");

const countriesObj = {west: 'France', south: 'Italy', east: 'Ukraine', north: 'Finland'};
console.table(countriesObj);

// 3. Use console.group() to group logs.
console.log("--- Ex 3 ---");

console.group("Group");
console.table(countries);
console.table(countriesObj);
console.groupEnd();
