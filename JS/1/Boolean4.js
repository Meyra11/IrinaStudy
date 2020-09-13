/*
  Даны два целых числа: A, B. Проверить истинность высказывания: «Справедливы неравенства A > 2 и B ≤ 3»
*/

const {getRandomIntInterval} = require('../utils');

const A = getRandomIntInterval(0, 10);
const B = getRandomIntInterval(0, 10);

const res = (A > 2) && (B <= 3);

console.log("Число A = " + A + ", Число B = " + B + ", результат = " + res);

//time 2 мин
