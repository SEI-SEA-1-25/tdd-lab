const getOrderTotal = (order) => {
  let total = 0;
  for (const item of order) {
    let quantity = 1;
    if (item.quantity) {
      quantity = item.quantity;
    }

    total += (item.price + item.shipping) * quantity;
  }

  return total;
};

module.exports = getOrderTotal;
