/*
  Дано вещественное число — цена 1 кг конфет. Вывести стоимость 0.1, 0.2, ..., 1 кг конфет.
*/

const {getRandomFloatInterval} = require('../utils');

const cost = getRandomFloatInterval(0, 100000);

console.log("Цена за 1 кг = " + cost);

for(let i = 0.1; i <= 1; i += 0.1)
{
  console.log(cost*i);

}

//time 5 мин
