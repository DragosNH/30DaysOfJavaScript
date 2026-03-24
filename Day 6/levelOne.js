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

for (let i = 0; i <= 10; i++){
    console.log(`${i} * ${i} = ${i * i}`);
}