// --------- Level 3 ---------
console.log("------ Level 3 ------");

// Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.
/*
The year color is changing every 1 second
The date and time background color is changing every on seconds
Completed challenge has background green
Ongoing challenge has background yellow
Coming challenges have background red
*/

const year = document.querySelector('strong');

// ------ Change Year color ------
function randomColor() {
    let hex = '#';
    let colorsHex = "0123456789ABCDEF";

    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * colorsHex.length);
        hex += colorsHex.charAt(index);
    }

    return year.style.color = hex
}

setInterval(randomColor, 1000);

// ------ Date is missing so I made one of my own ------
const date = document.querySelector(".date");

const displayDate = () => {
    let d = new Date();
    const displayCompleteDate = () => {
        let day = d.getDate()
        let month = d.getMonth();
        let year = d.getFullYear()
        let hour = d.getHours();
        let min = d.getMinutes();
        let sec = d.getSeconds();
    
        month = month < 10 ? `0${d.getMonth()}` : `${d.getMonth()}`;
        day = day < 10 ? `0${d.getDate()}` : `${d.getDate()}`;
        hour = hour < 10 ? `0${d.getHours()}` : `${d.getHours()}`;
        min = min < 10 ? `0${d.getMinutes()}` : `${d.getMinutes()}`;
        sec = sec < 10 ? `0${d.getSeconds()}` : `${d.getSeconds()}`;
    
        return `${day}/${month}/${year} ${hour}:${min}:${sec}`

    }
    return date.innerHTML = displayCompleteDate()
}

setInterval(displayDate, 1000);

// ------ Change date background color ------

function randomBkColor() {
    let hex = '#';
    let colorsHex = "0123456789ABCDEF";

    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * colorsHex.length);
        hex += colorsHex.charAt(index);
    }

    return date.style.background = hex
}

setInterval(randomBkColor, 1000);
