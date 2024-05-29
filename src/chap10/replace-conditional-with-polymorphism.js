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
  return createRating(voyage, history).value;
}

export class Rating {
  constructor(voyage, history) {
    this.voyage = voyage;
    this.history = history;
  }

  get value() {
    const vpf = this.voyageProfitFactor;
    const vr = this.voyageRisk;
    const chr = this.captainHistoryRisk;
    // console.log('voyageProfitFactor > ', vpf);
    // console.log('voyageRisk > ', vr);
    // console.log('captainHistoryRisk > ', chr);
    // console.log('result > ', vpf * 3 > vr + chr * 2 ? 'A' : 'B');
    if (vpf * 3 > vr + chr * 2) return 'A';
    else return 'B';
  }

  get voyageRisk() {
    let result = 1;
    if (this.voyage.length > 4) result += 2;
    if (this.voyage.length > 8) result += this.voyage.length - 8;
    if (['중공', '동인도'].includes(this.voyage.zone)) result += 4;
    return Math.max(result, 0);
  }

  get captainHistoryRisk() {
    let result = 1;
    if (this.history.length < 5) result += 4;
    result += this.history.filter(v => v.profit < 0).length;
    return Math.max(result, 0);
  }

  get voyageProfitFactor() {
    let result = 2;

    if (this.voyage.zone === '중공') result += 1;
    if (this.voyage.zone === '동인도') result += 1;
    result += this.voyageAndHistoryLengthFactor;
    return result;
  }

  get voyageAndHistoryLengthFactor() {
    let result = 0;
    if (this.history.length > 8) result += 1;
    if (this.voyage.length > 14) result -= 1;
    return result;
  }

  get hasChinaHistory() {
    return this.history.some(v => '중공' === v.zone);
  }
}

function createRating(voyage, history) {
  if (voyage.zone === '중공' && history.some(v => '중공' === v.zone)) {
    return new ExperiencedChinaRating(voyage, history);
  } else {
    return new Rating(voyage, history);
  }
}

class ExperiencedChinaRating extends Rating {
  get captainHistoryRisk() {
    const result = super.captainHistoryRisk - 2;
    return Math.max(result, 0);
  }

  get voyageAndHistoryLengthFactor() {
    let result = 0;
    result += 3;
    if (this.history.length > 10) result += 1;
    if (this.voyage.length > 12) result += 1;
    if (this.voyage.length > 18) result -= 1;
    return result;
  }
}
