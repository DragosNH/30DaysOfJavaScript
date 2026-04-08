// ------ Level 3 ------
console.log("--- Level 3 ---");

// 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
    firstName: "John",
    lastName: "Doe",
    incomes: ["Web developpement", "Graphic design"],
    expenses: ["Food", "Electricity", "Wather"],
    properties: ["House", "Car", "Garage"],
    totalIncome: 2000,
    totalExpense: 1800,
    accountInfo: "Green",
    addIncome: 1000,
    addExpense: 300,
    accountBalance: 50000
};

// 2. **** Questions:2, 3 and 4 are based on the following two arrays:users and products ();

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]

// Imagine you are getting the above users collection from a MongoDB database. 
// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
console.log("--- 2 ----");
console.log("- a -");


const signUp = (id, username, email, password, createdAt, isLoggedIn) => {

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            console.log(`${username} already exists, please try another one!`);
            users.pop();
        }
    }

    const newUsers = {
        _id: id,
        username: username,
        email: email,
        password: password,
        createdAt: createdAt,
        isLoggedIn: isLoggedIn
    }

    users.push(newUsers);

    // normally is -> return users;
    console.log(users);
};


signUp("bb8", "Bob", "bob@bob.com", "123456", '08/01/2020 10:00 AM', true);
signUp("bb8", "Thomas", "bob@bob.com", "123456", '08/01/2020 10:00 AM', true);

// b. Create a function called signIn which allows user to sign in to the application
console.log("- b -");

const signIn = (username) => {

    for (let i = 0; i < users.length; i++) {

        if (users[i].username === username) {

            if (users[i].isLoggedIn) {
                console.log(`${username} is already logged in`);
            } else {
                users[i].isLoggedIn = true;
                console.log(`${username} is now online`);
            }

            return;
        }
    }

    console.log("User not found");
}

signIn('Martha');

// 3. The products array has three elements and each of them has six properties. 
console.log("--- 3 ----");
// a. Create a function called rateProduct which rates the product 
console.log("- a -");

const rateProduct = (productId, userId, rate) => {

    let found = false;

    for (let i = 0; i < products.length; i++) {

        if (products[i]._id === productId) {
            products[i].ratings.push({ userId: userId, rate: rate });
            found = true;
            console.log("Product rated successfully");
            break;
        }
    }

    if (!found) {
        console.log("This product does not exist");
    }
};

rateProduct('aegfal', 'fg12cy', 5);
console.log(products);

// b. Create a function called averageRating which calculate the average rating of a product.
console.log("- b -");

const averageRating = (productId) => {

    const product = products.find(p => p._id === productId);

    if (!product) {
        console.log("Product not found");
        return;
    }

    if (product.ratings.length === 0) {
        console.log("No ratings yet");
        return 0;
    }

    let total = 0;

    for (let i = 0; i < product.ratings.length; i++) {
        total += product.ratings[i].rate;
    }

    const average = total / product.ratings.length;

    console.log(`Average rating: ${average}`);
    return average;
};

averageRating('eedfcf');