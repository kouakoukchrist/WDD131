
let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
})
    
// let title = document.querySelector('h1');
// title.textContent = "Web Page Components";

// document.getElementById('topics').style.color = 'blue' 


// // Or put this in a variable

// //   let topic_title=document.getElementaryById('topics')
// // topic_title.style.color = 'blue' 

// let list = document.querySelector('.list');

// // list.style.border = '3px solid black' ;

// let para = document.querySelector('p');

// para.classList.add('background');

// // para.style.backgroundClip = ('#000')

let image = document.querySelector('img');

image.setAttribute('src', 'logo.webp')