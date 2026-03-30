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
 