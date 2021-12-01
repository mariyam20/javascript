// splice-removing elements
var products = [
    { id: 1, productName: 'TV', price: 5000 },
    { id: 2, productName: 'Monitor', price: 1200 },
    { id: 3, productName: 'iPad', price: 2000 },
    { id: 4, productName: 'Phone', price: 1800 },
    // { id: 5, productName: 'ear phone', price: 1700 },
    // { id: 6, productName: 'laptop', price: 1900 },
];

products.splice(1, 1); //(startlndex, noOfElementsToRemove)
console.log(products);

// splice-for inserting element
products.splice(2, 0, { id: 300, productName: "iPhone", price: 1700 }); //(startlndex, noOfElementsRemove, ElementTolnsert)
console.log(products);

// splice-for replacing element
products.splice(3, 1, { id: 400, productName: "Samsung Phone", price: 670 });
console.log(products);