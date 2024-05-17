import {expect} from "chai";
import {Book, circumference, inNewEngland} from "../../src/chap06/change-function-declaration.js";

describe('change-function-declaration', () => {
  it('circumference', () => {
    const radius = 3;
    expect(circumference(radius)).equal(2 * Math.PI * radius);
  })
  it('Book', () => {
    const book = new Book();
    book.addReservation({name: 'StrongWise', date: '20240517'}, false);
    expect(book.reservations[0].name).equal('StrongWise');
    expect(book.reservations[0].date).equal('20240517');
  })
  it('inNewEngland', () => {
    const customer = {address: {state: 'VT'}};
    expect(inNewEngland(customer)).true;
  })
  it('inNewEnglandCustomerFiltering', () => {
    const customers = [{address: {state: 'VT'}}, {address: {state: 'NY'}},
      {address: {state: 'RI'}}, {address: {state: 'CA'}}];
    const newEnglanders = customers.filter(c => inNewEngland(c));
    expect(newEnglanders.length).equal(2);
  })
})
