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