const points = [{ elevation: 1 },{ elevation: 2 },{ elevation: 10 }];

export let totalAscent = 0;
let totalTime = 0;
let totalDistance = 0;

calculateAscent();
calculateTime();
calculateDistance();
const pace = totalTime / 60 / totalDistance;
export function calculateAscent() {
	for (let i = 1; i < points.length; i++) {
		const verticalChange = points[i].elevation - points[i - 1].elevation;
		totalAscent += verticalChange > 0 ? verticalChange : 0;
	}
}

function calculateTime() {
  totalTime = 1;
}

function calculateDistance() {
  totalDistance = 10;
}
