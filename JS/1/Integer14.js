/*
  Дано трехзначное число. В нем зачеркнули первую справа цифру и
  приписали ее слева. Вывести полученное число.
*/

const {getRandomIntInterval} = require('../utils');

const num = getRandomIntInterval(100, 999);

const result = (num%100) * 10 + Math.floor(num/100);

console.log("Число:" + num + ", результат = " + result);

//time 12 мин
