export class Party {
	constructor() {
		this.monthlyCost = 1;
	}
}

export class Employee extends Party {
	get annualCost() {
		return this.monthlyCost * 12;
	}
}

export class Department extends Party {
	get totalAnnualCost() {
		return this.monthlyCost * 12;
	}
}

