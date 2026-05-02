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



// ------ Append elements ------
document.body.appendChild(container);
container.appendChild(inputBar);
container.appendChild(inputBtn);