let val;

val = document; //entire document
console.log(val);

val = document.all; //shows all html tags: like an array
console.log(val);

val = document.all[2]; //iterate using index as all gives array like structure
console.log(val);

val = document.all.length; //number of elements in the DOM
console.log(val);

val = document.domain; //gives the domain
console.log(val);

val = document.URL; //gives the entire URL : protocol, port, page
console.log(val);

//access different html elements without selector
val = document.forms;
console.log(val);

val = document.forms[0]; //accesses form 1 
console.log(val);

val = document.forms[0].id; //accesses form id 
console.log(val);

//similarly 
//for link elements
val = document.links;
console.log(val);

val = document.links[0]; //first link
console.log(val);

val = document.links[0].className; //class names of the first link
console.log(val);

//we can get scripts list also
val = document.scripts;
console.log(val);

val = document.scripts[2]; //getting 3rd script
console.log(val);

val = document.scripts[2].getAttribute('src');
console.log(val);

//getting the scripts using array

val = document.scripts;
let scriptsArray = Array.from(val);

scriptsArray.forEach(function(val){   //callback function: function within function 
  console.log(val.getAttribute('src'));
})

