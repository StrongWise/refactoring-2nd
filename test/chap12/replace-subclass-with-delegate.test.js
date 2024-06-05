import {
  createBooking,
  createPremiumBooking,
} from "../../src/chap12/replace-subclass-with-delegate.js";
import {expect} from "chai";

describe('replace-subclass-with-delegate', () => {
  it('PeakDay Booking', () => {
    const show = {talkback: true, price: 1000}
    const date = new Date('2024-06-05');
    const booking = createBooking(show, date);
    expect(booking.basePrice).to.equal(1150);
    expect(booking.isPeakDay).true
    expect(booking.hasTalkback).false;
  });
  it('not PeakDay Booking', () => {
    const show = {talkback: true, price: 1000}
    const date = new Date('2024-05-05');
    const booking = createBooking(show, date);
    expect(booking.basePrice).to.equal(1000);
    expect(booking.isPeakDay).false
    expect(booking.hasTalkback).true;
  });

  it('PeakDay PremiumBooking', () => {
    const show = {talkback: true, price: 1000}
    const date = new Date('2024-06-05');
    const extras = {premiumFee: 500, dinner: true}
    const premiumBooking = createPremiumBooking(show, date, extras);
    expect(premiumBooking.basePrice).to.equal(1650);
    expect(premiumBooking.isPeakDay).true;
    expect(premiumBooking.hasDinner).false;
  });
  it('not PeakDay PremiumBooking', () => {
    const show = {talkback: true, price: 1000}
    const date = new Date('2024-05-05');
    const extras = {premiumFee: 500, dinner: true}
    const premiumBooking = createPremiumBooking(show, date, extras);
    expect(premiumBooking.basePrice).to.equal(1500);
    expect(premiumBooking.isPeakDay).false;
    expect(premiumBooking.hasDinner).true;
  });
});
