class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  //add books to the table
  addBooksToTable(book) {
    const list = document.getElementById("book-list");

    //create table row
    const row = document.createElement("tr");
    //create table col
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete" style="text-decoration: none; color: red">X</a></td>
    `;
    list.appendChild(row);
  }

  //Delete book

  deleteBook(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
    }
  }
  //Clear UI fields
  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }

  //show alert for error
  showAlert(msg, className) {
    const div = document.createElement("div");
    div.className = `alert ${className}`;

    div.appendChild(document.createTextNode(msg));

    //get parent
    const container = document.querySelector(".container");
    //insert before
    const form = document.querySelector("#book-form");

    container.insertBefore(div, form);

    //set timeout
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}

//Local Storage class

class Storage {
    static getBooks () {
        let books;
        if(localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static displayBooks() {
        const books = Storage.getBooks();
        books.forEach(function(book){
          const ui  = new UI;
          // Add book to UI
          ui.addBooksToTable(book);
        });
      }
    static addBooks (book) {
        const books = Storage.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }
    static removeBooks(isbn) {
        const books = Storage.getBooks();
        books.forEach(function(book, index) {
            if(book.isbn === isbn) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}

//Event listener for reload
document.addEventListener('DOMContentLoaded', Storage.displayBooks);

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
    ui.showAlert("Please fill in all the fields!", "error");
  } else {
    //add books to the table
    ui.addBooksToTable(book);

    //insert book into local storage
    Storage.addBooks(book);

    //clear UI fields
    ui.clearFields();

    //success alert
    ui.showAlert("Book added!", "success");
  }

  e.preventDefault();
});

//Event listner for delete
document.getElementById("book-list").addEventListener("click", function (e) {
  const ui = new UI();
  //delete book
  ui.deleteBook(e.target);

  Storage.removeBooks(e.target.parentElement.previousElementSibling.textContent);
  //show alert for successful remove
  ui.showAlert("Book has been removed successfully!", "success");

  e.preventDefault();
});


