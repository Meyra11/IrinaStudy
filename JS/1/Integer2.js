/*
  Дана масса "M" в килограммах. Используя операцию деления нацело,
  найти количество полных тонн в ней (1 тонна = 1000 кг).
*/

const {getRandomIntInterval} = require('../utils');

//не знаю, какую максимальную границу надо указывать
const M = getRandomIntInterval(0, 1000000000);
const T = Math.floor(M/1000);

console.log("Масса (кг) = " + M + ", количество тонн = " + T);
//time 15 мин
