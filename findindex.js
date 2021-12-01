//findlndex
var products = [
    { id: 1, productName: 'Samsung TV', price: 800, brand: "Sumsung" },
    { id: 2, productName: 'Apple iPad', price: 774, brand: "Apple" },
    { id: 3, productName: 'LG Monitor', price: 1200, brand: "lG" },
    { id: 4, productName: 'Apple iPad', price: 3500, brand: "Apple" },
    { id: 5, productName: 'Apple iPhone', price: 2200, brand: "Apple" },
];

var firstExpensiveProductindex = products.findindex((p) => {
            return p.price >= 2000;
        };

        console.log(firstExpensiveProductindex); //3