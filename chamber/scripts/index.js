// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('.menu');

// Add a simple arrow function that listens for the <li> hamburger button click event.
// When clicked, the <ul class="navigation">'s class list toggle'
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on

// last modified

document.getElementById('updatedDate').innerHTML = document.lastModified;

document.getElementById('copyYear').innerHTML = new Date().getFullYear(); // copyright year

// current date

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`;
document.getElementById('date').innerHTML = document.currentDate;