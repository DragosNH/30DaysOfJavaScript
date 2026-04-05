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

const arrayOfRgbColors = num => {
    let rgbArray = [];

    const rgbFun = () => {
        let randomColor = Math.floor(Math.random() * 255);
        if(randomColor < 10){
            return `00${randomColor}`
        } else if(randomColor < 100){
            return `0${randomColor}`
        }

        return randomColor
    }

    for(let i = 0; i < num; i++){
        rgbArray.push(`rgb(${rgbFun()},${rgbFun()},${rgbFun()})`);
    }

    console.log(rgbArray);
    
}

arrayOfRgbColors(3);

// 5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
console.log("--- Ex 5 ---");

function convertHexaToRgb(hex) {
  hex = hex.replace('#', '');
  
  if (hex.length === 3) {
    hex = hex.split('').map(c => c + c).join('');
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgb(${r}, ${g}, ${b})`;
}   


console.log(convertHexaToRgb('#51f1f1'));

// 6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
console.log("--- Ex 6 ---");

const convertRgbToHexa = (r, g, b) => '#' + [r, g, b]
.map(x => x.toString(16).padStart(2, '0'))
.join('');

console.log(convertRgbToHexa(255, 51, 255));

// 7. Write a function generateColors which can generate any number of hexa or rgb colors.
console.log("--- Ex 7 ---");

const generateColors = (type, num) =>{
    let hexCharacters = "0123456789ABCDEF";
    let hexCode = [];
    let rgbArray = [];

    if (type === 'hexa'){
        for(let i = 0; i < num; i++){
            let hex = "";
            for(let j = 0; j < 6; j++){
                let index = Math.floor(Math.random() * hexCharacters.length);
                hex += hexCharacters[index]
            }
            hexCode.push(`#${hex}`)
        }
        return hexCode;
    }

    const randomRgb = () => {
        let randomColor = Math.floor(Math.random() * 255);
        if(randomColor < 10){
            return `00${randomColor}`
        } else if(randomColor < 100){
            return `0${randomColor}`
        }

        return randomColor
    }

    if (type === 'rgb'){
        for (let i = 0; i < num; i++) {
            rgbArray.push(`rgb(${randomRgb()},${randomRgb()},${randomRgb()})`)
        }
        return rgbArray;
    }


}

console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'