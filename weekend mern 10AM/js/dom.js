

// console.log(root);

// window.alert('fassdaf');
// alert('fasfsadf');


// get Elements by DOM

// 1. id 
// 2. class
// 3. tag

// id
// const root = document.getElementById('root');
// console.log(root);

// class 

// const root = document.getElementsByClassName('root');
// console.log(root);

// Tag

// const body = document.getElementsByTagName('body');
// console.log(body);

// Query Selector

// const root = document.querySelector('#root');

// const root = document.querySelector('.root');

// const root = document.querySelector('body')

// Query selector all

// const root = document.querySelectorAll('.root');
// console.log(root);


// Create Element

const p = document.createElement('p');
p.innerText = "fdasfasfsadf";
p.className = "fasfdsafasfd";

// const attr = document.createAttribute('fdsadasfsaf');
// attr.value = "Fasfasdfasdffdas";


// p.setAttribute('fasfsdaf','fasfsadf');

const root = document.getElementById('root')

root.append(p);


