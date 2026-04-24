// --------- Level 3 ---------
console.log("------ Level 3 ------");

const countriesAPI = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

//1. Read the cats api and find the average weight of cat in metric unit.

let catNames;
fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
        catNames = data.map(object => object.name)
        console.log(catNames)
    })
    .catch(error => console.log(error))

    