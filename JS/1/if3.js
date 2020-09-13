/*
  Дано целое число. Если оно является положительным, то прибавить к нему 1;
  если отрицательным, то вычесть из него 2; если нулевым, то заменить его на 10.
  Вывести полученное число.
*/

const {getRandomIntInterval} = require('../utils');

const A = getRandomIntInterval(-10, 10);

let res = 10;
if(A > 0) {
  res = A + 1;
}
else if (A < 0) {
  res = A - 2;
}

console.log("Число A = " + A + ", результат = " + res);

//time 3 мин
