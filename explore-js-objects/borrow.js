const kodomAli = {
    name : 'Kodom Ali',
    money : 5000,
    study : 'Math',
    subjects : ['calculas', 'algebra', 'geometry'],
    exam : function () {
        return this.name + ' is participating in an exam.';
    },
    improveExam : function (subject) {
        this.exam();
        return `${this.name} is takeing improvement exam on ${subject}.`;
    },
    treatDey : function (amount, tips) {
        this.money = this.money - amount - tips;
        return this.money;
    }
}

const result = kodomAli.exam();

const badamAli = {
    name: 'Kacha badam',
    money: 8000
}

const result2 = kodomAli.exam.call(badamAli);
// console.log(result2);
const badamMoney = kodomAli.treatDey.call(badamAli, 450, 50);
console.log(badamMoney);
const badamMoney2 = kodomAli.treatDey.apply(badamAli, [1000, 100]); // add parameter value in "[]" Array.
console.log(badamMoney2);

const badamAliTreat = kodomAli.treatDey.bind(badamAli); 
const remaining = badamAliTreat(1000, 100);
console.log(remaining);

/* 
NOTE:
1. call  : call sorasori parameter pass kore
2. apply : apply sorasori parameter pass kore and parameter ar value "[]" Array ar moddhe pass kore.
3. bind  : bind variable ta ke function kore nei, pore variable ta ke pore call kore kaj kora jai.
*/