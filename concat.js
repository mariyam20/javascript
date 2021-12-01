//concat
var expensiveProducts = [
    { id: 1, productName: "TV", price: 5000 },
    { id: 2, productName: "Monitor", price: 1200 }
];

var inexpensiveProducts = [
    { id: 2, productName: "Head phone", price: 84 },
    { id: 2, productName: "Slippers", price: 44 },
    { id: 2, productName: "Book", price: 20 },
];

var allproducts = expensiveProducts.concat(inexpensiveProducts);
console.log(expensiveProducts);
console.log(inexpensiveProducts);
console.log(allproducts);