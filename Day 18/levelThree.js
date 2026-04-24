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

// 2. Read the countries api and find out the 10 largest countries
fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        const countriesWithArea = data.sort((a, b) => {
            if (a.area > b.area) return -1;
            if (a.area < b.area) return 1;
            return 0;
        })
            .map(el => {
                return {
                    [el.name]: el.area
                }
            }).slice(0, 10);

        console.log(countriesWithArea)
    })
    .catch(error => console.log(error))

// 3. Read the countries api and count total number of languages in the world used as officials.

fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        const languages = new Set() // Using set helps us to automatically filter distinct values
        data.map(el => el.languages.forEach(lang => languages.add(lang.name)))

        console.log(`Total number of official languages in the world is ${languages.size}`)
    })
    .catch(error => console.log(error))