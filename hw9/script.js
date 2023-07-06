function generateBlocks() {
	const container = document.getElementById("container");

	for (let i = 0; i < 25; i++) {
	  const cube = document.createElement("div");
	  cube.classList.add("cube");
	  cube.style.backgroundColor = getRandomColor();
 
	  const row = Math.floor(i / 5);
	  let rowContainer = container.querySelector(`#row-${row}`);
 
	  if (!rowContainer) {
		 rowContainer = document.createElement("div");
		 rowContainer.classList.add("row");
		 rowContainer.id = `row-${row}`;
		 container.appendChild(rowContainer);
	  }
 
	  rowContainer.appendChild(cube);
	}
}
const letters = "0123456789abcdef";

function getRandomColor() {
	let color = "#";
	for (let i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function generateBlocksInterval() {
	generateBlocks();
	setInterval(changeColors, 1000);
}

function changeColors() {
	const cubes = document.getElementsByClassName("cube");
	for (let i = 0; i < cubes.length; i++) {
	  cubes[i].style.backgroundColor = getRandomColor();
	}
}

document.getElementById("container").innerHTML = "";
generateBlocksInterval();