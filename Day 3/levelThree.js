// --- Level 3 ---

// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05

let y = new Date().getFullYear();
let m = new Date().getMonth() + 1;
m = m <= 9 ? `0${m}` : `${m}`;
let d = new Date().getDate();
d = d <= 9 ? `0${d}` : `${d}`;
let h = new Date().getHours();
h = h <= 9 ? `0${h}` : `${h}`;
let min = new Date().getMinutes();
min = min <= 9 ? `0${min}` : `${min}`;

console.log(`--- Level 3 ---`) 
console.log(`${y}/${m}/${d} ${h}:${m}`) 