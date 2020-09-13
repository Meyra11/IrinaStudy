/*
  Дано целое число в диапазоне 20–69, определяющее возраст (в годах).
  Вывести строку-описание указанного возраста, обеспечив правильное согласование числа со словом «год»,
  например: 20 — «двадцать лет», 32 — «тридцать два года», 41 — «сорок один год».
*/

const {getRandomIntInterval} = require('../utils');

const N = getRandomIntInterval(20, 69);

let yearStr = "";

switch (Math.floor(N/10)) {
  case 2:
    yearStr = "Двадцать ";
    break;
  case 3:
    yearStr = "Тридцать ";
    break;
  case 4:
    yearStr = "Сорок ";
    break;
  case 5:
    yearStr = "Пятьдесят ";
    break;
  case 6:
    yearStr = "Шестьдесят ";
    break;
}

switch (N%10) {
  case 1:
    yearStr = yearStr +  "один ";
    break;
  case 2:
    yearStr = yearStr +  "два ";
    break;
  case 3:
    yearStr = yearStr +  "три ";
    break;
  case 4:
    yearStr = yearStr +  "четыре ";
    break;
  case 5:
    yearStr = yearStr +  "пять ";
    break;
  case 6:
    yearStr = yearStr +  "шесть ";
    break;
  case 7:
    yearStr = yearStr +  "семь ";
    break;
  case 8:
    yearStr = yearStr +  "восемь ";
    break;
  case 9:
    yearStr = yearStr +  "девять ";
    break;
}

switch (N%10) {
  case 0:
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
    yearStr = yearStr + "лет";
    break;
  case 1:
    yearStr = yearStr + "год";
    break;
  default:
    yearStr = yearStr +"года";
}

console.log("Число N:" + N + " - " + yearStr);

//time 25 мин
