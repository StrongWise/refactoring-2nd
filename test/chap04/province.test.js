import { assert } from 'chai';
import { describe, it } from 'mocha';

import {Province, sampleProvinceData} from '../../src/chap04/province.js';

describe('province', () => {
	it('shortfall', () => {
    const asia = new Province(sampleProvinceData());
		assert.equal(asia.shortfall, 5)
	});
});
