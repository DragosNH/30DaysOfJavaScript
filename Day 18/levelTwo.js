// --------- Level 2 ---------
console.log("------ Level 2 ------");

const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// 1. Print out all the cat names in to catNames variable.
fetch(catsAPI)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.error(error))
