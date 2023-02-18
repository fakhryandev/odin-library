const myLibrary = [];

function Book(title, author, numberOfPages, status) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.status = status;
}

function addBookToLibary(book) {
  myLibrary.push(book);
}

function loadLibary() {
  console.log(myLibrary);
}

const newBookOne = new Book(
  "The Richest Man in Babylon",
  "George Samuel Clason",
  144,
  false
);

addBookToLibary(newBookOne);

loadLibary();
