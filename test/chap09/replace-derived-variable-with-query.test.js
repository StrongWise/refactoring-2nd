import {ProductionPlan} from "../../src/chap09/replace-derived-variable-with-query.js";
import {expect} from "chai";

describe('replace-derived-variable-with-query', () => {
  it('Production', () => {
    const productionPlan = new ProductionPlan({adjustments: [{amount:1000}], production: 10000});
    expect(productionPlan.production).to.equal(10000);

    productionPlan.applyAdjustment({amount: 2000});
    expect(productionPlan.production).to.equal(12000);
  });
});
