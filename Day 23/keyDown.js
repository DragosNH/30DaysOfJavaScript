// Generating the keyboard code code using even listener.

const container = document.createElement("div");

const theKey = document.createElement("p");
theKey.style.fontFamily = "Helvetica";
theKey.style.color = "green";
theKey.style.fontSize = "2em";
theKey.style.border = "3px solid white";
theKey.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
theKey.style.width = "350px";

const theKeyCode = document.createElement("p");
theKeyCode.style.fontFamily = "Helvetica";
theKeyCode.style.color = "green";
theKeyCode.style.fontSize = "2em";
theKeyCode.style.border = "3px solid white";
theKeyCode.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
theKeyCode.style.width = "150px";


let theText = document.createElement("p");
theText.innerHTML = "You pressed ";


document.addEventListener('keydown', function (event) {
    theKey.innerHTML = theText.innerHTML + event.key;
    theKeyCode.innerHTML = event.keyCode;

});

document.body.appendChild(container);
container.appendChild(theKey);
container.appendChild(theKeyCode);