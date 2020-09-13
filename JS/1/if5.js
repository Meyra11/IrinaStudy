/*
  Даны три целых числа. Найти количество положительных и количество
  отрицательных чисел в исходном наборе.
*/

const {getRandomIntInterval} = require('../utils');

const A = getRandomIntInterval(-10, 10), B = getRandomIntInterval(-10, 10), C = getRandomIntInterval(-10, 10);

let resP = resN = 0;
resP = (A > 0) + (B > 0) + (C > 0);
resN = (A < 0) + (B < 0) + (C < 0);

console.log("Число A = " + A + ", число B = " + B + ", число C = " + C);
console.log("кол-во полож.: " + resP + ", кол-во отриц.: " + resN + ", кол-во нулей: " + (3 - resP - resN));

//time 5 мин
