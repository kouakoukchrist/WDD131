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
