//MODUL4 AUTOTEST10

// Change code below this line
const calculateTotalPrice =(orderedItems) => {
  let totalPrice = 0;

    orderedItems.forEach((item) =>  totalPrice += item);
  console.log(totalPrice);
  return totalPrice;
}
// Change code above this line

calculateTotalPrice([12, 85, 37, 4]); //повертає 138
calculateTotalPrice([164, 48, 291]); //повертає 503
calculateTotalPrice([412, 371, 94, 63, 176]); //повертає 1116