class Book {

    constructor(isbn, name, author, isChecked) {
        this.isbn = isbn;
        this.name = name;
        this.author = author;
        this.isChecked = isChecked;
    }

    toString() {
        return `The book ${this.name} with identifier ${this.isbn} is written by ${this.author} and taken stauts is: ${this.isChecked}`
    }
}

module.exports = Book;