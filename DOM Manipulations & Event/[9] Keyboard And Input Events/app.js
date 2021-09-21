let form = document.querySelector('form');
let taskInput = document.getElementById('task');

//Clearing the default value in the form 
taskInput.value = '';

form.addEventListener('submit', runEvent);

//keydown
taskInput.addEventListener('keydown', runEvent);
//keyup
taskInput.addEventListener('keyup', runEvent); //fires after releasing the key
//keypress
taskInput.addEventListener('keypress', runEvent); //fires after pressing
//focus
taskInput.addEventListener('focus', runEvent); //focuses the input area
//blur
taskInput.addEventListener('blur', runEvent); //blur event fires after we get out of the event area
//cut
taskInput.addEventListener('cut', runEvent); //writing something in the field and cut/ctrl+x
//paste 
taskInput.addEventListener('paste', runEvent);
//input
taskInput.addEventListener('input', runEvent); //when any type of input occurs

function runEvent(e) {
    console.log(`Event Type ${e.type}`);
    console.log(e.target.value); //shows the input in the console
    //e.preventDefault();
}