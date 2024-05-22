import {Order} from "../../src/chap07/replace-primitive-with-object.js";
import {expect} from "chai";

describe('replace-primitive-with-object', () => {
  it('Order priority filter', () => {
    const orders = []
    orders.push(new Order({priority: "high"}));
    orders.push(new Order({priority: "row"}));
    orders.push(new Order({priority: "rush"}));
    orders.push(new Order({priority: "high"}));

    const highPriorityCount = orders.filter(o => "high" === o.priorityString || "rush" === o.priorityString).length;
    expect(highPriorityCount).to.equal(3);
  });
});
