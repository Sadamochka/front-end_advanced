const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


// 1
function getCouple(students) {
	const boys = ["Олександр", "Ігор", "Олексій"];
	const girls = ["Олена", "Іра", "Світлана"];
    let couples = [];
	
	for (let i = 0; i < students.length / 2; i++) {
		let couple = [boys[i], girls[i]];
		couples.push(couple);
	};
	return couples;
}
const getCouples = getCouple(students);
console.log(getCouples);

// 2
function getThemes(getCouples, themes) {
	let selectedWork = [];
	for (let i = 0; i < getCouples.length; i++) {
		let couple = getCouples[i];
		let textPair = couple.join(" і ");
		let selected = [textPair, themes[i]];
		selectedWork.push(selected);
	};
	return selectedWork;
}
const selectedWork = getThemes(getCouples, themes);
console.log(selectedWork);

// 3
function ratingsStudent(students, marks) {
	let rating = [];
	for (let i = 0; i < students.length; i++) {
		let mark = [students[i], marks[i]];
		rating.push(mark);
	}
	return rating;
}
const rating = ratingsStudent(students, marks);
console.log(rating);

// 4

function couplesMarks(getCouples) {
	let coupleOpinion = [];
	for (let i = 0; i < getCouples.length; i++) {
		let couple = getCouples[i];
		let textPair = couple.join(" і ");
		let randoms = Math.floor(Math.random() * 5 + 1);
		let Mark = [textPair, randoms];
		coupleOpinion.push(Mark);
	};
	return coupleOpinion;
}
const randomMark = couplesMarks(getCouples);
console.log(randomMark);

