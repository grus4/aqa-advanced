class Book {
  constructor(title, author, yearOfPublication) {
    this.title = title;
    this.author = author;
    this.yearOfPublication = yearOfPublication;
  }

  printInfo() {
    console.log(
      `The title of the book: ${this.title},\n author: ${this.author},\n year of publication: ${this.yearOfPublication}\n`
    );
  }

  getBookTitle() {
    return `The title of the book: ${this.title}`;
  }

  getBookAuthor() {
    return `The author of the book: ${this.author}`;
  }

  getYearOfBookPublication() {
    return `Year of publication: ${this.yearOfPublication}`;
  }
}

export default Book;

