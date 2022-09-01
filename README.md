# Mastering in JS Object
## 🎯 Topic-1 : Ways to create Object
### 1. Object literal syntax
<pre>
    const person = {
        firstName: "John",
        lastName: "Doe"
    }
</pre>
### 2. Object constructor
<pre>
    const person1 = new Object();

    // Adding the properties on person1 object
    person1.firstName = "John";
    person1.lastName = "doe";
</pre>

### 3. Constructor Function
<pre>function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const Student1 = new Student('Wiliam', 'Gomes');
const Student2 = new Student('Mithila', 'Roy');
</pre>

### 4. Es6 classes (Syntactic sugar)
It's called Syntactic sugar. Because it's internally worked using functions.
<pre>class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person('John', 'Doe');
const person2 = new Person('Jane', 'Doe');
</pre>

### 5. Object.create()
<pre>
    const person1 = {
        name: "John Doe"
    }
    const person2 = Object.create(person1);
    console.log(person2.name);
    // output = John Doe
</pre>

## 🎯 Topic-2 : Object method property
### 1. Object.key() method :
Object.key() মেথড ব্যবহার করে bottle Object এর সকল property গুলোকে একটি Array তে প্রিন্ট করানো যায়।
<pre>
const bottle = { color: "yellow", price: 50, isCleaned: true, capacity: 1 };
const keys = Object.keys(bottle);
console.log(keys);
// output = [ 'color', 'price', 'isCleaned', 'capacity' ]
</pre>

### 2. Object.values() method :
Object.values() মেথড ব্যবহার করে bottle Object এর সকল value গুলোকে একটি Array তে প্রিন্ট করানো যায়।
<pre>
const bottle = { color: "yellow", price: 50, isCleaned: true, capacity: 1 };
const values = Object.values(bottle);
console.log(values);
// output = [ 'yellow', 50, true, 1 ]
</pre>

### 3. Object.entries() method :
Object.entries() মেথড ব্যবহার এর মাধ্যমে Object কে two Dimesion ভাবে Array তে প্রিন্ট করানো যায়।
<pre>
const bottle = { color: "yellow", price: 50, isCleaned: true, capacity: 1 };
const pair = Object.entries(bottle);
console.log(pair);

// output:
[ ["color", "yellow"], ["price", 50], ["isCleaned", true], ["capacity", 1],]
</pre>