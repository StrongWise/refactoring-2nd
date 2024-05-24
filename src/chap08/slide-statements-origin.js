export function call() {

  const pricingPlan = retrievePricingPlan();
  const order = retrieveOrder();
  const baseCharge = pricingPlan.base;
  let charge;
  const chargePerUnit = pricingPlan.unit;
  const units = order.units;
  let discount;
  charge = baseCharge + units * chargePerUnit;
  let discountableUnits = Math.max(units - pricingPlan.discountThreshold, 0);
  discount = discountableUnits * pricingPlan.discountFactor;
  if (order.isRepeat) discount += 20;
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

export function call2(availableResources, allocatedResource) {
  let result;
  if (availableResources.length === 0) {
    result = createResource();
    allocatedResource.push(result);
  } else {
    result = allocatedResource.pop();
    allocatedResource.push(result);
  }
  return result;
}
function createResource() {
  return {resource: 1}
}
