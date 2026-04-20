// --------- Level 2 ---------
console.log("------ Level 2 ------");
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

    get getInfo(){
        console.log(`This dog is: ${this.name}, he breed is: ${this.breed} and he is ${this.age} young`);
    }
}

const barky = new Dog("Barky", 1, "Black", 4, "Affenpinscher");
barky.getInfo