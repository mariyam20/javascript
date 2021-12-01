// accessing properties from objects in JS
let customer = {
    customerName: "Scott",
    email: "scott@test.com",
    1: "hello"
};
console.log(customer.customerName); //dot notation
console.log(customer["customerName"]); //brackets notation

customer.email = "scott@example.com"; //dot notation
console.log(customer["email"]); //brackets notati
console.log(customer[1]) //brackets notation
console.log(customer);