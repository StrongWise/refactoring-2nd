export function trackSummary(points) {
	const totalTime = calculateTime();
	const totalDistance = calculateDistance();
	const pace = totalTime / 60 / totalDistance;
	return { time: totalTime, distance: totalDistance, pace: pace };

	function calculateDistance() {
		let result = 0;
		for (let i = 1; i < points.length; i++) {
			result += distance(points[i - 1], points[i]);
		}
		return result;
	}
	function distance(p1, p2) {
    // 하버사인 공식(haversine formula)은 다음 사이트를 참고하자.
    // http://www.movable-type.co.uk/scripts/latlong.html
    const EARTH_RADIUS = 3959; // 단위: 마일(mile)
    const dLat = radians(p2.lat) - radians(p1.lat);
    const dLon = radians(p2.lon) - radians(p1.lon);
    const a = Math.pow(Math.sin(dLat / 2), 2)
        + Math.cos(radians(p2.lat))
        * Math.cos(radians(p1.lat))
        * Math.pow(Math.sin(dLon / 2), 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return EARTH_RADIUS * c;
  }
	function radians(degrees) {
    return degrees * Math.PI / 180;
  }
	function calculateTime() {
    return 10000;
  }
}

export class Account {
  constructor(accountType, daysOverdrawn) {
    this.type = accountType;
    this.daysOverdrawn = daysOverdrawn;
  }

  get bankCharge() { // 은행 이자 계산
    let result = 4.5;
    if (this.daysOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }

  get overdraftCharge() { // 초과 인출 이자 계산
    if (this.type.isPremium) {
      const baseCharge = 10;
      if (this.daysOverdrawn <= 7)
        return baseCharge;
      else
        return baseCharge + (this.daysOverdrawn - 7) * 0.85;
    } else
      return this.daysOverdrawn * 1.75;
  }
}
