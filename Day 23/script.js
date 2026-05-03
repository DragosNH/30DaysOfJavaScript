// Generating numbers and marking evens, odds and prime numbers with three different colors.

// ------ Container ------
const container = document.createElement("div");
container.classList = "container";

// ------ Input bar ------
const inputBar = document.createElement('input');
inputBar.type = "number";
inputBar.name = "number";
inputBar.placeholder = "Generate more numbers...";
inputBar.style.width = "400px"
inputBar.style.border = "1px solid green";
inputBar.style.padding = "5px";

// ------ Input button ------
const inputBtn = document.createElement('input');
inputBtn.type = "submit";
inputBtn.value = "Generate numbers";
inputBtn.name = "number";
inputBtn.style.background = "green";
inputBtn.style.color = "white";
inputBtn.style.border = "1px solid green";
inputBtn.style.padding = "5px";
inputBtn.style.marginLeft = "10px";

// ------ Div ------
const numContainer = document.createElement("div");
numContainer.classList.add("numContainer");
numContainer.style.display = "flex";
numContainer.style.flexWrap = "wrap";

// Prime checker
function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }

    return true;
}

// Button event
inputBtn.addEventListener("click", () => {
    const val = Number(inputBar.value);

    numContainer.innerHTML = "";
    for (let i = 1; i <= val; i++) {
        const number = document.createElement("p");
        number.textContent = i;

        number.style.padding = "10px";
        number.style.margin = "5px";
        number.style.width = "50px";
        number.style.textAlign = "center";

        if (isPrime(i)) {
            number.style.background = "red";
        } else if (i % 2 === 0) {
            number.style.background = "green";
        } else {
            number.style.background = "yellow";
        }

        numContainer.appendChild(number);
    }
});

// ------ Append elements ------
document.body.appendChild(container);
document.body.appendChild(numContainer);
container.appendChild(inputBar);
container.appendChild(inputBtn);