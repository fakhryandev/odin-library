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
  const library = document.getElementById("library");

  myLibrary.forEach((item) => {
    const book = bookCreator(item);

    library.insertAdjacentHTML("beforeend", book);
  });
}

function bookCreator(bookData) {
  const html = `
    <div class="book">
      <h1 class="book-title" class="book-title">Title : ${bookData.title}</h1>
      <p>Author : ${bookData.author}</p>
      <p>Number of Pages : ${bookData.numberOfPages}</p>
      <p>Status : ${bookData.status}</p>
      <div class="button-wrapper">
        <button class="btn">Finished</button>
        <button class="btn">Delete</button>
      </div>
    </div>
  `;

  return html;
}

const newBookOne = new Book(
  "The Richest Man in Babylon",
  "George Samuel Clason",
  144,
  false
);

addBookToLibary(newBookOne);

loadLibary();
