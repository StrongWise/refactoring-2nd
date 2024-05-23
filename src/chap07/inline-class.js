export class TrackingInformation {
}

export class Shipment {
	get trackingInfo() {
		return `${this._trackingInformation._shippingCompany}: ${this._trackingInformation._trackingNumber}`;
	}
	get trackingInformation() {
		return this._trackingInformation;
	}
	set trackingInformation(aTrackingInformation) {
		this._trackingInformation = aTrackingInformation;
	}
  get shippingCompany() {
		return this._trackingInformation._shippingCompany;
	}
	set shippingCompany(arg) {
		this._trackingInformation._shippingCompany = arg;
	}
	get trackingNumber() {
		return this._trackingInformation._trackingNumber;
	}
	set trackingNumber(arg) {
		this._trackingInformation._trackingNumber = arg;
	}
}
