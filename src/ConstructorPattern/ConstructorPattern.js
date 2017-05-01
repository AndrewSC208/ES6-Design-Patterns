/*
* constructor pattern:
*/
class Car {
	constructor(opts) {
		this.model = opts.model;
		this.year = opts.year;
		this.miles = opts.miles;
	}

	toString() {
		return `${this.model} has driven ${this.miles} miles`;
	}

}

export let civic = new Car({
	model: 'Honda',
	year: '2001',
	miles: 50000
});

console.group('Constructor Pattern');
console.log(civic.toString());
console.groupEnd();