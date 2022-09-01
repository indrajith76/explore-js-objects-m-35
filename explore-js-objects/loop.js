const numbers = [12, 34, 43, 54, 5, 6, 8];
/* for (const number of numbers) {
    console.log(number);
} */

// 1. for of can not used with objects
const bottle = { color: "yellow", price: 50, isCleaned: true, capacity: 1 }


// first option to loop through an object
const keys = Object.keys(bottle);
/* 
3 Ways to read object properties
bottle.color
bottle['color']
bottle[key]
*/
for (const key of keys) { // not usefull way
    // console.log(key, bottle[key]);
}

// for in loop
for(const key in bottle) { // usefull way
    const value = bottle[key];
    // console.log(key, value);
}

// advanced 
const pair = Object.entries(bottle);
// console.log(pair);
for (const [key, value] of Object.entries(bottle)) {
    // console.log(key, value);
}