const person = {
  name: 'John',
  age: 30,
  greet: function() {
    console.log('Hello, my name is ' + this.name);
  }
};

const person2 = {
  name: 'Jane',
    age: 25,
    greet: function() {
        console.log('Hello, my name is ' + this.name);
        }
};

console.log(person.name); // Output: John
console.log(person2.age); // Output: 25
