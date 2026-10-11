// Implement cartTotal here. See README.md for the specification.
export function cartTotal(items, options = {}) {
  if (!items || items.length === 0) {
    return 0;
  }

  const { vatRate = 0, freeShipFrom = Infinity, shipFee = 0 } = options;

  let subtotal = 0;
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const price = item.price;
    const qty = item.qty;

    if (typeof price !== 'number' || price < 0) {
      throw new RangeError('bad price');
    }
    if (typeof qty !== 'number' || !Number.isInteger(qty) || qty <= 0) {
      throw new RangeError('bad qty');
    }

    subtotal += price * qty;
  }

  const vat = subtotal * vatRate;
  const shipping = subtotal >= freeShipFrom ? 0 : shipFee;

  return Math.round(subtotal + vat + shipping);
}
