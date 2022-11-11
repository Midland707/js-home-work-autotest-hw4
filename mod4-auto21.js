//MODUL4 AUTOTEST21

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";
// Change code below this line

const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
const booksByAuthor = books.filter(book => book.author === AUTHOR);
console.log(topRatedBooks);
console.log("Bernard Cornwell", booksByAuthor);

// Значення змінної MIN_RATING - це число 8
// Значення змінної topRatedBooks - це масив книг з рейтингом, вищим за 8
// Значення змінної booksByAuthor - це масив книг, автор яких "Bernard Cornwell"