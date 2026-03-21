// ------ Level 3 ------
console.log("--- Level 3 ---");

// 1. Write a program which tells the number of days in a month.
let leapYear = confirm("Is it a leap year?")
let month = prompt("Insert a month:").toLowerCase();
// --- Long Version ---
console.log("--- Ex 1 ---");
console.log("- Long Version of the code -");

switch (month) {
    case "january":
        console.log("January has 31 days.");
        break;
    case "february":
        console.log("February has 28 days.");
        break;
    case "march":
        console.log("March has 31 days.");
        break;
    case "april":
        console.log("April has 30 days.");
        break;
    case "may":
        console.log("May has 31 days.");
        break;
    case "june":
        console.log("June has 30 days.");
        break;
    case "july":
        console.log("July has 31 days.");
        break;
    case "august":
        console.log("August has 31 days.");
        break;
    case "september":
        console.log("September has 30 days.");
        break;
    case "october":
        console.log("October has 31 days.");
        break;
    case "november":
        console.log("November has 30 days.");
        break;
    case "december":
        console.log("December has 31 days.");
        break;
    default:
        console.log("Enter a valid value");
}

console.log("- Short Version of the code -");
// --- Short Version ---
switch (month) {
    // - 31 Days -
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has 31 days.`);
        break;
    // - 30 Days -
    case "april":
    case "june":
    case "september":
    case "november":
        console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has 30 days.`);
        break;
    case "february":
        console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has 28 days.`);
        break;
}

// confirm("Press a button!");
// 2. Write a program which tells the number of days in a month, now consider leap year.
console.log("--- Ex 2 ---");

switch (month) {
    // - 31 Days -
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has 31 days.`);
        break;
    // - 30 Days -
    case "april":
    case "june":
    case "september":
    case "november":
        console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has 30 days.`);
        break;
    case "february":
        case leapYear:
            console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has 29 days.`);
            break;
        case !leapYear:
            console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has 28 days.`);
    default:
        console.log("You must enetr a valid value");
        
}