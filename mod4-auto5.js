//MODUL4 AUTOTEST5

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line

  orderedItems.forEach(function (item) {
    totalPrice += item;
  });
  console.log(totalPrice);
  // Change code above this line
  return totalPrice;
}

calculateTotalPrice([12, 85, 37, 4]); //повертає 138
calculateTotalPrice([164, 48, 291]); //повертає 503
calculateTotalPrice([412, 371, 94, 63, 176]); //повертає 1116
