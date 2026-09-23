function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice) {
  const total = quantity * basePrice;

  if(quantity >= 5) {
    return total * 0.9;
  }

  return Math.floor(total);
}

module.exports = { isValidQuantity, calculateTicketPrice };
