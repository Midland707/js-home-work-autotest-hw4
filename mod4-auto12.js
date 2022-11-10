//MODUL4 AUTOTEST12

// Change code below this line
const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach((element) => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });
 console.log(commonElements);
  // Change code above this line
  return commonElements;
}

getCommonElements([1, 2, 3], [2, 4]); //повертає [2]
getCommonElements([1, 2, 3], [2, 1, 17, 19]); //повертає [1, 2]
getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]); //повертає [12, 27, 3]
getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]); //повертає [10, 30, 40]
getCommonElements([1, 2, 3], [10, 20, 30]); //повертає []