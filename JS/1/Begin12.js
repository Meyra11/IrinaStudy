/*
  Даны катеты прямоугольного треугольника a и b.
  Найти его гипотенузу "C" и периметр "P": "C=a+b", "P=a+b+С
*/

const {getRandomFloatInterval} = require('../utils'); // Импортируем функции из файла utils.js

//Есть вероятность значения длины катетов, равным 0. Не стала ничего колдовать с этим.
const a = getRandomFloatInterval(0, 1000), b = getRandomFloatInterval(0, 1000);

//вроде формула такая
const C = Math.sqrt(a*a + b*b);

const P = a + b + C;
console.log("a = " + a + ", b = " + b + ", гипотенуза = " + C + ", периметр = " + P);

//time 5 мин
