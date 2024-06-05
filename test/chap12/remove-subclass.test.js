import {Person, Male, Female} from "../../src/chap12/remove-subclass.js";
import {expect} from "chai";

describe('remove-subclass', () => {
  it('filter gender', () => {
    const people = [new Male('man'), new Female('woman')];
    const numberOfMales = people.filter(p => p instanceof Male).length;
    expect(numberOfMales).to.equal(1);
  });
});
