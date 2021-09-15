let val;
//Multiple element selector selects all the elements and returns as a HTML collection.
//get elements by class name:

let items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[2]);
items[0].style.color = 'orange';
//items[4].textContent = 'Item 5';

//get elements by tag name
formTagItems = document.getElementsByTagName('form');
let formItems = Array.from(formTagItems);
formItems.forEach(function(forms) {
  console.log(forms);
})
//console.log(formTagItems);

//document.querySelectorAll() : returns nodelist
items = document.querySelectorAll('li');
console.log(items);

// items.forEach(function(item, index) {
//   item.textContent = `${index}: hello`;
// })

itemsOdd = document.querySelectorAll('li:nth-child(odd)');
for(let i=0; i<itemsOdd.length; i++) {
  itemsOdd[i].style.backgroundColor = 'gray';
}
console.log(items);
