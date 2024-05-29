export function plumages(birds) {
	return new Map(birds.map(b => [b.name, plumage(b)]));
}
export function speeds(birds) {
	return new Map(birds.map(b => [b.name, airSpeedVelocity(b)]));
}

function plumage(bird) {
	switch (bird.type) {
		case '유럽 제비':
			return '보통이다';
		case '아프리카 제비':
			return bird.numberOfCoconuts > 2 ? '지쳤다' : '보통이다';
		case '노르웨이 파랑 앵무':
			return bird.voltage > 100 ? '그을렸다' : '예쁘다';
		default:
			return '알 수 없다';
	}
}

function airSpeedVelocity(bird) {
	switch (bird.type) {
		case '유럽 제비':
			return 35;
		case '아프리카 제비':
			return 40 - 2 * bird.numberOfCoconuts;
		case '노르웨이 파랑 앵무':
			return bird.isNailed ? 0 : 10 + bird.voltage / 10;
		default:
			return null;
	}
}

export function rating(voyage, history) {
	const vpf = voyageProfitFactor(voyage, history);
	const vr = voyageRisk(voyage);
	const chr = captainHistoryRisk(voyage, history);
	if (vpf * 3 > vr + chr * 2) return 'A';
	else return 'B';
}

export function voyageRisk(voyage) {
	let result = 1;
	if (voyage.length > 4) result += 2;
	if (voyage.length > 8) result += voyage.length - 8;
	if (['중공', '동인도'].includes(voyage.zone)) result += 4;
	return Math.max(result, 0);
}

function captainHistoryRisk(voyage, history) {
	let result = 1;
	if (history.length < 5) result += 4;
	result += history.filter(v => v.profit < 0).length;
	if (voyage.zone === '중공' && hasChina(history)) result -= 2;
	return Math.max(result, 0);
}

function hasChina(history) {
	return history.some(v => '중공' === v.zone);
}
function voyageProfitFactor(voyage, history) {
	let result = 2;
	if (voyage.zone === '중공') result += 1;
	if (voyage.zone === '동인도') result += 1;
	if (voyage.zone === '중공' && hasChina(history)) {
		result += 3;
		if (history.length > 10) result += 1;
		if (voyage.length > 12) result += 1;
		if (voyage.length > 18) result -= 1;
	} else {
		if (history.length > 8) result += 1;
		if (voyage.length > 14) result -= 1;
	}
	return result;
}
