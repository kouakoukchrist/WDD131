// -------------------------------
// ARRAY PRACTICE
// -------------------------------

let pets = ['goldfish', 'dog', 'rhino'];

console.log(pets.length);

pets[3] = 'bunny';
console.log(pets);

pets.push('lizard');
console.log(pets);



// -------------------------------
// forEach EXAMPLE
// -------------------------------

const steps = ['one', 'two', 'three'];

steps.forEach(showSteps);

function showSteps(item) {
    console.log(item);
}



// -------------------------------
// map → PAGE OUTPUT
// -------------------------------

let myList = document.querySelector('#myList');

const stepHTML = steps.map(ListTemplate);

function ListTemplate(item) {
    return `<li>${item}</li>`;
}

myList.innerHTML = stepHTML.join('');



// -------------------------------
// map (GPA)
// -------------------------------

let grades = ['A', 'B', 'C', 'D'];

let gpaPoints = grades.map(convert);

function convert(grade) {
    let points;

    switch (grade) {
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        default:
            points = 0;
    }

    return points;
}

console.log(gpaPoints);



// -------------------------------
// reduce
// -------------------------------

let totalPoints = gpaPoints.reduce(getTotal);

function getTotal(total, item) {
    return total + item;
}

console.log(totalPoints);

let gpaAverage = totalPoints / gpaPoints.length;
console.log(gpaAverage);



// -------------------------------
// filter
// -------------------------------

const words = ['watermelon', 'peach', 'apple', 'tomato'];

const shortWords = words.filter(function (word) {
    return word.length < 6;
});

console.log(shortWords);
console.log(shortWords.length);


const classes = [
    {name: 'WDD131', credits:2},
    {name:'CSE170', credit:2},
    {name:"ITM455",credts: 4}
]

let container =document.querySelector('#classes');

classes.forEach(function(){
    let name = document.createElement('div');

    let html = `
    <span>$(item.name)</span>
    <span>$(item.credit)</span>
    <hr>`

    name.innerHTML = html;

    container.appendChild(name);
})