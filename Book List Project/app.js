//Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//UI constructor
function UI() {}

//add books to the table
UI.prototype.addBooksToTable = function (book) {
  const list = document.getElementById("book-list");

  //create table row
  const row = document.createElement("tr");
  //create table col
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `;
  list.appendChild(row);
};


//Delete book

UI.prototype.deleteBook = function (target) {
    if(target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}
//Clear UI fields
UI.prototype.clearFields = function () {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

//show alert for error
UI.prototype.showAlert = function(msg, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    
    div.appendChild(document.createTextNode(msg));

    //get parent
    const container = document.querySelector('.container');
    //insert before
    const form = document.querySelector('#book-form');

    container.insertBefore(div, form);

    //set timeout
    setTimeout(function() {
        document.querySelector('.alert').remove();
    }, 3000);
}

//Event Listerner for adding books
document.getElementById("book-form").addEventListener("submit", function (e) {
  //get form data
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  //instantiate book
  const book = new Book(title, author, isbn);
  //console.log(book);

  //Instantiate UI
  const ui = new UI();

  //if any field is empty
  if (title === "" || author === "" || isbn === "") {
      ui.showAlert('Please fill in all the fields!', 'error');
  } else {
    //add books to the table
    ui.addBooksToTable(book);

    //clear UI fields
    ui.clearFields();

    //success alert
    ui.showAlert('Book added!', 'success');
  }

  e.preventDefault();
});

//Event listner for delete
document.getElementById('book-list').addEventListener('click', function(e) {

    const ui = new UI();
    //delete book
    ui.deleteBook(e.target);
    //show alert for successful remove
    ui.showAlert('Book has been removed successfully!', 'success');

    e.preventDefault();
})
