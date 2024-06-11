import Book from "./Book.js";

class EBook extends Book {
	constructor(title, author, yearOfPublication, fileFormat) {
		super(title, author, yearOfPublication);
		this.fileFormat = fileFormat;
	}

	printInfo() {
		super.printInfo();
		console.log(`The file format: ${this.fileFormat}.`);
	}

	getBookFileFormat() {
		return `The file format: ${this.fileFormat}.`;
	}

	setBookFileFormat(fileFormat) {
		if (!["EPUB", "MOBI", "PDF"].includes(fileFormat.toUpperCase())) {
			console.log(`The file format is incorrect.`);
		}
		return (this.fileFormat = fileFormat);
	}

	static createEbookFromBook(book, fileFormat) {
		if (book instanceof Book && typeof fileFormat === "string") {
			return new EBook(book.title, book.author, book.yearOfPublication, fileFormat);
		} else {
			throw new Error(`The first argument is not an instance of Book`);
		}
	}
}

export default EBook;
