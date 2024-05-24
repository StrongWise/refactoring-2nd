export function call() {
  const pricingPlan = retrievePricingPlan();
  const order = retrieveOrder();
  let discountableUnits = Math.max(order.units - pricingPlan.discountThreshold, 0);
  let discount = discountableUnits * pricingPlan.discountFactor;
  if (order.isRepeat) discount += 20;
  let charge= pricingPlan.base + order.units * pricingPlan.unit;
  charge = charge - discount;
  chargeOrder(charge);

  return {charge, discount, discountableUnits}
}

function retrievePricingPlan() {
  return {base:1000, unit:20, discountThreshold: 10, discountFactor: 5}
}

function retrieveOrder() {
  return {units: 100, isRepeat: true}
}

function chargeOrder() {
}
