class Circle{
     #PI = 3.14;
    constructor(radius) {
        this.radius = radius;
    }
    
    getArea() {
        return this.#PI * this.radius * this.radius;
    }
    
    getCircumference() {
        return 2 * this.#PI * this.radius;
    }

}

const circle1 = new Circle(5);
// Circle.#PI = 2;
console.log(circle1.getArea()); // 78.53981633974483