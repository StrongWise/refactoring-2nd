import {expect} from 'chai';
import {Province, sampleProvinceData} from '../../src/chap04/province.js';
import {beforeEach, describe, it} from "mocha";
import assert from "node:assert";

describe('province', () => {
	let asia;
	beforeEach(() => {
		// beforeEach는 각각의 테스트 바로 전에 실행되어 asia를 초기화하므로 모든 테스트가 자신만의 새로운 asia를 사용하게 된다.
		asia = new Province(sampleProvinceData());
	});
	it('shortfall', () => {
    // assert.equal(asia.shortfall, 5);
    expect(asia.shortfall).equal(5);
	});
	it('profit', () => {
		expect(asia.profit).equal(230);
	});
  // 픽스처 수정하기
	it('change production', () => {
		asia.producers[0].production = 20;
		expect(asia.shortfall).equal(-6);
		expect(asia.profit).equal(292);
	});
  // 경계 조건 검사 : 수요가 없다.
	it('zero demand', () => {
		asia.demand = 0;
		expect(asia.shortfall).equal(-25);
		expect(asia.profit).equal(0);
	});
  // 경계 조건 검사 : 수요가 마이너스다.
	it('negative demand', () => {
		asia.demand = -1;
		expect(asia.shortfall).equal(-26);
		expect(asia.profit).equal(-10);
	});
  // 경계 조건 검사 : 수요 입력란이 비어있다.
	it('empty string demand', () => {
		asia.demand = '';
		expect(asia.shortfall).NaN;
		expect(asia.profit).NaN;
	});
});

// 경계 조건 검사 : 생산자가 없다.
describe('no producers', () => {
	let noProducers;
	beforeEach(() => {
		const data = {
			name: 'No producers',
			producers: [],
			demand: 30,
			price: 20,
		};
		noProducers = new Province(data);
	});
	it('shortfall', () => {
		expect(noProducers.shortfall).equal(30);
	});
	it('profit', () => {
		expect(noProducers.profit).equal(0);
	});
});

describe('string for producers', () => {
	it('should throw AssertionError', () => {
		const data = {
			name: 'String producers',
			producers: '',
			demand: 30,
			price: 20,
		};
		// const prov = new Province(data);
		// expect(prov.shortfall).equal(0);
    assert.throws(() => new Province(data), assert.AssertionError);
	});
});
