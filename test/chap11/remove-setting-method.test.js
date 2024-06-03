import {Person} from "../../src/chap11/remove-setting-method.js";
import {expect} from "chai";

describe('remove-setting-method', () => {
  it('Person', () => {
    const martin = new Person('1234');
    martin.name = '마틴';

    expect(martin.name).to.equal('마틴');
    expect(martin.id).to.equal('1234');
  });
});
