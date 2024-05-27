export class Organization {
  constructor(data) {
    this._title = data.title;
    this._country = data.country;
  }

  get title() {
    return this._title;
  }

  set title(aName) {
    this._title = aName;
  }

  get country() {
    return this._country;
  }

  set country(aCountry) {
    this._country = aCountry;
  }
}

const organization = new Organization({name: 'Acme Gooseberries', country: 'GB'});
