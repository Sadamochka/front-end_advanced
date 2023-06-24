let firstNumberN = Number(prompt("Введіть ціле число N:"));
let secondNumberM = Number(prompt("Введіть ціле число M:"));

while (!Number.isInteger(firstNumberN) || firstNumberN <= 0 || isNaN(firstNumberN)){
    firstNumberN = Number(prompt("Число N не було коректно введено:", firstNumberN))
}
while (!Number.isInteger(secondNumberM) || secondNumberM <= firstNumberN || isNaN(secondNumberM)){
    secondNumberM = Number(prompt("Число M не було коректно введено:", secondNumberM))
}

let sum = 0;
let skip = confirm("Чи пропускати парні?");
for (let i = firstNumberN; i <= secondNumberM; i++) {
  if (skip && i % 2 === 0) {
    continue;
  }
  sum += i;
}

console.log(`Пропускаємо парні числа? ${skip}
Результат суми чисел ${firstNumberN} і ${secondNumberM}: ${sum}
`)
