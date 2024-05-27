import {findYoungestAgeAndCalculateTotalSalary} from "../../src/chap08/split-loop.js";
import {expect} from "chai";

describe('split-loop', () => {
  it('findYoungestAgeAndCalculateTotalSalary', () => {
    const people = [
      {
        age: 33,
        salary: 3000,
      },
      {
        age: 55,
        salary: 5000,
      },
      {
        age: 33,
        salary: 3000,
      },
      {
        age: 22,
        salary: 2000,
      },
      {
        age: 44,
        salary: 4000,
      },
    ]

    expect(findYoungestAgeAndCalculateTotalSalary(people)).to.equal('youngestAge: 22, totalSalary: 17000');
  });
});
