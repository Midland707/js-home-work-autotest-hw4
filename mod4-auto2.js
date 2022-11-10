//MODUL4 AUTOTEST2

function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

// Chande code below this line
function makeMessage(pizzaName, callback) {
  console.log(callback(pizzaName));
  return callback(pizzaName);
}

makeMessage("Royal Grand", makePizza); //повертає рядок "Pizza Royal Grand is being prepared, please wait..."
makeMessage("Ultracheese", deliverPizza); //повертає рядок "Delivering Ultracheese pizza."
