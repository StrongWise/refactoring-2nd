import {findMiscreant} from "../../src/chap10/replace-control-flag-with-break.js";
import {expect} from "chai";

describe('replace-control-flag-with-break', () => {
  it('find miscreant', () => {
    expect(findMiscreant([])).false;
    expect(findMiscreant([''])).false;
    expect(findMiscreant(['조커'])).true;
    expect(findMiscreant(['베트맨'])).false;
    expect(findMiscreant(['','사루만'])).true;
  });
});
