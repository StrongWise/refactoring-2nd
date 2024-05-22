import {Person} from "../../src/chap07/extract-class.js";
import {expect} from "chai";

describe('extract-class', () => {
  it('', () => {
    const person = new Person();
    person.name = 'StrongWise';
    person.officeAreaCode = '02';
    person.officeNumber = '1234-5678';
    expect(person.telephoneNumber).to.equal('(02) 1234-5678');
  });
});
