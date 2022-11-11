//MODUL4 AUTOTEST39

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

console.log("ascendingReleaseDates - ", ascendingReleaseDates);
console.log("descendingReleaseDates - ", descendingReleaseDates);

// Онлайн бібіліотеці необхідно відображати книги, відсортовані за датою видання,
//     за її зростанням або спаданням.Доповни код таким чином, щоб у змінній ascendingReleaseDates
//  вийшла копія масиву releaseDates, відсортована за зростанням, а у змінній descendingReleaseDates
//     - копія, відсортована за спаданням.

// Значення змінної ascendingReleaseDates - це масив[1967, 1973, 1984, 1997, 2008, 2012, 2016]
// Значення змінної descendingReleaseDates - це масив [2016, 2012, 2008, 1997, 1984, 1973, 1967]