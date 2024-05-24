import {expect} from 'chai';
import {photoDiv, renderPerson} from "../../src/chap08/move-statements-into-function.js";

describe('move-statements-into-function', () => {
  const aPerson = {
    name: "Alex",
    photo: {
      title: "holiday",
      location: "Seoul",
      date: new Date('2024-05-24'),
      src: "/img.jpg"
    }
  };

  it('photoDiv', () => {
    expect(photoDiv(aPerson.photo)).to.equal('<div>\n<p>제목: holiday</p>\n<p>위치: Seoul</p>\n<p>날짜: Fri May 24 2024</p>\n</div>');
  });
  it('renderPerson', () => {
    expect(renderPerson(null, aPerson)).to.equal('<p>Alex</p>\n<img src="/img.jpg" alt=""/>\n<p>제목: holiday</p>\n<p>위치: Seoul</p>\n<p>날짜: Fri May 24 2024</p>');
  });
});
