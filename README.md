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
### 1. Object.keys() method :
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
🔳 Array এর ভিতর Array থাকাকে Two Dimensional Array বলা হয়।
### 4. Way of delete Object property :
Object এর কোন property কে delete করার জন্য এ delete অপারেটর ব্যবহার করা হয়।<br>
Syntax :
<pre>
    delete objectName.objectPropertyName;
</pre>
বিস্তারিত - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete 

### 5. Object.seal() method :
Object.seal() method এপ্লাই করলে Object এর property delete ও নতুন property create করা যাবে নাহ্। তবে Object এর property এর value update করা যাবে।
![image](explore-js-objects/img/seal.JPG) <br>
Example :
<pre>
const bottle = { color: "yellow", price: 50, isCleaned: true, capacity: 1 };

console.log(bottle);

Object.seal(bottle); // seal method
delete bottle.isCleaned; // delete property
bottle.price = 200; // update property value
bottle.height = 12;  // add new property

console.log(bottle);
</pre>

### 6. Object.freeze() method :
Object.freeze() method এপ্লাই করলে Object কে শুধু Read করা যায়। তবে Object এর property delete, নতুন property create ও property value update করা যাবে নাহ্।
![image](explore-js-objects/img/freeze.JPG)
Example :
<pre>
const bottle = { color: "yellow", price: 50, isCleaned: true, capacity: 1 };

console.log(bottle);

Object.freeze(bottle); // freeze method
delete bottle.isCleaned; // delete property
bottle.price = 200; // update property value
bottle.height = 12;  // add new property

console.log(bottle);
</pre>
