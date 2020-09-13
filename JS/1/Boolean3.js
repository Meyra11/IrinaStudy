/*
  Дано целое число A. Проверить истинность высказывания: «Число A является четным».
*/


const {getRandomIntInterval} = require('../utils');

const A = getRandomIntInterval(0, 1000);

const res = !(A%2);

console.log("Число A = " + A + ", результат = " + res);

//time 1 мин
