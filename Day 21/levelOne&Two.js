// --------- Level 1 ---------
console.log("------ Level 1 ------");

// 1. Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name.
console.log("--- Ex 1 ---");

const firstParagraph = document.querySelector('p');
console.log(firstParagraph);

// 2. Get each of the the paragraph using document.querySelector('#id') and by their id.
console.log("--- Ex 2 ---");
const firstP = document.querySelector("#first");
const secondP = document.querySelector("#second");
const thirdP = document.querySelector("#third");
const forurthP = document.querySelector("#fourth");

console.log(firstP);
console.log(secondP);
console.log(thirdP);
console.log(firstP);

// 3. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name.
console.log("--- Ex 3 ---");

const allPars = document.querySelectorAll('p');
console.log(allPars);

// 4. Loop through the nodeList and get the text content of each paragraph.
console.log("--- Ex 4 ---");

for(let i = 0; i < allPars.length; i++ ){
    console.log(allPars[i]);
}

// 5. Set a text content to paragraph the fourth paragraph,Fourth Paragraph.
console.log("--- Ex 5 ---");

allPars[3].innerText = "Paragraph changed";

// 6. Set id and class attribute for all the paragraphs using different attribute setting methods.
firstP.classList.add('class1');
secondP.classList.add('class1');
thirdP.classList.add('class1');

firstP.id = "id1";
secondP.id = "id2";
thirdP.id = "id3";
forurthP.id = "id4";

console.log(firstP, secondP, thirdP, forurthP);


// --------- Level 2 ---------
console.log("------ Level 2 ------");

// 1.Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family).
console.log("--- Ex 1 ---");

for(let i = 0; i < allPars.length; i++){
    allPars[i].style.color = "#f5f5f5";
    allPars[i].style.background = "#3f3dddff";
    allPars[i].style.border = "5px dotted green";
    allPars[i].style.fontSize = "2em";
    allPars[i].style.fontFamily = "Helvetica";
}

// 2. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color.

for(let i = 0; i < allPars.length; i++){
    if(i % 2 === 0){
        allPars[i].style.color = "darkgreen";
    } else {
        allPars[i].style.color = "crimson";
    }
}

// 3. Set text content, id and class to each paragraph
for(let i = 0; i < allPars.length; i++){
    allPars[i].textContent = `Paragraph n°${i+1}`
    allPars[i].id = `id${i+1}`
    allPars[i].classList.add(`id${i+2}`) 
}