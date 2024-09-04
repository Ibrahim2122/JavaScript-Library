const Student = require("./Student");
const Book = require("./Book");
const fs = require("fs");

const readingBookFile = () => {
  const bookList = [];
  try {
    const books = fs.readFileSync("./books.txt", "utf8");
    const rows = books.split("\n");

    rows.forEach((row) => {
      const data = row.split(",");
      const book = new Book(data[0], data[1], data[2], data[3]);
      bookList.push(book);
    });
  } catch (err) {
    console.log(err);
  }

  return bookList;
};

const readingStudentFile = () => {
  const studentList = [];
  try {
    const students = fs.readFileSync("./students.txt", "utf8");
    const rows = students.split("\n");

    rows.forEach((row) => {
      const data = row.split(" ");
      const student = new Student(data[0], data[1], data[2]);
      studentList.push(student);
    });
  } catch (err) {
    console.log(err);
  }

  return studentList;
};

const studentList = readingStudentFile();
const bookList = readingBookFile();

const listAllBooks = () => {
  bookList.forEach((book) => {
    console.log(`${book}`);
  });
};

const listAllStudents = () => {
  studentList.forEach((student) => {
    console.log(`${student}`);
  });
};

const listCheckedBooks = () => {
  bookList.forEach((book) => {
    if (book.isChecked === "T") {
      console.log(book);
    }
  });
};

listCheckedBooks()