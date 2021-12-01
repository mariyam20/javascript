// closures

// closure begins
var bankAccount = function() {
        var accountBalance = 1000;
        var somePrivate = function() {

        };
        var deposit = function(depositAmount) {
            accountBalance = accountBalance + depositAmount;
            // return `Account Balance after Deposit: ${accountBalance}`;
        };
        var withdraw = function(withdrawAmount) {

            accountBalance = accountBalance + withdrawAmount;
            // return `Account Balance after Withdraw: ${accountBalance}`;
        };

        var getCurrentBalance = function() {
            return accountBalance;
        }

        return { deposit, withdraw, getCurrentBalance }; //return public methods
    }
    // closure ends

var firstAccount = bankAccount();
var secondAccount = bankAccount();
console.log(`lnitial First Account Balance:${firstAccount.getCurrentBalance()}`); //1000
console.log(`lnitial Second Account Balance: ${secondAccount.getCurrentBalance()}`); //1000

firstAccount.deposit(200);
console.log(`First Account Balance after Deposit:${firstAccount.getCurrentBalance()}`); //1200

secondAccount.deposit(100);
console.log(`Second Account Balance after Deposit:${secondAccount.getCurrentBalance()}`); //1100

firstAccount.withdraw(50);
console.log(`First Account Balance after Withdraw:${firstAccount.getCurrentBalance()}`); //1150

secondAccount.withdraw(300);
console.log(`Second Account Balance after Withdraw:${secondAccount.getCurrentBalance()}`); //800

// firstAccount.accountBalance = 1000000;
// console.log(`Updated Account Balance:${firstAccount.getCurrentBalance()}`); //1250