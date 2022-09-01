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


// JavaScript Borrowing Methods
/* // call() method
const nobin = {
    name : 'Nobin Roy',
    category : 'Junior Developer',
    salary : 35000,
    work: function(){
        return `${this.name} is ${this.category} and his work is frontend development.`;
    },
    remainMoney : function(foodCost, otherExpence) {
        this.salary = this.salary - foodCost - otherExpence;
        return `${this.name} has ${this.salary} taka left.`;
    }
}

const jubin = {
    name: 'Jubin Kapur',
    category : 'Intern Developer',
    salary: '10000'
}

const jubinWork = nobin.work.call(jubin);
const jubinRemainMoney = nobin.remainMoney.call(jubin, 5000, 2000);
console.log(jubinWork);
console.log(jubinRemainMoney);  */

/* // apply() method
const nobin = {
    name : 'Nobin Roy',
    category : 'Junior Developer',
    salary : 35000,
    work: function(){
        return `${this.name} is ${this.category} and his work is frontend development.`;
    },
    remainMoney : function(foodCost, otherExpence) {
        this.salary = this.salary - foodCost - otherExpence;
        return `${this.name} has ${this.salary} taka left.`;
    }
}

const jubin = {
    name: 'Jubin Kapur',
    category : 'Intern Developer',
    salary: '10000'
}

const jubinWork = nobin.work.apply(jubin);
const jubinRemainMoney = nobin.remainMoney.apply(jubin, [5000, 2000]);
console.log(jubinWork);
console.log(jubinRemainMoney);  */

/* // bind() method
const nobin = {
    name : 'Nobin Roy',
    category : 'Junior Developer',
    salary : 35000,
    work: function(){
        return `${this.name} is ${this.category} and his work is frontend development.`;
    },
    remainMoney : function(foodCost, otherExpence) {
        this.salary = this.salary - foodCost - otherExpence;
        return `${this.name} has ${this.salary} taka left.`;
    }
}

const jubin = {
    name: 'Jubin Kapur',
    category : 'Intern Developer',
    salary: '10000'
}

const jubinWork = nobin.work.bind(jubin);
const jubinRemainMoney = nobin.remainMoney.bind(jubin);
console.log(jubinWork());
console.log(jubinRemainMoney(5000, 2000));  */
