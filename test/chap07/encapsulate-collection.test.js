import {Course, Person, readBasicCourseNames} from "../../src/chap07/encapsulate-collection.js";
import {expect} from "chai";

describe('encapsulate-collection', () => {
  let aPerson;
  beforeEach(() => {
    aPerson = new Person('StrongWise');
    aPerson.courses = readBasicCourseNames().map(name => new Course(name, false));
  });
  it('person setter', () => {
    expect(aPerson.courses[0].name).to.equal('Korean');
    expect(aPerson.courses[1].name).to.equal('English');
    expect(aPerson.courses[2].name).to.equal('Math');
  });
  it('person addCourse', () => {
    aPerson.addCourse(new Course('History', false));
    expect(aPerson.courses[3].name).to.equal('History');
  });
  it('person removeCourse', () => {
    aPerson.removeCourse(aPerson.courses[1], () => {console.log('no')});
    expect(aPerson.courses[0].name).to.equal('Korean');
    expect(aPerson.courses[1].name).to.equal('Math');
  });
});
