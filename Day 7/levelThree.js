// ------ Level 3 ------
console.log("------ Level 3 ------");

// 1. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
console.log("--- Ex 1 ---");


const userIdGeneratedByUser = () => {
    let characters = "0123456789ABCDEFGHIJKLMNOPQRSTVWXYZ";

    let idLen = Number(prompt("How long should the Id be?"));
    let idNumbers = Number(prompt("How many IDs do you need?"));

    for (let j = 0; j < idNumbers; j++) {

        let id = "";

        for (let i = 0; i < idLen; i++) {
            let index = Math.floor(Math.random() * characters.length);
            id += characters[index];
        }

        console.log(id);
    }
}

// userIdGeneratedByUser()

// 2. Write a function name rgbColorGenerator and it generates rgb colors.
console.log("--- Ex 2 ---");

const rgbColorGenerator = () => {
    const numbers = () => {
        let randomNumber = Math.floor(Math.random() * 255);
        if (randomNumber < 10){
            return `00${randomNumber}`
        } else if (randomNumber < 100){
            return `0${randomNumber}`
        }
        return randomNumber
    }

    console.log(`rgb(${numbers()},${numbers()},${numbers()})`);
    
}

rgbColorGenerator()

// 3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
console.log("--- Ex 3 ---");

const arrayOfHexaColors = num => {
    let char = "0123456789ABCDEF";
    let hexArray = [];
    for(let i = 0; i < num; i++){
        let hex = "";
        for (let j = 0; j < 6; j++){
            let index = Math.floor(Math.random() * char.length);
            hex += char[index]
        }
        hexArray.push(`#${hex}`)
    }
    console.log(hexArray);
}

arrayOfHexaColors(5);

// 4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.
console.log("--- Ex 4 ---");

