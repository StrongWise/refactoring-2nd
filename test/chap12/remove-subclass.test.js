import {
  Male,
  createMale,
  createFemale,
  loadFromInput,
  Person,
  Female
} from "../../src/chap12/remove-subclass.js";
import {expect} from "chai";
describe('remove-subclass', () => {
  it('filter gender', () => {
    const people = [createMale('man'), createFemale('woman')];
    const numberOfMales = people.filter(p => p.isMale).length;
    expect(numberOfMales).to.equal(1);
  });

  it('loadFromInput', () => {
    const data = [
      {gender:'X', name:'people'},
      {gender:'M', name:'man'},
      {gender:'F', name:'woman'},
    ];
    const people = loadFromInput(data);
    expect(people[0] instanceof Person).true;
    expect(people[1] instanceof Male).true;
    expect(people[2] instanceof Female).true;
  });
});
