// --------- Level 3 ---------
console.log("------ Level 3 ------");

// Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

const personAccount = () => {
    let firstname = "John";
    let lastName = "Doe";
    let incomes = 100;
    let expenses = 50;
    
    const totalIncome = () => {
        incomes += 10;
        return incomes;
    }

    const totalExpense = () => {
        expenses += 10
        return expenses;
    }

    const accountInfo = () => {
        let info = `First name : ${firstname}\nLast name: ${lastName}\nIncome: ${incomes}\nExpense: ${expenses}`;
        return info;
    }

    const addIncome = () =>{
        incomes += 200;
        return incomes
    }

    const addExpense = () => {
        expenses += 200
        return expenses;
    };

    const accountBalance = () => {
        let balance = incomes - expenses;
        return balance
    }

    return{
        totalIncome: totalIncome(),
        totalExpense: totalExpense(),
        info: accountInfo(),
        addIncome: addIncome(),
        addExpense: addExpense(),
        balance: accountBalance()
    }
}

let person = personAccount();

console.log(person.addIncome);
console.log(person.balance);
