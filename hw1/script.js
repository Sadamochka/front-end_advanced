const water = 15.678;
const burger = 123.965;
const fries = 90.2345;

console.log(water);
console.log(burger);
console.log(fries)

let products = [water, burger, fries]
let max = Math.max(...products);
let min = Math.min(...products);
console.log(max);
console.log(min);

let productsTotal = water + burger + fries;
console.log(productsTotal);

let productsTotal2 = Math.trunc(water) + Math.trunc(burger) + Math.trunc(fries);
console.log(productsTotal2)

let totalRound = Math.round(productsTotal/100)*100;
console.log(totalRound)

let wholeSum = Math.floor(productsTotal);
console.log(wholeSum);
let bool = (wholeSum%2)==0 ? true : false;
console.log(bool);

let rest = 500 - productsTotal
console.log(rest)

let averageAllProduct = Math.floor((productsTotal / 3) * 100) / 100;
console.log(averageAllProduct)

const min1 = 0
const max1 = 100;
const sumProd = Math.floor(productsTotal * 100) / 100;
const cost = sumProd / 2;
const discount = Math.floor((max1 - min1) * Math.random() + min1);
const discountSum = Math.round((sumProd * discount) / 100);
const profit = cost - discountSum;

console.log(sumProd,cost, discount, discountSum, profit)

let stringOfAll = `
Max price: ${max}
Min price: ${min}
Sum of products: ${productsTotal}
Without a penny: ${productsTotal2}
Round sum: ${totalRound}
Sum is even: ${wholeSum}
Rest from 500: ${rest}
Average of prices: ${averageAllProduct}
Discount: ${discount}
Sum with discount: ${discountSum}
Net profit: ${profit}
`;
console.log(stringOfAll);