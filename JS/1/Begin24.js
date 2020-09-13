/*
  Даны переменные A, B, C. Изменить их значения,
  переместив содержимое "A" в "C", "C" в "B", "B" в "A",
  и вывести новые значения переменных "A", "B", "C".
*/
const {getRandomFloatInterval} = require('../utils'); // Импортируем функции из файла utils.js

let A = getRandomFloatInterval(-1000, 1000), B = getRandomFloatInterval(-1000, 1000), C = getRandomFloatInterval(-1000, 1000);

console.log("Before: A = " + A + "B = " + B + "C = " + C);
let tmp = A;
A = B;
B = C;
C = tmp;

console.log("After: A = " + A + "B = " + B + "C = " + C);

//time 3 мин
