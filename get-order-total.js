const stateTaxes = {
  NY: 5,
  CA: 8,
  WAS: 10,
};

const getOrderTotal = (order, state) => {
  let total = 0;
  for (const item of order) {
    let quantity = 1;
    if (item.quantity) {
      quantity = item.quantity;
    }

    total += item.price * quantity;
  }

  if (total <= 100) {
    for (const item of order) {
      let quantity = 1;
      if (item.quantity) {
        quantity = item.quantity;
      }

      if (item.shipping) {
        total += item.shipping * quantity;
      }
    }
  }

  let taxMultiplier = 1;
  if (state) {
    taxMultiplier = stateTaxes[state] / 100 + 1;
  }

  return Math.floor(total * taxMultiplier * 100) / 100;
};

module.exports = getOrderTotal;
