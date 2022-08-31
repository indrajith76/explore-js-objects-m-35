// 1. create object using object literals (Most importent)
const player = {};
player.name = 'Nirob'; // 'Nirob' is a properties
player.specialty = 'batsman';
player.bat = function() {  // bat is a method
    console.log('swing your bat');
}
// console.log(player);
// player.bat();

const student = {
    name: 'Pandey', 
    job:'Programmer',
    ball: function() {
        console.log('Throw the ball');
    },
    salary: 12000
}

// 2. object constructor
const person = new Object(); // it's also work without 'new'
// console.log(person);

// 3. object create method
// const item = Object.create(null);
const atel = Object.create(student);
// console.log(atel.name);


// 4. Class (Most importent)
/*
// Program - 1
class Person {
    name = 'abul';
    address = 'soder ghat';
    constructor(age){
        this.age = age;
    }
} 

const person1 = new Person(43);
console.log(person1);
*/

/* // Program - 2
class Student {
    name;
    roll;
    cls;
    constructor(name, roll, cls){
        this.name = name;
        this.roll = roll;
        this.cls = cls;
    }
}
const student1 = new Student('Indrajith', 602, 'Cmt-8');
console.log(student1); */



// 5. Function <-- aita akhon use hoy nah after ES6
function Car(model, price) {
    this.model = model;
    this.price = price;
}

// const tesla = new Car('elon', 32);
// console.log(tesla);
