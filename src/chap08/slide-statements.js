export function call() {
  const pricingPlan = retrievePricingPlan();
  const order = retrieveOrder();
  const baseCharge = pricingPlan.base;
  const chargePerUnit = pricingPlan.unit;

  const units = order.units;
  let discountableUnits = Math.max(units - pricingPlan.discountThreshold, 0);

  let discount;
  discount = discountableUnits * pricingPlan.discountFactor;
  if (order.isRepeat) discount += 20;

  let charge;
  charge = baseCharge + units * chargePerUnit;

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
