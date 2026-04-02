// ------ Level 2 ------
console.log("------ Level 2 ------");

// 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
console.log("--- Ex 1 ---");

const solveLinEquation = (a,b,c,x,y) => {
    let solution = a * x + b * y + c
    console.log(solution);
}

solveLinEquation(90,22,88,40,26);

// 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
console.log("--- Ex 2 ---");

const solveQuadratic = (a, b, c) => {

    let delta = b * b - 4 * a * c;

    if (delta < 0) {
        return "No real solution";
    }

    if (delta === 0) {
        let x = -b / (2 * a);
        return [x];
    }

    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);

    return [x1, x2];
};


console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}

// 3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
console.log("--- Ex 3 ---");

const printArray = (arr) => {
    for(let i = 0; i < arr.length; i++){
        console.log((arr[i]));
    }
}

let array = [1, 2, 3, 4];

printArray(array);

// 4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
console.log("--- Ex 4 ---");

const showDateTime = () => {
    let day = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();

    // console.log(`0${day}/0${month}/${year} ${hour}:${minute}`);
    if(day <= 9){
        day = `0${day}`;
    }
    if(month <= 9){
        month = `0${month}`
    }
    if (hour <= 9){
        hour = `0${hour}`
    }
    if(minute <= 9){
        minute = `0${minute}`
    }
    
    console.log(`${day}/${month}/${year} ${hour}:${minute}`);

}

showDateTime()

// 5. Declare a function name swapValues. This function swaps value of x to y.
console.log("--- Ex 5 ---");

const swapValues = (x, y) => {
    let z = x;
    x = y;
    y = z;
    console.log(x, y);
}

swapValues(5,10)

// 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
console.log("--- Ex 6 ---");

const reverseArray = arr => {
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        newArr.unshift(arr[i]);
    }
    return newArr;
}

console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']

// 7.Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray
console.log("--- Ex 7 ---");

const capitalizeArray = arr => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        newArr.push(arr[i].toUpperCase());
    }

    console.log(newArr);   
}

capitalizeArray(["a", "b", "c"]);

// 8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item.
console.log("--- Ex 8 ---");

let addedItem = [];
const addItem = item => {
    addedItem.push(item);
    console.log(addedItem);
    
}

addItem("one");
addItem("two");
addItem(1);
addItem(true);

// 9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item.

const removedItemFromArr = ["John", "Bob", "George", "Elon", "Joe"];

const removeItem = index => {
    removedItemFromArr.splice(index, 1);
    console.log(removedItemFromArr);
}

removeItem(3);

// 10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.