function applyShipping(priceOrder, shippingMethod) {
  const shippingPerCase = (priceOrder.basePrice > shippingMethod.discountThreshold)
    ? shippingMethod.discountedFree : shippingMethod.feePerCase;
  const shippingCost = priceOrder.quantity * shippingPerCase;
  const price = priceOrder.basePrice - priceOrder.discount + shippingCost;
  return price;
}

export function priceOrder(product, quantity, shippingMethod) {
	const basePrice = product.basePrice * quantity;
	const discount =
		Math.max(quantity - product.discountThreshold, 0) *
		product.basePrice *
		product.discountRate;

  const priceOrder = {basePrice: basePrice, quantity: quantity, discount: discount};
  const price = applyShipping(priceOrder, shippingMethod);
  return price;
}

