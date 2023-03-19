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

  $("#modalNewBook").modal("hide");
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

  library.innerHTML = "";

  myLibrary.forEach((item, index) => {
    const book = bookCreator(item, index);

    library.insertAdjacentHTML("beforeend", book);

    const removeButton = document.getElementById(`remove-${index}`);

    removeButton.addEventListener("click", (e) => {
      myLibrary.splice(index, 1);
      loadLibary();
    });

    const updateButton = document.getElementById(`update-${index}`);
    updateButton.addEventListener("click", (e) => {
      const updatedStatus = !myLibrary[index].status;
      myLibrary[index].status = updatedStatus;
      loadLibary();
    });
  });
}

function bookCreator(bookData, index) {
  const html = `
    <div class="col mb-4">
      <div class="card h-100">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center">
            <h5 class="card-title">${bookData.title}</h5>
            <i class="icon-check-sign text-success ${
              bookData.status === !true ? "d-none" : "d-block"
            }"></i>
          </div>
          <h6 class="card-subtitle mb-2 text-muted">${bookData.author}</h6>
          <p class="card-text">Number of Pages : <span class="font-weight-bold">${
            bookData.numberOfPages
          } pages</span></p>
          <button class="btn btn-danger" id="remove-${index}">Remove</button>
          <button class="btn ${
            bookData.status === !true ? "btn-success" : "btn-secondary"
          }" id="update-${index}">${
    bookData.status === !true ? "Finish" : "Unfinish"
  }</button>
        </div>
      </div>
    </div>
  `;

  return html;
}
