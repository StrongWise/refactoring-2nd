export class CatalogItem {
  constructor(id, title, tags) {
    this._id = id;
    this._title = title;
    this._tags = tags;
  }
  get() {
    return this;
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  hasTag(arg) {
    return this._tags.includes(arg);
  }
}

export class Scroll {
  constructor(id, title, tags, dateLastCleaned, catalogID, catalog) {
    this._id = id
    this._catalogItem = catalog.get(catalogID);
    this._lastCleaned = dateLastCleaned;
  }

  get id() {
    return this._catalogItem._id;
  }

  get title() {
    return this._catalogItem._title;
  }

  hasTag(arg) {
    return this._catalogItem._tags.includes(arg);
  }

  needCleaning(targetDate) {
    const threshold = this.hasTag('revered') ? 700 : 1500;
    return this.daysSinceLastCleaning(targetDate) > threshold;
  }

  daysSinceLastCleaning(targetDate) {
    return this._lastCleaned.diff(targetDate, 'days').toObject().days;
  }
}
