/*
  Дано целое число "N (> 0)". Найти сумму "1 + 1/2 + 1/3 + . . . + 1/N" (вещественное число).
*/

const {getRandomIntInterval} = require('../utils');

const N = getRandomIntInterval(0, 10);

let sum = 0;

for(let i = 1; i <= N; i++)
{
 sum = sum + 1/i;

}
console.log("N = " + N + ", sum =" + sum);

//time 4 мин
