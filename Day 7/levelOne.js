// ------ Level 1 ------
console.log("------ Level 1 ------");

// 1. Declare a function fullName and it print out your full name.
console.log("--- Ex 1 ---");

function fullName(){
    console.log(`Dragos ENACHE`);
};

fullName();

// 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
console.log("--- Ex 2 ---");
function fullName2(firstName, lastName){
    console.log(`Hello, ${firstName} ${lastName}`);
};

fullName2("Dragos", "Enache");

// 3. Declare a function addNumbers and it takes two two parameters and it returns sum.
console.log("--- Ex 3 ---");
function addNumbers(num1, num2){
    console.log(`${num1} + ${num2} = ${num1+num2}`);
}

addNumbers(5,5);

// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
console.log("--- Ex 4 ---");

const areaOfRectangle = (length, width) =>{
    let area = length * width;
    return area;
};

console.log(areaOfRectangle(5,8));

// 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
console.log("--- Ex 5 ---");

const perimeterOfRectangle = (length, width) =>{
    let perimeter = 2 * (length + width);
    return `The perimeter of the rectangle if length is: ${length},\nand width is: ${width}\nthe perimeter is: ${perimeter}`;
}

console.log(perimeterOfRectangle(5, 15));

// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
console.log("--- Ex 6 ---");

const volumeOfRectPrism = (length, width, height) =>{
    let volume = length * width * height;
    console.log(`Th vlume is: ${volume}`);
}

volumeOfRectPrism(5, 8, 10);

// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle.
console.log("--- Ex 7 ---");

const areaOfCircle = r => {
    let area = Math.PI * r * r;
    console.log(`The area of circle is: ${area}`);
}

areaOfCircle(15);

// 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle.
console.log("--- Ex 8 ---");

const circumOfCircle = r => {
    let circumference = 2 * Math.PI * r;
    console.log(`The circumference is: ${circumference}`);
}

circumOfCircle(20);

// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
console.log("--- Ex 9 ---");

const densityOfSubstance = (mass, volume) => {
    let density = mass / volume;
    console.log(`Mass: ${mass} ÷ Volume: ${volume} = Density: ${density}`);
}

densityOfSubstance(12, 20);

// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
console.log("--- Ex 10 ---");

const calculateSpeed = (distance, time) => {
    let speed = distance / time;
    console.log(`${speed}`);
}

calculateSpeed(12, 0.5);

// 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
console.log("--- Ex 11 ---");

const calculatedSubstance = (mass, gravity) => {
    let weight = mass * gravity;
    console.log(`The mass ${mass} and gravity ${gravity} have a weight of ${weight}`);
}

calculatedSubstance(15, 22);

// 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
console.log("--- Ex 12 ---");

const convertCelsiusToFahrenheit = c => {
    let f = (c * 9 / 5) + 32;
    console.log(`${c}°C are ${f}°F `);
}

convertCelsiusToFahrenheit(15);

// 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
console.log("--- Ex 13 ---");

/* 
The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more
*/

const bmiCalculator = (height, weight) => {
    let bmi = weight / (height * height);

    if(bmi < 18.5){
        console.log(`${bmi}kg, the person is Underweight`);
    } else if(bmi > 18.5 && bmi < 24.9) {
        console.log(`${bmi}kg the person is Normal weight`);
    } else if(bmi > 25 && bmi < 29.9){
        console.log(`${bmi}kg the person is Overweight`);
    } else {
        console.log(`${bmi}kg the person is Obese`);
    }
}

bmiCalculator(1.80, 82);

// 14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
console.log("--- Ex 14 ---");

const checkSeason = season => {
    switch (season){
        case "December":
        case "January":
        case "February":
            console.log("Winter");
            break;
        case "March":
        case "April":
        case "May":
            console.log("Spring");
            break;
        case "June":
        case "Jully":
        case "August":
            console.log("Summer");
            break
        case "September":    
        case "October":    
        case "November":
            console.log("Autumn / Fall");
            break;
        default:
            console.log("Misspelled or not a season");
    }
}

checkSeason("January");
checkSeason("March");
checkSeason("September");
checkSeason("December");
checkSeason("Yes");

// 15.Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
console.log("--- Ex 15 ---");

const returnMax = (val1, val2, val3) => {
    if(val1 > val2 && val1 > val3){
        console.log(`${val1}`);
    } else if (val2 > val1 && val2 > val3){
        console.log(`${val2}`);
    }else if (val3 > val1 && val3 > val2){
        console.log(`${val3}`);
    }
}

returnMax(30, 25, 15)