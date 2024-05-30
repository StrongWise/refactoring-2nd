export function alertForMiscreant(people) {
	for (const p of people) {
		if (p === '조커') {
			setOffAlarms();
			return;
		}
		if (p === '사루만') {
			setOffAlarms();
			return;
		}
	}
	return;
}

export function findMiscreant(people) {
	for (const p of people) {
		if (p === '조커') {
			return '조커';
		}
		if (p === '사루만') {
			return '사루만';
		}
	}
	return '';
}

function setOffAlarms() {
	console.log('setOffAlarms');
}
