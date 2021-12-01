// includes
var iPhone = { id: 4, productName: 'iPhone', price: 1800 };
var products = [
    { id: 1, productName: 'TV', price: 5000 },
    { id: 2, productName: 'Monitor', price: 1200 },
    { id: 3, productName: 'iPad', price: 2000 },
    iPhone
];

var result = products.includes(iPhone);
console.log(result); //true