import {Order, Priority} from "../../src/chap07/replace-primitive-with-object.js";
import {expect} from "chai";

describe('replace-primitive-with-object', () => {
  it('Order priority filter', () => {
    const orders = []
    orders.push(new Order({priority: new Priority("high")}));
    orders.push(new Order({priority: new Priority("low")}));
    orders.push(new Order({priority: new Priority("rush")}));
    orders.push(new Order({priority: new Priority("high")}));

    const highPriorityCount = orders.filter(o => o.priority.higherThan(new Priority("normal"))).length;
    expect(highPriorityCount).to.equal(3);
  });
});
