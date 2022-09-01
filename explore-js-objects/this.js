// console.log(this);

const kodomAli = {
    name : 'Kodom Ali',
    money : 5000,
    study : 'Math',
    subjects : ['calculas', 'algebra', 'geometry'],
    exam : function () {
        console.log(this);
        return this.name + ' is participating in an exam.';
    },
    examArrow: () => {
        console.log(this);
    },
    examNested: () => {
        const arrow = () => {
            console.log(this);
        }
        arrow();
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

kodomAli.exam(); // dot dia jei method ta ke call korbo seiter left side a jeita thakbe sei tar execution context. ar dot ar left side a jodi kisu na thake seita hobe window object (global object)

const badamAli = {
    name: 'Kacha badam',
    money: 8000
}

badamAli.exam = kodomAli.exam;
badamAli.exam()

function clickHandler() {
    console.log('inside click handler',this);
}

document.getElementById('btn-click2').addEventListener('click', function(){
    console.log(this);
})