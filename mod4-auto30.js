//MODUL4 AUTOTEST30

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change code below this line

// [1, 2, 3, 4, 5].every((value) => value >= 0);
const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0);

console.log("eachElementInFirstIsEven = ", eachElementInFirstIsEven);
console.log("eachElementInFirstIsOdd = ", eachElementInFirstIsOdd);
console.log("eachElementInSecondIsEven = ", eachElementInSecondIsEven);
console.log("eachElementInSecondIsOdd = ", eachElementInSecondIsOdd);
console.log("eachElementInThirdIsEven = ", eachElementInThirdIsEven);
console.log("eachElementInThirdIsOdd = ", eachElementInThirdIsOdd);

// У змінній eachElementInFirstIsEven був результат перевірки всіх елементів масиву firstArray на парність.
// У змінній eachElementInFirstIsOdd був результат перевірки всіх елементів масиву firstArray на непарність.
// У змінній eachElementInSecondIsEven був результат перевірки всіх елементів масиву secondArray на парність.
// У змінній eachElementInSecondIsOdd був результат перевірки всіх елементів масиву secondArray на непарність.
// У змінній eachElementInThirdIsEven був результат перевірки всіх елементів масиву thirdArray на парність.
// У змінній eachElementInThirdIsOdd був результат перевірки всіх елементів масиву thirdArray на непарність.
// Значення змінної eachElementInFirstIsEven - це буль true
// Значення змінної eachElementInFirstIsOdd - це буль false
// Значення змінної eachElementInSecondIsEven - це буль false
// Значення змінної eachElementInSecondIsOdd - це буль true
// Значення змінної eachElementInThirdIsEven - це буль false
// Значення змінної eachElementInThirdIsOdd - це буль false
