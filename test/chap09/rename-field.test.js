import {Organization} from "../../src/chap09/rename-field.js";
import assert from "node:assert";

describe('rename-field', () => {
  it('should ', () => {
    const organization = new Organization({name: 'Acme Gooseberries', country: 'GB'});
    console.log(organization);
  });
  it('should ', () => {
    const organization = new Organization({title: 'Acme Gooseberries', country: 'GB'});
    console.log(organization);
  });
});
