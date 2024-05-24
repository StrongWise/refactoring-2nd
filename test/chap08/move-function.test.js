import {trackSummary} from "../../src/chap08/move-function.js";
import assert from "node:assert";

describe('move-function', () => {
  const seoul = {
    lat: 37.532600,
    lon: 127.024612
  };

  const busan = {
    lat: 35.166668,
    lon: 129.066666
  };
  const incheon = {
    lat: 37.456257,
    lon: 126.705208
  };

  it('calculate distance, pace and time between two points', () => {
    assert.deepEqual(trackSummary([seoul, busan]), {
      distance: 199.08699875378872,
      pace: 0.837154950900554,
      time: 10000
    });
  });
  it('calculate distance, pace and time between three points', () => {
    assert.deepEqual(trackSummary([incheon, seoul, busan]), {
      distance: 217.3749542210644,
      pace: 0.7667243324507901,
      time: 10000
    });
  });
});
