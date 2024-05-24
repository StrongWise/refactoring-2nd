import {call} from "../../src/chap08/replace-lnline-code-with-function-call.js";
import {expect} from "chai";

describe('replace-lnline-code-with-function-call', () => {
  it('true', () => {
    const states = ["MA", "NOT MA"];
    expect(call(states)).true;
  });
  it('false', () => {
    const states = ["NOT MA"];
    expect(call(states)).false;
  });
});
