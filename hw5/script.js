// 1
function getRandomArray(length, min, max) {
	let array = [];
	for (let i = 0; i < length; i++) {
		let random = Math.floor(Math.random() * (max - min +1)) + min;
		array.push(random);
	}
	return array;
}
const resultFirst = getRandomArray(21, 1, 99);
console.log(resultFirst);
// 3
function getAverage(...numbers) {
	let sum = numbers.reduce(function(a, number) {
		return a + number;
	}, 0);
	let average = sum / numbers.length;
	return average;
}
const resultThree = getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
console.log(resultThree); 
// 4
function getMedian(...numbers) {
	let = medianNumbers = numbers.filter(function(number) {
		return typeof number === 'number';
	}).sort(function(a, b) {
		return a - b;
	});
	let median;
	let middleIndex = Math.floor(medianNumbers.length / 2);
	if (medianNumbers.length % 2 === 0) {
		median = (madianNumbers[middleIndex - 1] + medianNumbers[middleIndex]) / 2;
	} else {
		median = medianNumbers[middleIndex];
	}
	return median;
}
const resultFour = getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log(resultFour);
// 5
function filterEvenNumbers(...numbers) {
	let filteredNumbers = numbers.filter(function(number) { 
		return number % 2 !== 0;
	});
	return filteredNumbers;
}
const resultFive = filterEvenNumbers(1, 2, 3, 4, 5, 6);
console.log(resultFive);
// 6
function countPositiveNumbers(...numbers){  
    const counted = numbers.filter(n => n > 0);
    return counted.length;
  }
  const resultSix = countPositiveNumbers(1, -2, 3, -4, -5, 6,);
  console.log(resultSix);
// 7
function getDividedByFive(...numbers) {
	let filteredNumberByFive = numbers.filter(function(number) {
		return number % 5 === 0;
	});
	return filteredNumberByFive;
}
let = resultSeven = getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log(resultSeven);
// 8
function replaceBadWords(string) {
    const badWords = string.split(' ');
  
    for (let i = 0; i < badWords.length; i++) {
      if (badWords[i].includes('shit')) {
        badWords[i] = badWords[i].replace('shit', '****');
      } else if (badWords[i].includes('fuck')) {
        badWords[i] = badWords[i].replace('fuck', '****');
      }
    }
  
    return badWords.join(' ');
  }
  
  const resultEight = replaceBadWords("Are you fucking kidding? Holy shit!");
  console.log(resultEight);

  