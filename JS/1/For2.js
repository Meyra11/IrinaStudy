/*
  Даны два целых числа A и B (A < B). Вывести в порядке возрастания все целые числа,
  расположенные между A и B (включая сами числа A и B), а также количество N этих чисел.
*/

const {getRandomIntInterval} = require('../utils');

const A = getRandomIntInterval(-5, 5), B = getRandomIntInterval(6, 10);

let amount = 0;
let resStr = "";
for(let i = A; i <= B; i++)
{
  amount +=1;
  resStr = resStr + " " + i;
}

console.log("Число A = " + A + ", число B = " + B + ", кол-во = " + amount + ", результат = " + resStr);

//time 5 мин
