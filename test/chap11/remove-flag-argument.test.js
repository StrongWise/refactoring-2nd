import {
  bookConcert,
  premiumBookConcert, regularDeliveryDate, deliveryDate,
  rushDeliveryDate
} from "../../src/chap11/remove-flag-argument.js";
import {expect} from "chai";
import {DateTime} from "luxon";

describe('remove-flag-argument', () => {
  it('bookConcert', () => {
    const customer = {}
    expect(premiumBookConcert(customer)).to.equal('Premium');
    expect(bookConcert(customer)).to.equal('Not Premium');
  });

  it('Delivery date', () => {
    let MAOrder = {
      deliveryState:'MA',
      placedOn: DateTime.fromISO('2024-06-01')
    }
    expect(rushDeliveryDate(MAOrder).toFormat('yyyy-MM-dd')).to.equal('2024-06-03');
    expect(regularDeliveryDate(MAOrder).toFormat('yyyy-MM-dd')).to.equal('2024-06-05');
    let NYOrder = {
      deliveryState:'NY',
      placedOn: DateTime.fromISO('2024-06-01')
    }
    expect(rushDeliveryDate(NYOrder).toFormat('yyyy-MM-dd')).to.equal('2024-06-04');
    expect(regularDeliveryDate(NYOrder).toFormat('yyyy-MM-dd')).to.equal('2024-06-05');
    let MEOrder = {
      deliveryState:'ME',
      placedOn: DateTime.fromISO('2024-06-01')
    }
    expect(rushDeliveryDate(MEOrder).toFormat('yyyy-MM-dd')).to.equal('2024-06-05');
    expect(regularDeliveryDate(MEOrder).toFormat('yyyy-MM-dd')).to.equal('2024-06-06');
    let NHOrder = {
      deliveryState:'NH',
      placedOn: DateTime.fromISO('2024-06-01')
    }
    expect(rushDeliveryDate(NHOrder).toFormat('yyyy-MM-dd')).to.equal('2024-06-04');
    expect(regularDeliveryDate(NHOrder).toFormat('yyyy-MM-dd')).to.equal('2024-06-06');
  });

  it('Delivery date 2', () => {
    let MAOrder = {
      deliveryState:'MA',
      placedOn: DateTime.fromISO('2024-06-01')
    }
    expect(deliveryDate(MAOrder, true).toFormat('yyyy-MM-dd')).to.equal('2024-06-03');
    expect(deliveryDate(MAOrder, false).toFormat('yyyy-MM-dd')).to.equal('2024-06-05');
    let NYOrder = {
      deliveryState:'NY',
      placedOn: DateTime.fromISO('2024-06-01')
    }
    expect(deliveryDate(NYOrder, true).toFormat('yyyy-MM-dd')).to.equal('2024-06-04');
    expect(deliveryDate(NYOrder, false).toFormat('yyyy-MM-dd')).to.equal('2024-06-05');
    let MEOrder = {
      deliveryState:'ME',
      placedOn: DateTime.fromISO('2024-06-01')
    }
    expect(deliveryDate(MEOrder, true).toFormat('yyyy-MM-dd')).to.equal('2024-06-05');
    expect(deliveryDate(MEOrder, false).toFormat('yyyy-MM-dd')).to.equal('2024-06-06');
    let NHOrder = {
      deliveryState:'NH',
      placedOn: DateTime.fromISO('2024-06-01')
    }
    expect(deliveryDate(NHOrder, true).toFormat('yyyy-MM-dd')).to.equal('2024-06-04');
    expect(deliveryDate(NHOrder, false).toFormat('yyyy-MM-dd')).to.equal('2024-06-06');
  });
});

