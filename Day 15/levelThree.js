// --------- Level 3 ---------
console.log("------ Level 3 ------");

// 1. Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.

class Statistics {
    constructor(stats) {
        this.stats = stats;
    }

    count() {
        return this.stats.length;
    }

    sum() {
        return this.stats.reduce((sum, val) => sum + Math.round(val))
    }

    min() {
        return this.stats.reduce((min, val) => { min = min < val ? min : val; return min })
    }

    max() {
        return this.stats.reduce((max, val) => { max = max > val ? max : val; return max })
    }

    range() {
        return Math.abs(this.max() - this.min())
    }

    median() {
        let sorted = this.stats.sort((a, b) => a - b);
        let len = sorted.length;
        if (len % 2 === 0) {
            return (sorted[parseInt(len / 2)] + sorted[parseInt(len / 2) - 1]);
        }
        else return (sorted[parseInt(len / 2)]);
    }

    mode() {
        return Object.entries(this.stats.reduce((obj, cur) => {
            obj[cur] = (obj[cur] || 0) + 1;
            return obj;
        }, {})).sort((a, b) => a[1] - b[1]).pop();
    }

}

let ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

let statistics = new Statistics(ages);
console.log('Count:', statistics.count());
console.log('Sum: ', statistics.sum());
console.log('Min: ', statistics.min());
console.log('Max: ', statistics.max());
console.log('Range: ', statistics.range());
console.log('Median: ', statistics.median());
console.log('Mode: ', statistics.mode());

// 2. Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

class PersonAccount{
    constructor(firstName = "John",
        lastName = "Doe",
        income = 1500,
        expenses = 1300,
        properties = ["Appartment"],
    ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.income = income;
        this.expenses = expenses;
        this.properties = properties;
    }

    get getInfo(){
        return `Name: ${this.firstName + " " + this.lastName}\nIncome: ${this.income}\nExpenses: ${this.expenses}\nProperties: ${this.properties.join(", ")}`
    }


}

let billy = new PersonAccount("Wiliam", "McCarty", 2000, 1800, ["House", "Car", "Garage"])
console.log(billy.getInfo);
