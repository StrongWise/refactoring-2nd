import {mainFunc} from "../../src/chap11/replace-error-code-with-exception.js";
import {expect} from "chai";

describe('replace-error-code-with-exception', () => {
  it('status', () => {
    expect((mainFunc({country: '123'}))[0].errorCode).to.equal(-23);
    expect(mainFunc({country: 0})).empty;
  });
});
