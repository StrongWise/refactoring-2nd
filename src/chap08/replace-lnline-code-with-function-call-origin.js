export function call(states) {
  let appliesToMass = false;
  for (const s of states) {
    if (s === "MA") appliesToMass = true;
  }
  return appliesToMass;
}
