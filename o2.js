class Person{
    constructor(name, lname){
        this.name = name;
        this.lname = lname;
        
    }
    get fullName() {
        return `${this.name} ${this.lname}`;
    }
}

const person = new Person('John', 'Doe');
const hasin = new Person('Hasin', 'Jahan');
console.log(person.fullName); // Output: John Doe
