import Book from "./Book";

class EBook extends Book {
  constructor(fileFormat) {
    super(title, author, yearOfPublication);
    this.fileFormat = fileFormat;
  }

  printInfo() {
    super.printInfo();
    console.log(`The file format: ${this.fileFormat}`);
  }

  getBookTitle() {
      return super.getBookTitle();
  }

  getBookAuthor() {
    return super.getBookAuthor();
  }

  getBookAuthor() {
      return super.getYearOfBookPublication();
    }
    
    getBookFileFormat() {
        return `The file format: ${this.fileFormat}`;
    }
}

export default EBook;
