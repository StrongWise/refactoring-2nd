export function plumages(birds) {
  return new Map(birds
    .map(b => createBird(b))
    .map(bird => [bird.name, bird.plumage]));
}

export function speeds(birds) {
  return new Map(birds
    .map(b => createBird(b))
    .map(bird => [bird.name, bird.airSpeedVelocity]));
}

export class Bird {
  constructor(birdObject) {
    Object.assign(this, birdObject);
  }

  get plumage() {
    return '알 수 없다';
  }

  get airSpeedVelocity() {
    return null;
  }
}

function createBird(bird) {
  switch (bird.type) {
    case '유럽 제비':
      return new EuropeanSwallow(bird);
    case '아프리카 제비':
      return new AfricanSwallow(bird);
    case '노르웨이 파랑 앵무':
      return new NorwegianBlueParrot(bird);
    default:
      return new Bird(bird);
  }
}

class EuropeanSwallow extends Bird {
  get plumage() {
    return '보통이다';
  }

  get airSpeedVelocity() {
    return 35;
  }
}

class AfricanSwallow extends Bird {
  get plumage() {
    return this.numberOfCoconuts > 2 ? '지쳤다' : '보통이다';
  }

  get airSpeedVelocity() {
    return 40 - 2 * this.numberOfCoconuts;
  }
}

class NorwegianBlueParrot extends Bird {
  get plumage() {
    return this.voltage > 100 ? '그을렸다' : '예쁘다';
  }

  get airSpeedVelocity() {
    return this.isNailed ? 0 : 10 + this.voltage / 10;
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
