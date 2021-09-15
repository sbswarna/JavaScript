//Event Listener : listens to an event and respons according to this
document.querySelector('.clear-tasks').addEventListener('click', 
function(){
  console.log("Hello world!")
})
//if we left href blank in the button then hello world will blink for very short time and then disapear. 
//to show hello world for long period we need to put '#' in the href section or we need to 
//prevent the default redirection using event object and event prevention
//event object
document.querySelector('.clear-tasks').addEventListener('click', 
function(e){ //callback function
  console.log("Hello world!");
  e.preventDefault(); //this will prevent redirection if we put an url in href. otherwise the page will redirect
                      //and hello world will disappear.
})

//we can use a named function to perform this too

 document.querySelector('.clear-tasks').addEventListener('click', onClick); 
//instead of unnamed callback function we 
//are now using onClick, a named function
//when we click 'clear task; button eventlistener
//will look for a function named onClick and
//then response according to that
function onClick(e) {
  console.log('clicked');
  e.preventDefault();
}

//The event object

function onClick(e) {
  // console.log('clicked');
  // e.preventDefault();

  let val = e;
  console.log(val);
  val = e.target; //it will give the element where event occured
  console.log(val);
  val = e.target.className;
  console.log(val);
  val = e.target.classList;
  console.log(val);
  e.target.innerText = 'Clicked'; //it will change the button text when click occurs

  //event type
  val = e.type;
  console.log(val);

  //timestamp
  val = e.timeStamp;
  console.log(val);

  //coordinates of event relative to window
  val = e.clientX;
  console.log(val);
  val = e.clientY;
  console.log(val);

  //coordinates of event relative to element
  val = e.offsetX;
  console.log(val);
  val = e.offsetY;
  console.log(val);
}







