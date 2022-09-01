// const first = {a: 2};
// const second = {a: 2};
// const third = second; // second and third variable mamory location is same
/* if(first === second) {
    console.log("They are same");
}
else {
    console.log("Different ");
} */

/* if(third === second) {
    console.log("They are same");
}
else {
    console.log("Different ");
} */


// do not use this method to compare object or array
const first = {a: 2, b: 5, c: 7};
const second = {a: 2, c: 7,b: 5};
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);
/* console.log(firstString, secondString);

if(firstString === secondString) {
    console.log("Same");
}
else{
  console.log("Different");  
} */
console.log(firstString);
function compareObject(first, second){
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if(firstKeys.length === secondKeys.length) {
        for (const key of firstKeys) {
            const firstkey = first[key];
            const secondKey = second[key];
            if(firstkey !== secondKey) {
                return false;
            }
            console.log(first[key],second[key]);
        }
        return true;
    }
}

const isSame = compareObject(first, second);
console.log(isSame);