/*
  Дано двузначное число. Найти сумму и произведение его цифр
*/

const {getRandomIntInterval} = require('../utils');

const num = getRandomIntInterval(10, 99);
const sum = Math.floor(num/10) + num%10;
const multi = Math.floor(num/10) * (num%10);

console.log("Число:" + num + ", сумма цифр числа = " + sum + ", произведение цифр числа = " + multi);

//time 12 мин
