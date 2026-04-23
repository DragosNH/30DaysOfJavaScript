// --------- Level 1 ---------
console.log("------ Level 1 ------");

// 1. Store you first name, last name, age, country, city in your browser localStorage.

let info = {
    firstName: "Dragos",
    lastName: "Enache",
    age: 4000,
    country: "France",
    city: "Somewhere"
}

const infoText = JSON.stringify(info, undefined, 2);
localStorage.setItem('User', infoText);
console.log(localStorage);
