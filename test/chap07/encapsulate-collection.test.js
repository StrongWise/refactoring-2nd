import {Course, Person, readBasicCourseNames} from "../../src/chap07/encapsulate-collection.js";
import {expect} from "chai";

describe('encapsulate-collection', () => {
  it('person setter', () => {
    const aPerson = new Person('StrongWise');
    const filename = '';
    let numAdvancedCourses = aPerson.courses.filter(c => c.isAdvanced).length;
    const basicCourseNames = readBasicCourseNames(filename);
    aPerson.courses = basicCourseNames.map(name => new Course(name, false));
    // for (const name of readBasicCourseNames(filename)) {
    //   aPerson.courses.push(new Course(name, false));
    // }

    const data = aPerson.courses;
    expect(data[0].name).to.equal('Korean');
    expect(data[1].name).to.equal('English');
    expect(data[2].name).to.equal('Math');
  });
  it('person addCourse', () => {
    const aPerson = new Person('StrongWise');

    for (const name of readBasicCourseNames()) {
      aPerson.courses.push(new Course(name, false));
    }

    aPerson.addCourse(new Course('History', false));
    expect(aPerson.courses[3].name).to.equal('History');
  });
  it('person removeCourse', () => {
    const aPerson = new Person('StrongWise');
    for (const name of readBasicCourseNames()) {
      aPerson.courses.push(new Course(name, false));
    }
    aPerson.removeCourse(aPerson.courses[1], () => {console.log('no')});
    expect(aPerson.courses[0].name).to.equal('Korean');
    expect(aPerson.courses[1].name).to.equal('Math');
  });
});
