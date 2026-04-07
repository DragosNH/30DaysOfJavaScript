// ------ Level 2 ------
console.log("------ Level 2 ------");

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

// 1. Find the person who has many skills in the users object.
console.log("--- Ex 1 ---");

const findManySkills = () => {
  let maxSkills = 0;
  let bestUser = "";

  const names = Object.keys(users);

  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    let skillCount = users[name].skills.length;

    if (skillCount > maxSkills) {
      maxSkills = skillCount;
      bestUser = name;
    }
  }

  console.log(bestUser);
}

findManySkills();

// 2. Count logged in users, count users having greater than equal to 50 points from the following object.
console.log("--- Ex 2 ---");

const mostPoints = () => {
  const names = Object.keys(users);

  let usersWithPoints = [];
  let loggedInCount = 0;

  for (let i = 0; i < names.length; i++) {
    let name = names[i];

    if (users[name].isLoggedIn === true) {
      loggedInCount++;
    }

    if (users[name].points >= 50) {
      usersWithPoints.push(name);
    }
  }

  console.log("Logged in users:", loggedInCount);
  console.log("Users with >= 50 points:", usersWithPoints);
}
mostPoints();