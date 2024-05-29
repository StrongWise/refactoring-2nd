import {plumages, rating, speeds} from "../../src/chap10/replace-conditional-with-polymorphism.js";
import {expect} from "chai";

describe('replace-conditional-with-polymorphism', () => {
  const birds = [
    {
      name: '기본 유럽 제비',
      type: '유럽 제비',
      numberOfCoconuts: 0,
      voltage: 100,
      isNailed: false
    },
    {
      name: '보통 아프리카 제비',
      type: '아프리카 제비',
      numberOfCoconuts: 0,
      voltage: 100,
      isNailed: false
    },
    {
      name: '지친 아프리카 제비',
      type: '아프리카 제비',
      numberOfCoconuts: 4,
      voltage: 100,
      isNailed: false
    },
    {
      name: '예쁜 노르웨이 파랑 앵무',
      type: '노르웨이 파랑 앵무',
      numberOfCoconuts: 0,
      voltage: 90,
      isNailed: false
    },
    {
      name: '그을린 노르웨이 파랑 앵무',
      type: '노르웨이 파랑 앵무',
      numberOfCoconuts: 0,
      voltage: 400,
      isNailed: false
    },
    {
      name: '까치',
      type: '까치',
      numberOfCoconuts: 0,
      voltage: 100,
      isNailed: false
    }
  ];
  it('plumages', () => {
    const plumageMap = plumages(birds);
    expect(plumageMap.get('기본 유럽 제비')).to.equal('보통이다');
    expect(plumageMap.get('보통 아프리카 제비')).to.equal('보통이다');
    expect(plumageMap.get('지친 아프리카 제비')).to.equal('지쳤다');
    expect(plumageMap.get('예쁜 노르웨이 파랑 앵무')).to.equal('예쁘다');
    expect(plumageMap.get('그을린 노르웨이 파랑 앵무')).to.equal('그을렸다');
    expect(plumageMap.get('까치')).to.equal('알 수 없다');
  });
  it('speeds', () => {
    const speedMap = speeds(birds);
    expect(speedMap.get('기본 유럽 제비')).to.equal(35);
    expect(speedMap.get('보통 아프리카 제비')).to.equal(40);
    expect(speedMap.get('지친 아프리카 제비')).to.equal(32);
    expect(speedMap.get('예쁜 노르웨이 파랑 앵무')).to.equal(19);
    expect(speedMap.get('그을린 노르웨이 파랑 앵무')).to.equal(50);
    expect(speedMap.get('까치')).null;
  });

  it('rating', () => {
    expect(rating({zone: '중공', length: 15}, [{zone: '중공'},{},{},{},{},{},{},{},{},{},{}])).to.equal('A');
    expect(rating({zone: '동인도', length: 20}, [{zone: '중공'}])).to.equal('B');
  });
});
