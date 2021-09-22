//Event Bubbling: this refers to the bubbling of events through the DOM. 
//If an event occurs in one element, it will bubble up to it's parents
//event delegation is almost the opposite of event bubbling.
//It's where we put the listener on one of the parent elements and then we use logic inside of the event-
//handler to target the element that we actually want that click for or whatever type of event it is.

//Event Bubbling Example 
//all of the event below will be fired sequencially if we click card-title once. 

document.querySelector('.card-title').addEventListener('click',
function() {
    console.log('card title');
})

//parent of card-title
document.querySelector('.card-content').addEventListener('click',
function() {
    console.log('card content')
})

//parent of card-content
document.querySelector('.card').addEventListener('click',
function() {
    console.log('card');
})

//parent of card
document.querySelector('.col').addEventListener('click',
function() {
    console.log('col');
})

//parent of col
document.querySelector('.row').addEventListener('click',
function() {
    console.log('row');
})

//parent of row
document.querySelector('.container').addEventListener('click',
function() {
    console.log('container');
})

//Event Delegation 

document.body.addEventListener('click', deleteItems);

function deleteItems(e) {
    // if(e.target.className === 'fa fa-remove')
    // {
    //     console.log('Delete Item');
    // } //this will work
    //but if we want to delete items using parent class, then
    // if(e.target.parentElement.className === 'delete-item')
    // {
    //     console.log('Delete Item');
    // } //this will not work. Because e.target.parentElement.className should match with the entire string in the class.
    // if(e.target.parentElement.className === 'delete-item secondary-content')
    // {
    //     console.log('Delete Item');
    // } //this will work. But it is not a good process. we may have another extra class only in the last element.
    // //then if we click on the icon, the event will not occur for the last. 
    // //we should retrive entire classList and search in it.

    //The better technique
    if(e.target.parentElement.classList.contains('delete-item'))
    {
        console.log('Delete Item');
        //to actually remove the item from DOM (not from database. if we refresh, then the item will come back)
        e.target.parentElement.parentElement.remove();
    }
}
