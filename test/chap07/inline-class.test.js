import {TrackingInformation, Shipment} from "../../src/chap07/inline-class.js";
import {expect} from "chai";

describe('inline-class', () => {
  it('check shipment TrackingInformation', () => {
    const request = {vendor: 'CJ 대한통운', trackingNumber: 1234};

    const aShipment = new Shipment();
    aShipment.trackingInformation = new TrackingInformation();
    aShipment.trackingInformation.shippingCompany = request.vendor;
    aShipment.trackingInformation.trackingNumber = request.trackingNumber;

    expect(aShipment.trackingInfo).to.equal('CJ 대한통운: 1234');
  });
});
