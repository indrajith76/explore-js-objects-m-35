const bottle = { color: "yellow", price: 50, isCleaned: true, capacity: 1 };
const keys = Object.keys(bottle);
// console.log(keys);  // show all property of bottle Object in a array
const values = Object.values(bottle);
console.log(values);  // show all value of the object in a array
// const pair = Object.entries(bottle);
// console.log(pair);
// const twoDimesion = [ ["color", "yellow"], ["price", 50], ["isCleaned", true], ["capacity", 1], ];

console.log(bottle);
// Object.seal(bottle); // it's used for stop working process of delete. after using this you can change the value of object properties and you can't add new properties in object.
Object.freeze(bottle); // it's used for stop update and delete working process in object 
delete bottle.isCleaned; // it's used for delete object property
bottle.price = 200; // if you are used Object.seal() than you can change the value of object properties.
bottle.height = 12; // if you used Object.seal() then you can't add new properties in object.
console.log(bottle);
