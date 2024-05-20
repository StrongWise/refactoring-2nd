function applyShipping(priceOrder, shippingMethod, quantity, discount) {
  const shippingPerCase = (priceOrder.basePrice > shippingMethod.discountThreshold)
    ? shippingMethod.discountedFree : shippingMethod.feePerCase;
  const shippingCost = quantity * shippingPerCase;
  const price = priceOrder.basePrice - discount + shippingCost;
  return price;
}

export function priceOrder(product, quantity, shippingMethod) {
	const basePrice = product.basePrice * quantity;
	const discount =
		Math.max(quantity - product.discountThreshold, 0) *
		product.basePrice *
		product.discountRate;

  const priceOrder = {basePrice:basePrice};
  const price = applyShipping(priceOrder, shippingMethod, quantity, discount);
  return price;
}

