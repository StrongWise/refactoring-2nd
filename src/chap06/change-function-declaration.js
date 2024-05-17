// 함수 이름을 너무 축약한 예
/**
 * @deprecated Use `circumference()` instead.
 * @param radius
 * @returns {number}
 */
export function circum(radius) {
	return 2 * Math.PI * radius;
}
// 바꿀 함수
export function circumference(radius) {
  return 2 * Math.PI * radius;
}
