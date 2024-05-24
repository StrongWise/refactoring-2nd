import {renderPerson, listRecentPhotos} from "../../src/chap08/move-statements-to-callers.js";
import chai, {expect} from "chai";
import spies from 'chai-spies';

chai.use(spies);
describe('move-statements-to-callers', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = chai.spy.on(process.stdout, 'write');
  });
  afterEach(() => {
    chai.spy.restore(process.stdout, 'write');
  });

  const today = new Date();
  const oldDay = new Date().getDate() - 8;
  it('renderPerson', () => {
    renderPerson(process.stdout, {name: 'a', photo: {title: 'photo1', date: today, location: 'Seoul'}});
    expect(consoleLogSpy).to.have.been.called.exactly(5);
    expect(consoleLogSpy).to.have.been.called.with('<p>a</p>\n');
    expect(consoleLogSpy).to.have.been.called.with('<p>제목: photo1</p>\n');
    expect(consoleLogSpy).to.have.been.called.with('<p>날짜: '+today.toDateString()+'</p>\n');
    expect(consoleLogSpy).to.have.been.called.with('<p>위치: Seoul</p>\n');
  });
  it('listRecentPhotos recentDateCutoff', () => {
    listRecentPhotos(process.stdout, [{title: 'photo1', date: oldDay, location: 'Seoul'},
      {title: 'photo2', date: today, location: 'Seoul'}]);
    expect(consoleLogSpy).to.have.been.called.exactly(5);
    expect(consoleLogSpy).to.have.been.called.with('<div>\n');
    expect(consoleLogSpy).to.have.been.called.with('<p>제목: photo2</p>\n');
    expect(consoleLogSpy).to.have.been.called.with('<p>날짜: '+today.toDateString()+'</p>\n');
    expect(consoleLogSpy).to.have.been.called.with('<p>위치: Seoul</p>\n');
    expect(consoleLogSpy).to.have.been.called.with('</div>\n');
  });
});
