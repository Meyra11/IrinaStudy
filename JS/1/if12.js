/*
  Даны три числа. Найти наименьшее из них.
*/

const {getRandomIntInterval} = require('../utils');

const A = getRandomIntInterval(-1000, 1000), B = getRandomIntInterval(-1000, 1000), C = getRandomIntInterval(-1000, 1000);

let res = A;
if ((B <= C) && (B <= A)) {
  res = B;
} else if ((C <= A) && (C <= B)) {
  res = C;
}

console.log("Число A = " + A + ", число B = " + B + ", число C = " + C);
console.log("Наименьшее число: " + res);

//time 4 мин
