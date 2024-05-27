import {Person, TelephoneNumber} from "../../src/chap09/change-reference-to-value.js";
import {expect} from "chai";
import assert from "node:assert";

describe('change-reference-to-value', () => {
  it('Person', () => {
    const person = new Person();
    person.officeAreaCode = '02';
    person.officeNumber = '1234-1234';
    expect(person.officeAreaCode).to.equal('02');
    expect(person.officeNumber).to.equal('1234-1234');
  });
  it('TelephoneNumber', () => {
    assert(new TelephoneNumber('02', '1234-5678')
      .equals(new TelephoneNumber('02', '1234-5678')));
  });
});
