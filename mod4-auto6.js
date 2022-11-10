//MODUL4 AUTOTEST6

function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Change code below this line
   numbers.forEach(function (number) {
     if (number > value) filteredNumbers.push(number);
  });
  console.log(filteredNumbers);

  // Change code above this line
  return filteredNumbers;
}

filterArray([1, 2, 3, 4, 5], 3); //повертає [4, 5]
filterArray([1, 2, 3, 4, 5], 4); //повертає [5]
filterArray([1, 2, 3, 4, 5], 5); //повертає []
filterArray([12, 24, 8, 41, 76], 38); //повертає [41, 76]
filterArray([12, 24, 8, 41, 76], 20); //повертає [24, 41, 76]