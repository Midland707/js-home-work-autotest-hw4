//MODUL4 AUTOTEST32

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change below this line

const anyElementInFirstIsEven = firstArray.some((value) => value % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some((value) => value % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some((value) => value % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some((value) => value % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some((value) => value % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some((value) => value % 2 !== 0);

// [1, 2, 3, 4, 5].some((value) => value >= 0); // true
console.log("anyElementInFirstIsEven = ", anyElementInFirstIsEven);
console.log("anyElementInFirstIsOdd = ", anyElementInFirstIsOdd);
console.log("anyElementInSecondIsEven = ", anyElementInSecondIsEven);
console.log("anyElementInSecondIsOdd = ", anyElementInSecondIsOdd);
console.log("anyElementInThirdIsEven = ", anyElementInThirdIsEven);
console.log("anyElementInThirdIsOdd = ", anyElementInThirdIsOdd);

// Значення змінної anyElementInFirstIsEven - це буль true
// Значення змінної anyElementInFirstIsOdd - це буль false
// Значення змінної anyElementInSecondIsEven - це буль false
// Значення змінної anyElementInSecondIsOdd - це буль true
// Значення змінної anyElementInThirdIsEven - це буль true
// Значення змінної anyElementInThirdIsOdd - це буль true
