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
  if (inputValue > 50) inputValue = inputValue - 2;
	if (quantity > 100) inputValue = inputValue - 1;
	return inputValue;
}
