export function distanceTravelled(scenario, time) {
	let result;
	const primaryAcceleration = scenario.primaryForce / scenario.mass;
	let primaryTime = Math.min(time, scenario.delay);
	result = 0.5 * primaryAcceleration * primaryTime * primaryTime;
	let secondaryTime = time - scenario.delay;
	if (secondaryTime > 0) {
		let primaryVelocity = primaryAcceleration * scenario.delay;
		const secondaryAcceleration = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
		result += primaryVelocity * secondaryTime + 0.5 * secondaryAcceleration * secondaryTime;
	}
	return result;
}
export function discount(inputValue, quantity) {
  let result = inputValue
  if (inputValue > 50) result = result - 2;
	if (quantity > 100) result = result - 1;
	return result;
}
