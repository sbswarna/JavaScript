let val;
//Single element selector: Selects only one element. 
//Suppose, we've multiple classes in DOM. 
//if we try to access classes using single element selector,
//then every time we store class, it will grab the first one.

//Get element by its ID: document.getElementById('id name here from the document')
val = document.getElementById('task-title');
console.log(val);

//changing the style of the element.
//First get the element. then changle style using .style.whateverStyleWeWantToChange = 'value'
val = val.style.backgroundColor = '#788';

//Query Selector: document.querySelector('anything')
//by id: #idName
val = document.querySelector('#task-form')
console.log(val);

//by class: .className
val =  document.querySelector('.card-title')
console.log(val);

val = document.querySelector('li') //if there are multiple elements, this will always select the first one
console.log(val.style.color = 'red'); //first list item will become red 

//if we want to select nth item from the multiple
val = document.querySelector('li:nth-child(3)');
console.log(val.style.color = 'blue');