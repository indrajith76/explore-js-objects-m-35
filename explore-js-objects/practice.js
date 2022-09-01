/* const bottle = { color: "yellow", price: 50, isCleaned: true, capacity: 1 };

const keys = Object.keys(bottle);
const values = Object.values(bottle);
const pair = Object.entries(bottle);
// Object.seal(bottle);
// Object.freeze(bottle);
delete bottle.isCleaned; // delete property after seal()
bottle.color = 'green'; // update value after seal()
bottle.height = 12; // create new property after seal()
// console.log(bottle);

class Car {
    name;
    date;
    constructor (name, date) {
        this.name = name;
        this.date = date;
    }
    message () {
        console.log(`${this.name} car is so fast. It's manufacture date is ${this.date}`);
    }
}

const tesla = new Car('Tesla', '12-12-21');
tesla.message(); */