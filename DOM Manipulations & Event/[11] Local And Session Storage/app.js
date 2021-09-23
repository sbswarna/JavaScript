//difference between local and session storage: 
//the data in the local storage stays untill we manually clear that out
//on the other hand, data in the session storage goes away once we close the browser or the session ends

//setting local storage item
localStorage.setItem('Name', 'SBS'); //setItem('key', 'value') : both key and value should be string. 
                                    //If they are not, we need to convert them in string.
localStorage.setItem('Age','23');
//setting session storage item
sessionStorage.setItem('Name', 'Shatabdi');

//get item from storage
let nameLocal = localStorage.getItem('Name');
let ageLocal = localStorage.getItem('Age');
console.log(nameLocal, ageLocal);

let nameSession =  sessionStorage.getItem('Name');
console.log(nameSession);

//remove from storage
localStorage.removeItem('Name');
sessionStorage.removeItem('Name');

//clear storage
localStorage.clear();

//store in local storage via form
document.querySelector('form').addEventListener('submit', runEvent);

function runEvent(e) {
    let task = document.getElementById('task').value;
    localStorage.setItem('task', task);
    alert('Task Added');
    e.preventDefault();
} //this will store only one task and whenever we try to store another, the previously stored task will be overwritten.

//to solve this problem we need to store tasks in an array first.
//then convert its element into string using JSON.stringify();
//then store in the localstorage

function runEvent(e) {
    let task = document.getElementById('task').value;

    let tasks;
    if(localStorage.getItem('tasks') === null)
    {
        tasks = [];
    }
    else
    {
        tasks = JSON.parse(localStorage.getItem('tasks')); //as items in the local storage are string, we need to parse them
    }
    tasks.push(task);
    alert('Task Added');

    localStorage.setItem('tasks', JSON.stringify(tasks));
    e.preventDefault();
}

//getting the tasks using foreach

let tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(function(task) {
    console.log(task);
})
