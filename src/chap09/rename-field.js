export class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }

  get name() {
    return this._name;
  }

  set name(aName) {
    this._name = aName;
  }

  get country() {
    return this._country;
  }

  set country(aCountry) {
    this._country = aCountry;
  }
}

const organization = new Organization({name: 'Acme Gooseberries', country: 'GB'});
