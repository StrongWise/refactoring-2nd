import {expect} from "chai";
import {defaultOwner} from "../../src/chap06/encapsulate-variable.js";

describe('encapsulate-variable', () => {
  it('get spaceship owner', () => {
    const spaceship = {owner: {}};
    spaceship.owner = defaultOwner;
    expect(spaceship.owner.firstName).equal('마틴');
    expect(spaceship.owner.lastName).equal('파울러');
  });
  it('set spaceship owner', () => {
    const spaceship = {owner: {}};
    let testDefaultOwner = defaultOwner;
    testDefaultOwner = {firstName: '레베카', lastName: '파슨스'};
    spaceship.owner = testDefaultOwner;
    expect(spaceship.owner.firstName).equal('레베카');
    expect(spaceship.owner.lastName).equal('파슨스');
  });
});
