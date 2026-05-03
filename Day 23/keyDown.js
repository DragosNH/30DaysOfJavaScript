// Generating the keyboard code code using even listener.

const container = document.createElement("div");

const theKey = document.createElement("p");
theKey.style.fontFamily = "Helvetica";
theKey.style.color = "green"

const theKeyCode = document.createElement("p");
theKeyCode.style.fontFamily = "Helvetica";
theKeyCode.style.color = "green"

let theText = document.createElement("p");
theText.innerHTML = "You pressed "


document.addEventListener('keydown', function (event) {
    theKey.innerHTML = theText.innerHTML + event.key;
    theKeyCode.innerHTML = event.keyCode;

});

document.body.appendChild(container);
container.appendChild(theKey);
container.appendChild(theKeyCode);