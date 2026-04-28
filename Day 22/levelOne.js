// --------- Level 1 ---------
console.log("------ Level 1 ------");

// Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
/*Even numbers background is green
Odd numbers background is yellow
Prime numbers background is red*/
let nums = document.createElement("div");
document.body.appendChild(nums);

nums.className = "numbers";
nums.style.display = "flex";
nums.style.flexWrap = "wrap";
nums.style.width = "35%";

function isPrime(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

for (let i = 0; i <= 101; i++) {
    let number = document.createElement("p");

    number.textContent = i;
    number.style.fontSize = "24px";
    number.style.border = "2px solid white";
    number.style.padding = "10px";
    number.style.width = "80px";
    number.style.textAlign = "center";

    if (isPrime(i)) {
        number.style.background = "red";
    } else if (i % 2 === 0) {
        number.style.background = "green";
    } else {
        number.style.background = "yellow";
    }


    nums.appendChild(number);
}
