// --------- Level 2 ---------
console.log("------ Level 2 ------");

// Create a closure which has three inner functions.

const basketScore = () => {
    let score = 0;

    const onePointer = () => {
        score++;
        return score;
    }

    const twoPointers = () => {
        score += 2;
        return score;
    }

    const threePointers = () => {
        score += 3;
        return score;
    }

    return{
        one: onePointer(),
        two: twoPointers(),
        three: threePointers()
    }
}

let home = basketScore();
let visitors = basketScore();

console.log(home.one);
console.log(home.two);
console.log(home.three);
