import {expect} from "chai";
import {Book, circumference} from "../../src/chap06/change-function-declaration.js";

describe('change-function-declaration', () => {
  it('circumference', () => {
    const radius = 3;
    expect(circumference(radius)).equal(2 * Math.PI * radius);
  })
  it('Book', () => {
    const book = new Book();
    book.addReservation({name:'StrongWise', date: '20240517'})
    expect(book.reservations[0].name).equal('StrongWise');
    expect(book.reservations[0].date).equal('20240517');
  })
})
