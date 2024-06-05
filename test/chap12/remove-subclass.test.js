import {Male, createMale, createFemale} from "../../src/chap12/remove-subclass.js";
import {expect} from "chai";
describe('remove-subclass', () => {
  it('filter gender', () => {
    const people = [createMale('man'), createFemale('woman')];
    const numberOfMales = people.filter(p => p instanceof Male).length;
    expect(numberOfMales).to.equal(1);
  });
});
