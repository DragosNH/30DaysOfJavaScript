// --------- Level 1 ---------
console.log("------ Level 1 ------");

// 1. Create an Animal class. The class will have name, age, color, legs properties and create different methods.
console.log("--- Ex 1 ---");

class Animal {
    constructor(
        name = "Berry",
        age = 1,
        color = "white",
        legs = 4
    ){
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }
}

const berry = new Animal();
console.log(berry);
const wiliam = new Animal("Wiliam", 3, "black", 4);
console.log(wiliam);
