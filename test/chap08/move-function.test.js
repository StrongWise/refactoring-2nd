import {Account, trackSummary, AccountType} from "../../src/chap08/move-function.js";
import assert from "node:assert";
import {expect} from "chai";

describe('move-function', () => {
  describe('trackSummary', () => {
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

  describe('Account', () => {
    it('has bankCharge of 4.5 when daysOverdrawn is 0', () => {
      expect(new Account(new AccountType(true), 0).bankCharge).to.equal(4.5);
      expect(new Account(new AccountType(false), 0).bankCharge).to.equal(4.5);
    });

    it('has bankCharge more than 4.5 when daysOverdrawn is more than 0', () => {
      expect(new Account(new AccountType(true), 1).bankCharge).to.equal(14.5);
      expect(new Account(new AccountType(false), 1).bankCharge).to.equal(6.25);
    });

    it('has no overdraftCharge when no overdrawn for non premium', () => {
      expect(new Account(new AccountType(false), 0).overdraftCharge).to.equal(0);
    });

    it('has a basis overdraftCharge even when no overdrawn for non premium', () => {
      expect(new Account(new AccountType(true), 0).overdraftCharge).to.equal(10);
    });
  });
});
