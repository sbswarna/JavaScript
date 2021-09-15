let val;

//Create element
let li = document.createElement('li'); //creates a 'li' element

//create class name
li.className = 'collection-item';

//create text node and append
li.appendChild(document.createTextNode('New List Item'));

//create new link element
let link = document.createElement('a');
//add class
link.className = 'delete-item secondary-content';
//add icon
link.innerHTML = '<i class="fa fa-remove"></i>';
//append link into li
li.appendChild(link);

val = document.querySelector('ul.collection');
val.appendChild(li);

console.log(li);








