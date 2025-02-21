const {Shape} = require('./Shape');

class Rectangle extends Shape {
    side1;
    side2;

    constructor(name, side1, side2) {
        super(name);
        this.side1 = side1;
        this.side2 = side2;
    }

    get getArea() {
        return this.side1 * this.side2;
    }

    get isSquare() {
        return this.side1 === this.side2;
    }
}

module.exports = {Rectangle};