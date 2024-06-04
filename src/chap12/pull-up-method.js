export class Party {
	constructor() {
		this.monthlyCost = 1;
	}
	get annualCost() {
		return this.monthlyCost * 12;
	}
}

export class Employee extends Party {
}

export class Department extends Party {
}

