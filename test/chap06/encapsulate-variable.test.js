import {expect} from "chai";
import {defaultOwner, setDefaultOwner} from "../../src/chap06/encapsulate-variable.js";

describe('encapsulate-variable', () => {
  let spaceship;
  beforeEach(() => {
    spaceship = {owner: {}};
    setDefaultOwner({firstName: '마틴', lastName: '파울러'});
  })
  it('get spaceship owner', () => {
    spaceship.owner = defaultOwner();
    expect(spaceship.owner.firstName).equal('마틴');
    expect(spaceship.owner.lastName).equal('파울러');
  });
  it('set spaceship owner', () => {
    setDefaultOwner({firstName: '레베카', lastName: '파슨스'});
    spaceship.owner = defaultOwner();
    expect(spaceship.owner.firstName).equal('레베카');
    expect(spaceship.owner.lastName).equal('파슨스');
  });
  it('value encapsulate', () => {
    const owner1 = defaultOwner();
    expect(owner1.lastName).equal('파울러');
    const owner2 = defaultOwner();
    owner2.lastName = '파슨스';
    expect(owner1.lastName).equal('파울러');
  });
});
