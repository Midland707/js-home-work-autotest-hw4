//MODUL4 AUTOTEST7

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line
     firstArray.forEach(function (number) {
         if (secondArray.includes(number)) commonElements.push(number);
  });
  console.log(commonElements);

  return commonElements;
  // Change code above this line
}

getCommonElements([1, 2, 3], [2, 4]); //повертає [2]
getCommonElements([1, 2, 3], [2, 1, 17, 19]); //повертає [1, 2]
getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]); //повертає [12, 27, 3]
getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]); //повертає [10, 30, 40]
getCommonElements([1, 2, 3], [10, 20, 30]); //повертає []