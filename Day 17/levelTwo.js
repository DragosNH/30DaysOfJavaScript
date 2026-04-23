// --------- Level 2 ---------
console.log("------ Level 2 ------");

// 1.Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

let student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    skills: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
    country: 'USA...A?'
}

const theStudent = JSON.stringify(student, undefined, 4);
localStorage.getItem('Student', theStudent);
console.log(localStorage);
