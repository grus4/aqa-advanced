class Book {
  constructor(title, author, yearOfPublication) {
    this.title = title;
    this.author = author;
    this.yearOfPublication = yearOfPublication;
  }

  printInfo() {
    console.log(
      `The title of the book: ${this.title},\n author: ${this.author},\n year of publication: ${this.yearOfPublication}\n.`
    );
  }

  getBookTitle() {
    return `The title of the book: ${this.title}.`;
  }

  setBookTitle(title) {
    if (typeof title !== "string" || title.trim() === "") {
      throw new Error(`Title must be a non-empty string.`);
    }
    return (this.title = title);
  }

  getBookAuthor() {
    return `The author of the book: ${this.author}`;
  }

  setBookTitle(author) {
    if (typeof author !== "string" || author.trim() === "") {
      throw new Error(`Author must be a non-empty string.`);
    }
    return (this.author = author);
  }

  getYearOfBookPublication() {
    return `Year of publication: ${this.yearOfPublication}`;
  }

  setYearOfBookPublication(year) {
    if (typeof year !== "number" || year < 0) {
      throw new Error(`Year must be a positive number.`);
    }
    return (this.year = year);
  }

  static showTheOldestBookByYearOfPublishing(books) {
    if (!Array.isArray(books) || books.length === 0) {
      throw new Error("The array of books mustn't be empty");
    }
    const sortedBooks = books.sort((oldest, book) => oldest.year - book.year);
    return sortedBooks.at(-1);
  }
}

export default Book;

