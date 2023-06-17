// 1
function getMaxDigit(number) {
	const numb = String(number).split('');
	let maxValue;
	for (let i = 0; i < numb.length; i++) {
		if (maxValue === undefined) {
			maxValue = numb[i];
		} 
        else if (numb[i] > maxValue) {
			maxValue = numb[i];
		}}
	return Number(maxValue);
}
// 3
function firstBigLetter(name) {
	if (typeof name !== 'string') {
		alert('Not a correct');
	}
	const firstBigLetterName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
	return firstBigLetterName;
}
// 4
function sum(cash, tax = 19.5) {
	let money = (cash * (100 - tax)) / 100;
	return money;
}
// 5
function randomNumber(N, M) {
	return Number((Math.random() * (M - N) + N).toFixed(0));
}
// 9
function getRandomPassword(length = 8) {
	let password = '';
	for (let i = 0; i < length; i++) {
		const randomPassword = Math.floor(Math.random() * 10);
		password += randomPassword;
	}
	return password;
}
// 10
function deleteLatter(letter, word) {
	const delLetter = new RegExp(letter, 'gi');
	return word.replace(delLetter, '');
}
// 12
function deleteDuplicateLetter(word) {
	const duplicateLetter = word.toLowerCase().replace(/[^а-яa-z]/g, '');
	let result = '';
	for (let i = 0; i < duplicateLetter.length; i++) {
		const letter = duplicateLetter[i];
		if (duplicateLetter.indexOf(letter) === duplicateLetter.lastIndexOf(letter)) {
			result += letter;
		}
	}
	return result;
}
console.log(`
1:   ${getMaxDigit(1754383)}
3:   ${firstBigLetter('gevoRg')}
4:   ${sum(3000)}
5:   ${randomNumber(1, 10)}
9:   ${getRandomPassword(8)}
10:  ${deleteLatter('a', 'blablabla')}
12:  ${deleteDuplicateLetter('hello, how are you?')}
`);
