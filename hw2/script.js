let N = Math.round(parseFloat(prompt('Write the first number', '')));
while (isNaN(N)){N = Math.round(parseFloat(prompt('Write the first number', '')));
}

let M = Math.round(parseFloat(prompt('Write second number', '')));
while (isNaN(M)) {M = Math.round(parseFloat(prompt('Write second number', '')));
}

let removeEven = confirm('Remove even numbers?');
let result = 0;

for (let did = N; did <= M; did++) {
	if (removeEven && did % 2 === 0) {
		continue;
	}
	result += did;
}
console.log('The result: ', result, '!')