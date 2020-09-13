/*
  Даны два целых числа A и B (A < B). Найти произведение всех целых чисел от A до B включительно.
*/

const {getRandomIntInterval} = require('../utils');

const A = getRandomIntInterval(-5, 5), B = getRandomIntInterval(6, 10);

let res = 1;
for(let i = A; i <= B; i++)
{
  res = res*i;
}

console.log("Число A = " + A + ", число B = " + B + ", результат = " + res);

//time 4 мин
