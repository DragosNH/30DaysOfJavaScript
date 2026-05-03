// Generating the keyboard code code using even listener.

const title = document.createElement("h1");
const theKeyCode = document.createElement("h2");


document.addEventListener('keydown', function (event) {
    title.innerHTML = event.key;
    theKeyCode.innerHTML = event.keyCode;

});

document.body.appendChild(title);
document.body.appendChild(theKeyCode);