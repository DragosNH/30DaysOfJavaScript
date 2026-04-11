// --------- Level 2 ---------
console.log("------ Level 2 ------");

const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

// 1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback)).
console.log("--- Ex 1 ---");

const totalPrice = products.map(price => price.price).filter(price => price > 0).reduce((acc, value) => acc+value)
console.log(totalPrice);

// 2. 