/*
Дано целое число в диапазоне 1–7. Вывести строку — название дня недели,
соответствующее данному числу (1 — «понедельник», 2 — «вторник» и т. д.)
*/

const {getRandomIntInterval} = require('../utils');

const N = getRandomIntInterval(1, 7);

let dayStr = "";


switch (N) {
  case 1:
    dayStr = "понедельник ";
    break;
  case 2:
    dayStr = "вторник";
    break;
  case 3:
    dayStr = "среда";
    break;
  case 4:
    dayStr = "четверг";
    break;
  case 5:
    dayStr = "пятница";
    break;
  case 6:
    dayStr = "суббота";
    break;
  case 7:
    dayStr = "воскресенье";
    break;
}

console.log("Число N = " + N + " - " + dayStr);

//time 25 мин
