function* createIdGenerator() {
	let id = 1;
	while (true) {
	  yield id;
	  id++;
	}
}

const idGenerator = createIdGenerator();
const idDisplay = document.getElementById('idBlock');

function generateId() {
	const nextId = idGenerator.next().value;
	idBlock.textContent = 'ID: ' + nextId;
}
generatorButton.addEventListener('click', generateId);



function* fontsGenerator(startSize) {
	let fontSize = startSize;
	while (true) {
		const direction = yield fontSize;
		if (direction === "MORE") {
			fontSize += 2;
		} else if (direction === "LESS") {
			fontSize -= 2;
		}
	}
}

const fontGenerator = fontsGenerator(10);
const moreButton = document.getElementById('moreButton');
const lessButton = document.getElementById('lessButton');
const textToChange = document.getElementById('idBlock');

function fontMore() {
	const nextSize = fontGenerator.next("MORE").value;
	textToChange.style.fontSize = nextSize + "px";
}
function fontLess() {
	const nextSize = fontGenerator.next("LESS").value;
	textToChange.style.fontSize = nextSize + "px";
}

moreButton.addEventListener('click', fontMore);
lessButton.addEventListener('click', fontLess);