import {simpleRecordEncapsulate} from "../../src/chap07/encapsulate-record.js";
import {expect} from "chai";

describe('encapsulate-record', () => {
  it('simple record encapsulate', () => {
    const organization = {name: '애크미 구스베리', country: 'GB'};
    const newName = 'Acme Gooseberries';
    expect(simpleRecordEncapsulate(organization, newName)).equal('<h1>애크미 구스베리</h1>');
  });
});
