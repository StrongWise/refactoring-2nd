import {AfricanSwallow, createBird} from "../../src/chap12/replace-subclass-with-delegate2.js";
import {expect} from "chai";

describe('replace-subclass-with-delegate2', () => {
  it('EuropeanSwallow', () => {
    const data = {type:'유럽 제비', name: '유럽', numberOfCoconuts: 3}
    const europeanSwallow = createBird(data);
    expect(europeanSwallow.airSpeedVelocity).to.equal(35);
    expect(europeanSwallow.name).to.equal('유럽');
    expect(europeanSwallow.plumage).to.equal('보통이다');
  });
  it('AfricanSwallow', () => {
    const data = {type:'아프리카 제비', name: '아프리카', numberOfCoconuts: 3}
    const africanSwallow = createBird(data);
    expect(africanSwallow.airSpeedVelocity).to.equal(34);
    expect(africanSwallow.name).to.equal('아프리카');
    expect(africanSwallow.plumage).to.equal('보통이다');
  });
  it('Nailed NorwegianBlueParrot', () => {
    const data = {type:'노르웨이 파랑 앵무', name: '노르웨이', numberOfCoconuts: 3, isNailed: true}
    const norwegianBlueParrot = createBird(data);
    expect(norwegianBlueParrot.airSpeedVelocity).to.equal(0);
    expect(norwegianBlueParrot.name).to.equal('노르웨이');
    expect(norwegianBlueParrot.plumage).to.equal('예쁘다');
  });
  it('Failed NorwegianBlueParrot', () => {
    const data = {type:'노르웨이 파랑 앵무', name: '노르웨이', numberOfCoconuts: 3, isNailed: false, voltage:300}
    const norwegianBlueParrot = createBird(data);
    expect(norwegianBlueParrot.airSpeedVelocity).to.equal(40);
    expect(norwegianBlueParrot.name).to.equal('노르웨이');
    expect(norwegianBlueParrot.plumage).to.equal('그을렸다');
  });
});
