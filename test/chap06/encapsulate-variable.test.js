import {expect} from "chai";
import {getDefaultOwner, setDefaultOwner} from "../../src/chap06/encapsulate-variable.js";

describe('encapsulate-variable', () => {
  it('getDefaultOwner', () => {
    const defaultOwner = getDefaultOwner();
    expect(defaultOwner.firstName).equal('마틴');
    expect(defaultOwner.lastName).equal('파울러');
  });
  it('setDefaultOwner', () => {
    setDefaultOwner({firstName: '마틴2', lastName: '파울러2'});
    const defaultOwner = getDefaultOwner();
    expect(defaultOwner.firstName).equal('마틴2');
    expect(defaultOwner.lastName).equal('파울러2');
  });
});
