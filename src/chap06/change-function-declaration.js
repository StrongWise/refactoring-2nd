import assert from "node:assert";

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
  addReservation(customer, isPriority) {
    assert(isPriority === true || isPriority === false);
    this._reservations.push(customer);
  }
}

export function inNewEngland(stateCode) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode);
}
