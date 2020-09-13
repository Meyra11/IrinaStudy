/*
  Даны два целых числа: A, B. Проверить истинность высказывания: «Каждое из чисел A и B нечетное».
*/

const {getRandomIntInterval} = require('../utils');

const A = getRandomIntInterval(0, 1000), B = getRandomIntInterval(0, 1000);

const res = (A%2 === 1) && (B%2 === 1);

console.log("Число A = " + A + ", Число B = " + B + ", результат = " + res);

//time 2 мин
