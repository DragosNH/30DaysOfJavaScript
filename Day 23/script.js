// Generating numbers and marking evens, odds and prime numbers with three different colors.

const container = document.createElement("div");
container.classList = "container";

const inputBar = document.createElement('input');
inputBar.type = "number";
inputBar.name = "number";

const inputBtn = document.createElement('input');
inputBtn.type = "submit";
inputBtn.value = "Generate numbers";
inputBtn.name = "number";

document.body.appendChild(container);
container.appendChild(inputBar);
container.appendChild(inputBtn);