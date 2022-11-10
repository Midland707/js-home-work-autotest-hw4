//MODUL4 AUTOTEST13

function changeEven(numbers, value) {
  // Change code below this line
  let arrNumbers = [...numbers];
  for (let i = 0; i < arrNumbers.length; i += 1) {
    if (arrNumbers[i] % 2 === 0) {
      arrNumbers[i] = arrNumbers[i] + value;
    }
    }
    console.log(arrNumbers);
    return arrNumbers;
  // Change code above this line
}

changeEven([1, 2, 3, 4, 5], 10); //повертає новий масив [1, 12, 3, 14, 5]
changeEven([2, 8, 3, 7, 4, 6], 10); //повертає новий масив [12, 18, 3, 7, 14, 16]
changeEven([17, 24, 68, 31, 42], 100); //повертає новий масив [17, 124, 168, 31, 142]
changeEven([44, 13, 81, 92, 36, 54], 100); //повертає новий масив [144, 13, 81, 192, 136, 154]