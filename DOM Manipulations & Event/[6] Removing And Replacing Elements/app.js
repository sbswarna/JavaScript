let val;

//Replacing Element
//First create an element
let newHeading = document.createElement('h2');
//give an id to that element
newHeading.id = 'task-title';
//give textnode
newHeading.appendChild(document.createTextNode('Task List'));
//get old element
let oldHeading = document.getElementById('task-title');
//get parent
let parent = document.querySelector('.card-action');
//replace old element with new element
parent.replaceChild(newHeading, oldHeading);

//Remove Element
//store the list
let lis = document.querySelectorAll('li');
//store the parent 
let uls = document.querySelector('ul');

//remove using list
lis[1].remove();

//remove child element of ul
uls.removeChild(lis[3]);

//Classes and Attributes
let firstLi = document.querySelector('li:first-child');
link = firstLi.children[0];
console.log(link);

//add and remove class
link.classList.add('test');
console.log(link.className);
link.classList.remove('test');
console.log(link.className);

//add and remove attributes
val = link.getAttribute('href');
console.log(val);

link.setAttribute('href', 'https://www.google.com/');
val = link.getAttribute('href');
console.log(val);

link.setAttribute('title', 'Google');
console.log(link);

link.removeAttribute('title');
console.log(link);

