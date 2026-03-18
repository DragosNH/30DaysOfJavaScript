// --- Level 3 ---

// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05

let y = new Date().getFullYear();
let m = new Date().getMonth() + 1;
let d = new Date().getDate();
let h = new Date().getHours();
let min = new Date().getMinutes();

// console.log(`${currentYear}/${currentMonth + 1}/${currentDay} ${currentHour}:${currentMinute}`);
// console.log(`${currentDay}/${currentMonth + 1}/${currentYear} ${currentHour}:${currentMinute}`);

m <= 9 ? 
console.log(`${y}/0${m}/${d} ${h}:${m}`) 
: d <= 9 
? console.log(`${y}/${m}/0${d} ${h}:${m}`)
: d <= 9 &&  m <= 9
? console.log(`${y}/0${m}/0${d} ${h}:${m}`):
console.log(`${y}/${m}/${d} ${h}:${m}`);
