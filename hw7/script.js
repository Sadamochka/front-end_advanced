const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };
//  1
function getMyTaxes(salary) {
	return this.tax * salary;
}
console.log(getMyTaxes.call(ukraine, 2000));
// 2
function getMiddleTaxes() {
	return this.tax * this.middleSalary;
}
console.log(getMiddleTaxes.call(ukraine));
// 3
function getTotalTaxes() {
	return this.tax * this.middleSalary * this.vacancies;
}
console.log(getTotalTaxes.call(ukraine));
// 4
function getMySalary() {
	const min = 1500;
	const max = 2000;
	const salary = +(Math.random() * (max - min + 1) + min).toFixed(3);
	const taxes = +(this.tax * salary).toFixed(3);
	const profit = +(salary - taxes).toFixed(3);
	console.log({ salary, taxes, profit});
}
setInterval(getMySalary.bind(ukraine), 1600);
// 