/*
  Дан размер файла в байтах. Используя операцию деления нацело,
  найти количество полных килобайтов, которые занимает данный файл (1 килобайт = 1024 байта).
*/

const {getRandomIntInterval} = require('../utils');

//не знаю, какую максимальную границу надо указывать
const bytes = getRandomIntInterval(0, 1000000000);
const kBytes = Math.floor(bytes/1024);

console.log("Размер файла (байт) = " + bytes + ", количество КБ = " + kBytes);
//time 2 мин
