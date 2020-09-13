/*
  Дано четырехзначное число. Проверить истинность высказывания:
  «Данное число читается одинаково слева направо и справа налево».
*/


const {getRandomIntInterval} = require('../utils');

const A = getRandomIntInterval(1000, 9999);

const res = (A%10 === Math.floor(A/1000)) && (Math.floor((A%100)/10) === ((Math.floor(A/100)))%10);

console.log("Число A = " + A + ", результат = " + res);

//time 2 мин
