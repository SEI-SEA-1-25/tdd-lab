const getOrderTotal = require("./get-order-total");

const stateTaxes = {
  NY: 5,
  CA: 8,
  WAS: 10,
};

const order1 = [
  {
    name: "Charmander",
    price: 8,
    shipping: 8,
  },

  {
    name: "Mew",
    price: 1,
    shipping: 5,
  },
];

const order2 = [
  {
    name: "Charmander",
    price: 8,
    shipping: 8,
  },

  {
    name: "Pikachu",
    price: 5,
    shipping: 3,
    quantity: 3,
  },
];

console.clear();

// For the tests we haven't completed yet, make sure to add good example orders above!

// We want tests for:

// 1. A basic order with price and shipping.
const result1 = getOrderTotal(order1);
if (result1 !== 22) {
  throw new Error(
    `Should have calculated a simple order. Got: ${result1}. Expected: 22.`
  );
}
// 2. An order where some items have quantity.
const result2 = getOrderTotal(order2);
if (result2 !== 40) {
  throw new Error(
    `Should have calculated an order where some items have quantity. Got: ${result2}. Expected: 40.`
  );
}

// 3. An order where state taxes are multiplied at the end.
//    Note that the best way to handle that is to take in another parameter to our function!
//    (It wouldn't make sense for the state to depend on the item's state, but the customer's.)

// 4. An order where some items are digital, i.e., have no shipping cost.

// 5. An order where the price PRE-shipping is above 100, in which case we want to remove shipping altogether.

console.log("All tests have passed!");
