//MODUL4 AUTOTEST45

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
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;
// Change code below this line

const names = books
    .filter((book) => book.rating > MIN_BOOK_RATING)
    .map((book) => book.author)
    .sort();
console.log("names - ", names);
// Доповни код таким чином, щоб у змінній names вийшов масив імен авторів
// в алфавітному порядку, рейтинг книг яких більший за значення змінної MIN_BOOK_RATING.

// Значення змінної names - це масив ["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"]
// Використовується ланцюжок методів filter, map, sort