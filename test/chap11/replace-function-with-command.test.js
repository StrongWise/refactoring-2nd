import {score} from "../../src/chap11/replace-function-with-command.js";
import {expect} from "chai";

describe('replace-function-with-command', () => {
  it('score', () => {
    const result = score({originState: 'A'}, {isSmoker: true}, {
      stateWithLowCertification: (originState) => {return originState === 'A'}
    });
    expect(result).to.equal(-10);
  });
});
