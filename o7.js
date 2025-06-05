class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get fullName() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

}

const john = new Person('John', 30);
john.fullName; // Output: Hello, my name is John and I am 30 years old.
console.log(john);
