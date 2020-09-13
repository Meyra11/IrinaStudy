/*
  Найти значение функции "y=3x−6x−7" при данном значении "x".
*/

const {getRandomFloatInterval} = require('../utils');

const x = getRandomFloatInterval(-1000, 1000);
let y = 3*x - 6*x - 7;

console.log("x = " + x);
console.log("y = 3x−6x−7 = " + y);

//time 3 мин
