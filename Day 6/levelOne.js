// --- Level 1 ---
console.log("------ Level 1 ------");

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop.
console.log("--- Ex 1 ---");
console.log("- For -");
for(let i = 0; i <= 10; i++){
    console.log(i);
}

console.log("- While -");
let j = 0;
while(j <= 10){
    console.log(j++);
}

// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop.
console.log("--- Ex 2 ---");
console.log("- For -");
for(let i = 10; i >= 0; i--){
    console.log(i);
}

console.log("- While -");
j = 10;
while(j >= 0){
    console.log(j--);
}

// 3. Iterate 0 to n using for loop.
console.log("--- Ex 3 ---");
const numbers = [0, 1, 2, 3, 4, 5]
for (n in numbers){
    console.log(n);
}

// 4. Write a loop that makes the following pattern using console.log():
/* 
    #
    ##
    ###
    ####
    #####
    ######
    #######
*/

console.log("--- Ex 4 ---");
for (let i = "*"; i.length <= 8; i+="*"){
    console.log(i);
}

// 5. Use loop to print the following pattern:
/* 
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
*/

console.log("--- Ex 6 ---");
for (let i = 0; i <= 10; i++){
    console.log(`${i} * ${i} = ${i * i}`);
}

// 6. Using loop print the following pattern:
/* 
 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
*/
console.log("--- Ex 6 ---");
console.log("i   i^2   i^3");

for(let i = 0; i<=10; i++){
    console.log(`${i}   ${i**2}  ${i**3}`);
}

// 7. Use for loop to iterate from 0 to 100 and print only even numbers
console.log("--- Ex 7 ---");

for (let i = 0; i <= 100; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers.
console.log("--- Ex 8 ---");
for (let i = 0; i <= 100; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}

// 9. Use for loop to iterate from 0 to 100 and print only prime numbers.

// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
console.log("--- Ex 10 ---");

let sum = 0;

for (let i = 0; i <= 100; i++) {
    sum += i;
}

console.log(`The sum of all numbers from 0 to 100 is ${sum}`);