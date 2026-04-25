// --------- Level 1 ---------
console.log("------ Level 1 ------");

// Create a closure which has one inner function.

function backgroundColor() {
    let defaultColor = "2f2f2f";

    function randomColor() {
        let hex = '#';
        let colorsHex = "0123456789ABCDEF";

        for (let i = 0; i < defaultColor.length; i++) {
            let index = Math.floor(Math.random() * colorsHex.length);
            hex += colorsHex.charAt(index);
        }

        return hex
    }

    return randomColor();
}

document.body.style.backgroundColor = backgroundColor();

let button = document.createElement("button");
button.innerText = "Change color"
document.body.appendChild(button)

button.addEventListener("click", () => {
    document.body.style.backgroundColor = backgroundColor();
})

// I had a little fun....