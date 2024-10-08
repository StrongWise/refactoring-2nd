function applyShipping(priceOrder, shippingMethod) {
  const shippingPerCase = (priceOrder.basePrice > shippingMethod.discountThreshold)
    ? shippingMethod.discountedFree : shippingMethod.feePerCase;
  const shippingCost = priceOrder.quantity * shippingPerCase;
  return priceOrder.basePrice - priceOrder.discount + shippingCost;
}

function calculatePricingData(product, quantity) {
  const basePrice = product.basePrice * quantity;
  const discount = Math.max(quantity - product.discountThreshold, 0)
    * product.basePrice * product.discountRate;
  return {basePrice: basePrice, quantity: quantity, discount: discount};
}

export function priceOrder(product, quantity, shippingMethod) {
  const priceOrder = calculatePricingData(product, quantity);
  return applyShipping(priceOrder, shippingMethod);
}

