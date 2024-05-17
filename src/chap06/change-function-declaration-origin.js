// 함수 이름을 너무 축약한 예
export function circum(radius) {
	return 2 * Math.PI * radius;
}
// 바꿀 함수
export function circumference(radius) {
  return 2 * Math.PI * radius;
}

export class Book {
  constructor() {
    this._reservations = [];
  }

  get reservations() {
    return this._reservations;
  }

  addReservation(customer) {
    this._reservations.push(customer);
  }
}
