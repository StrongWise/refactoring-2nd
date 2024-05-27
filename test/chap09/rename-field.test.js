import {Organization} from "../../src/chap09/rename-field.js";

describe('rename-field', () => {
  it('should ', () => {
    const organization = new Organization({name: 'Acme Gooseberries', country: 'GB'});
    console.log(organization)

  });
});
