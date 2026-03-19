console.log("------ Level 2 ------");

// 1. Write a code which can give grades to students according to theirs scores:
/*
80-100, A
70-79, B
60-69, C
50-59, D
0-49, F
*/
/*
console.log("--- Ex 1 ---");
let grade = prompt("Enter grade:")

switch (true) {
    case grade > 100:
        console.log("Wrong walue!");
        break;
    case grade > 79:
        console.log("A");
        break;
    case grade <= 79 && grade >= 70:
        console.log("B");
        break;
    case grade <= 69 && grade >= 60:
        console.log("C");
        break;
    case grade <= 59 && grade >= 50:
        console.log("D");
        break;
    default:
        console.log("F");
}
*/

// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is.
/*
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
*/
/*
console.log("--- Ex 2 ---");
let season = prompt("What month is it?");

switch (season) {
    case "September":
    case "October":
    case "November":
        console.log("The season is Autumn");
        break;

    case "December":
    case "January":
    case "February":
        console.log("The season is Winter");
        break;

    case "March":
    case "April":
    case "May":
        console.log("The season is Spring");
        break;

    case "June":
    case "July":
    case "August":
        console.log("The season is Summer");
        break;

    default:
        console.log("Invalid or non existing month entered.");
}
*/

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.
let day = prompt("What day is today?").toLowerCase();

switch(day){
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
        console.log(`${day.charAt(0).toUpperCase() + day.slice(1)} is a working day!`);
        break;

    case "saturday":
    case "sunday":
        console.log(`${day.charAt(0).toUpperCase() + day.slice(1)} is not a working day!`);
        break;

    default:
        console.log("Is not a day of the week! (at least in english...)");
}
