// --------- Level 1 ---------
console.log("------ Level 1 ------");
const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// 1. Read the countries API using fetch and print the name of country, capital, languages, population and area.

fetch(countriesAPI).then(data => {console.log(data)}).catch(error => console.error(error))