//MODUL4 AUTOTEST40

const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];
// Change code below this line

const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

console.log("authorsInAlphabetOrder - ", authorsInAlphabetOrder);
console.log("authorsInReversedOrder - ", authorsInReversedOrder);

// Онлайн бібіліотеці необхідно відображати книги, відсортовані за автором,
//     в алфавітному і зворотному алфавітному порядку.Доповни код таким чином,
//     щоб у змінній authorsInAlphabetOrder вийшла копія масиву authors, відсортована
// за алфавітом, а у змінній authorsInReversedOrder - копія, відсортована у зворотному алфавітному порядку.

// Значення змінної authorsInAlphabetOrder - це масив["Bernard Cornwell",
//     "Fyodor Dostoevsky", "Howard Lovecraft", "Robert Sheckley", "Tanith Lee"]
// Значення змінної authorsInReversedOrder - це масив["Tanith Lee",
//     "Robert Sheckley", "Howard Lovecraft", "Fyodor Dostoevsky", "Bernard Cornwell"]