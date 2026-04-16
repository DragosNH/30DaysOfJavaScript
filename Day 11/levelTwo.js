// --------- Level 2 ---------
console.log("------ Level 2 ------");

const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

// 1. Iterate through the users array and get all the keys of the object using destructuring.
console.log("--- Ex 1 ---");

for(const{name, scores, skills, age} of users){
    console.log(name, scores, skills, age);   
}

// 2. Find the persons who have less than two skills.
console.log("--- Ex 2 ---");

for(const{name, scores, skills, age} of users){
    if(skills.length < 2) {
        console.log(name, scores, skills, age);   
    }
}