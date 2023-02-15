function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = read;
  this.info = function () {
    console.log(title, author, pages, read);
  };
}

const books = new Book("Naruto", "Masashi Kishimoto", 500, "read");

console.log(books.info());
