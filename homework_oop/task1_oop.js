import Book from "./Book.js";
import EBook from "./EBook";

const book1 = new Book("<The Atlas Paradox>", "Olivie Blake", "2024");
const book2 = new Book("<A Little Life>", "Hanya Yanagihara", "2017");
const book3 = new Book("<Heaven>", "Sam Bett", "2022");

book1.printInfo();
book2.printInfo();
book3.printInfo();

console.log(book1.getBookTitle());
console.log(book2.getBookAuthor());
console.log(book3.getYearOfBookPublishing());


