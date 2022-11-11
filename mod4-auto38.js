//MODUL4 AUTOTEST38

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();

console.log("ascendingReleaseDates - ", ascendingReleaseDates);
console.log("alphabeticalAuthors - ", alphabeticalAuthors);

console.log("original releaseDates - ", releaseDates);
console.log("original authors - ", authors);

// Доповни код таким чином, щоб у змінній ascendingReleaseDates
// вийшла копія масиву releaseDates, відсортована за зростанням,
// а у змінній alphabeticalAuthors - копія масиву імен авторів authors, відсортована за алфавітом.

// ascendingReleaseDates - це масив [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// alphabeticalAuthors - це масив ["Bernard Cornwell", "Tanith Lee", "Robert Sheckley", "Fyodor Dostoevsky"]