import { expect } from 'chai';
import {Province, sampleProvinceData} from '../../src/chap04/province.js';

describe('province', () => {
	let asia;
	beforeEach(() => {
		// beforeEach는 각각의 테스트 바로 전에 실행되어 asia를 초기화하므로 모든 테스트가 자신만의 새로운 asia를 사용하게 된다.
		asia = new Province(sampleProvinceData());
	});
	it('shortfall', () => {
    expect(asia.shortfall).equal(5);
	});
	it('profit', () => {
		expect(asia.profit).equal(230);
	});
});
