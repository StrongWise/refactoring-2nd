import {acquireData} from "../../src/chap08/replace-loop-with-pipeline.js";
import assert from "node:assert";

describe('replace-loop-with-pipeline', () => {
  it('india filter', () => {
    const input = "office, country, telephone\n" +
      "Chicago, USA, +1 312 373 1000\n" +
      "Beijing, China, +86 4008 900 505 \n" +
      "Bangalore, India, +91 80 4064 9570 \n" +
      "Porto Alegre, Brazil, +55 51 3079 3550 \n" +
      "Chennai, India, +91 44 660 44766";

    assert.deepEqual(acquireData(input), [
      {city: 'Bangalore', phone: '+91 80 4064 9570'},
      {city: 'Chennai', phone: '+91 44 660 44766'}
    ]);
  });
});
