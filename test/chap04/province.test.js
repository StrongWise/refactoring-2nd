import { assert } from 'chai';

import {Province, sampleProvinceData} from '../../src/chap04/province.js';

describe('province', () => {
	const asia = new Province(sampleProvinceData()); // 이렇게 하면 안됨
	it('shortfall', () => {
    const asia = new Province(sampleProvinceData()); // 이렇게 하면 안됨
		assert.equal(asia.shortfall, 5)
	});
});
