String.prototype.reverse = function() {
  return this.split('').reverse().join('');
}

const name = "John Doe";
console.log(name.reverse()); // "eoD nhoJ"

const courseName = "MERN Batch 04";
console.log(courseName.reverse()); // "40 hctaB NREM"

Array.prototype.sum = function() {
  return this.reduce((acc, curr) => acc + curr, 0);
}

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.sum()); // 15

Array.prototype.evenNumbers = function() {
  return this.filter(num => num % 2 === 0);
}

const mixedNumbers = [1, 2, 3, 4, 5, 6];
console.log(mixedNumbers.evenNumbers()); // [2, 4, 6]