"use strict";

function getRandomInt() {
  return Math.floor(Math.random() * 100) + 1;
}

let random = getRandomInt();
console.log(random);
const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

function bot(x) {
  let userAnswer = prompt("Угадай число от 1 до 100");

  if (+userAnswer == null) {
    alert("Игра окончена");
  } else if (!isNumber(+userAnswer)) {
    userAnswer += +prompt("Введите число");
  } else if (+userAnswer < x) {
    userAnswer += +prompt("Загаданное число больше");
  } else if (+userAnswer > x) {
    userAnswer += +prompt("Загаданное число меньше!");
  } else if (+userAnswer === x) {
    alert("Поздравляю, Вы угадали!!!");
  }
  bot(x);
}

bot(random);
