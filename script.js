"use strict";

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

function bot(x) {
  let userAnswer = +prompt("Угадай число от 1 до 100");
  if (userAnswer != null) {
    userAnswer = +prompt("Введите число");
    if (!isNumber(userAnswer)) {
      +prompt("Введите число");
    } else if (userAnswer < x) {
      +prompt("Загаданное число больше");
    } else if (userAnswer > x) {
      +prompt("Загаданное число меньше!");
    } else if (userAnswer === x) {
      alert("Поздравляю, Вы угадали!!!");
    }
  } else {
    alert("Игра окончена");
  }

  bot(x);
}

bot(40);
