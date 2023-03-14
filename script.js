const myLibrary = [];
const bookForm = document.getElementById("newBookForm");
const formModal = document.getElementById("modalNewBook");

document.addEventListener("DOMContentLoaded", () => {
  loadLibary();
});

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const author = document.getElementById("authorInput").value;
  const title = document.getElementById("titleInput").value;
  const numberOfPages = document.getElementById("pagesInput").value;
  const status = document.getElementById("statusCheck").checked;

  const newBook = new Book(title, author, numberOfPages, status);

  bookForm.reset();
  addBookToLibary(newBook);

  loadLibary();
});

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
    <div class="col mb-4">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">${bookData.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${bookData.author}</h6>
          <p class="card-text">Number of Pages : <span class="font-weight-bold">${bookData.numberOfPages} pages</span></p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
    </div>
  `;

  return html;
}

// const newBookOne = new Book(
//   "The Richest Man in Babylon",
//   "George Samuel Clason",
//   144,
//   false
// );

// addBookToLibary(newBookOne);
