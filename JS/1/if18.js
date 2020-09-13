/*
  Даны три целых числа, одно из которых отлично от двух других, равных между собой.
  Определить порядковый номер числа, отличного от остальных.
*/

const {getRandomIntInterval} = require('../utils');

const A = getRandomIntInterval(0, 1), B = getRandomIntInterval(0, 1);

//имитация значений нужных
let С = 0;
if((A + B) === 0)
{
  С = 1;
}
else if ((A + B) === 2)
{
  С = 0;
}

let res = 1;
if (A === B)
{
  res = 3;
} else if (A === С)
    {
      res = 2;
    }

console.log("Число A = " + A + ", Число B = " + B + ", Число C = " + С + ", результат = " + res);

//time 7 мин
