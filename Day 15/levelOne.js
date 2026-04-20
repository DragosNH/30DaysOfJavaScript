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

// 2. Create a Dog and Cat child class from the Animal Class.
console.log("--- Ex 2 ---");

class Dog extends Animal{
    constructor(
        name = "Berry",
        age = 1,
        color = "white",
        legs = 4,
        breed = "Beagle"
    ){
        super(name, age, color, legs);
        this.breed = breed;
    }
}

const barcksalot = new Dog("Barksalot", 2, "White and brown", 4, "Beagle");
console.log(barcksalot);

class Cat extends Animal{
    constructor(
        name = "Kitty",
        age = 1,
        color = "white",
        legs = 4,
        breed = "Balinese"
    ){
        super(name, age, color, legs);
        this.breed = breed;
    }
}

const billie = new Cat("Billie", 2, 4, "Exotic Shorthair");
console.log(billie);
