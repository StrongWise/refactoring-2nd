import {TrackingInformation, Shipment} from "../../src/chap07/inline-class.js";
import {expect} from "chai";
import * as async_hooks from "async_hooks";

describe('inline-class', () => {
  it('check shipment TrackingInformation', () => {
    const request = {vendor: 'CJ 대한통운'};

    const aShipment = {trackingInformation: new TrackingInformation()}
    aShipment.trackingInformation.shippingCompany = request.vendor;
    aShipment.trackingInformation.trackingNumber = 1234;

    const shipment = new Shipment();
    shipment.trackingInformation = aShipment.trackingInformation;

    expect(shipment.trackingInfo).to.equal('CJ 대한통운: 1234');
  });
});
