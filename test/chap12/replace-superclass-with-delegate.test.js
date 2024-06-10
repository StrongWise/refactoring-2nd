import {CatalogItem, Scroll} from "../../src/chap12/replace-superclass-with-delegate.js";
import {expect} from "chai";
import {DateTime} from "luxon";

describe('replace-superclass-with-delegate', () => {
  it('CatalogItem', () => {
    const catalogItem = new CatalogItem(1, 'item1', 'revered');
    const catalogItem2 = new CatalogItem(2, 'item2', 'tag2');
    expect(catalogItem.hasTag('revered')).true;
    expect(catalogItem2.hasTag('revered')).false;
  });
  it('Scroll ', () => {
    const scroll = new Scroll(3, DateTime.fromISO('2024-06-10'), 3
      , new CatalogItem(3, 'item3', 'revered'));
    expect(scroll.needCleaning(DateTime.fromISO('2022-07-10'))).true;
    expect(scroll.needCleaning(DateTime.fromISO('2022-07-11'))).false;

    const scroll2 = new Scroll(4, DateTime.fromISO('2024-06-11'), 3
      , new CatalogItem(4, 'item4', 'tag4'));
    expect(scroll2.needCleaning(DateTime.fromISO('2020-05-02'))).true;
    expect(scroll2.needCleaning(DateTime.fromISO('2020-05-03'))).false;
  });
});
