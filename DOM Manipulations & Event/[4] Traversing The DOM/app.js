let val;

//traversing the DOM

let list =  document.querySelector('ul.collection');
console.log(list);
let listItem = document.querySelector('li.collection-item');
console.log(listItem);

//Get the child node
let childOfList = list.childNodes; //returns nodelist
console.log(childOfList); //counts line breaks as children. Text children are the line breaks after end tags.

//nodeTypes
// 1 = Element
// 2 = Attributes
// 3 = Text node
// 8 = Comment
// 9 = Document Itself 
// 10 = Doctype

val = list.childNodes[0];
console.log(val.nodeName);
console.log(val. nodeType);
val = list.childNodes[1];
console.log(val.nodeName);
console.log(val.nodeType);

//Get children elements
let children = list.children; //returns HTML collection
console.log(children); 

//children of children
val = list.children[3].children;
console.log(val);

//First Child
val = list.firstChild; //text
console.log(val);

val = list.firstElementChild; //returns first li
console.log(val);

//Last Child
val = list.lastChild; //text
console.log(val);

val = list.lastElementChild; //returns last li
console.log(val);

//counting child
val = list.childElementCount;
console.log(val); //5 because we have 5 li items in list

//Getting parent elements
val = listItem.parentElement;
console.log(val);
//parent of parent
val = listItem.parentElement.parentElement;
console.log(val);

//get next siblings
val = listItem.nextSibling;
console.log(val); //text
//get next sibling element
val = listItem.nextElementSibling;
console.log(val);

//get previous sibling
val = listItem.previousSibling; //text
console.log(val);
val = listItem.nextElementSibling.previousElementSibling; 
console.log(val);

