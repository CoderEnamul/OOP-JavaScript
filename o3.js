class Account{
    constructor(openingBalance){
        this.openingBalance = openingBalance;
        this.minBalance = 10;
    }

    get balance() {
        return this.openingBlacnce;
    }

    deposit(amount) {
        this.openingBlacnce += amount;
    }

    withdraw(amount) {
        if (amount > this.openingBalance) {
            if (this.openingBalance - amount < this.minBalance) {
                console.log("Insufficient balance to maintain minimum balance");
            }
            console.log("Insufficient balance");
        }

        this.openingBalance -= amount;
        return undefined;
    }


}


const jonsAccount = new Account(1000);
const hasinsAccount = new Account(2000);
const mahmudsAccount = new Account(3000);
console.log(jonsAccount.balance); // 1000
console.log(jonsAccount.withdraw(2000)); // undefined
console.log(jonsAccount.balance); // 800

// console.log(hasinsAccount.balance); // 2000
// console.log(mahmudsAccount.balance); // 3000
