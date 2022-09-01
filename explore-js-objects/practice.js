const bottle = { color: "yellow", price: 50, isCleaned: true, capacity: 1 };

const keys = Object.keys(bottle);
const values = Object.values(bottle);
const pair = Object.entries(bottle);
// Object.seal(bottle);
Object.freeze(bottle);
delete bottle.isCleaned; // delete property after seal()
bottle.color = 'green'; // update value after seal()
bottle.height = 12; // create new property after seal()
console.log(bottle);