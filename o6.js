class Person{
    constructor(fname, lname, age){
        this.fname = fname;
        this.lname = lname;
        if (age <= 0) {
            throw new Error("Age cannot be negative");
        }
        this._age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.fname} ${this.lname} and I am ${this.age} years old.`);
    }
    getFullName() {
        return `${this.fname} ${this.lname}`;
        }

    set age(value) {
        if (value <= 0) {
            throw new Error("Age must be greater than 0");
        }
        this._age = value;
    }
}

const John = new Person('John', 'Doe', 30);
John.age = 0; // Update age
John.greet(); // Output: Hello, my name is John Doe and I am 30 years old.
