//MODUL4 AUTOTEST4

const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    if (this.pizzas.find((pizza) => pizzaName === pizza)) {
      return onSuccess(pizzaName);
    } else return onError(pizzaName);
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  console.log(`Your order is accepted. Cooking pizza ${pizzaName}.`);
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  console.log(
    `Error! There is no pizza with a name ${error} in the assortment.`
  );
  return `Error! There is no pizza with a name ${error} in the assortment.`;
}

// Method calls with callbacks
pizzaPalace.order("Smoked", makePizza, onOrderError); //повертає  "Your order is accepted. Cooking pizza Smoked."
pizzaPalace.order("Four meats", makePizza, onOrderError); //повертає  "Your order is accepted. Cooking pizza Four meats."
pizzaPalace.order("Big Mike", makePizza, onOrderError); //повертає  "Error! There is no pizza with a name Big Mike in the assortment."
pizzaPalace.order("Vienna", makePizza, onOrderError); //повертає  "Error! There is no pizza with a name Vienna in the assortment."
