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