class Person{
    set firstName(value) {
        this._fname = value.toUpperCase();
    }
    get firstName() {
        return this._fname;
    }
    set lastName(value) {
        this._lname = value.toUpperCase();
    }
    get lastName() {
        return this._lname;
    }

    getFullName() {
        return `${this._fname} ${this._lname}`;
    }
}

const john = new Person();
john.firstName = "John";
john.lastName = "Doe";

console.log(john.getFullName()); // "JOHN DOE"
