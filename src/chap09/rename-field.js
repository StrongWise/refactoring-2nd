export class Organization {
  constructor(data) {
    this._title = (data.title !== undefined) ? data.title : data.name;
    this._country = data.country;
  }

  get name() {
    return this._title;
  }

  set name(aName) {
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
