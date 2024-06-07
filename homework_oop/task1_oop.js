import Book from "./Book.js";
import EBook from "./EBook.js";

const book1 = new Book("<The Atlas Paradox>", "Olivie Blake", 2024);
const book2 = new Book("<A Little Life>", "Hanya Yanagihara", 2017);
const book3 = new Book("<Heaven>", "Sam Bett", 2022);

book1.printInfo();
book2.printInfo();
book3.printInfo();

console.log(book1.getBookTitle());
console.log(book2.getBookAuthor());
console.log(book2.getYearOfBookPublication());

const ebook1 = new EBook(
  "<The Great Gatsby>",
  "F. Scott Fitzgerald",
  1925,
  "PDF"
);

ebook1.printInfo();

console.log(ebook1.getBookTitle());
console.log(ebook1.getBookFileFormat());

const  newTitle = book1.setBookTitle("Casablanka");
console.log(newTitle);

console.log(ebook1.setBookFileFormat("FRT"));

const listOfBooks = [book1, book2, book3, ebook1];
console.log(Book.showTheOldestBookByYearOfPublishing(listOfBooks));

const newEbook = EBook.createEbookFromBook(book2, "MOBI");
console.log(newEbook);