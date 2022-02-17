"use strict";

let random;

function getRandomInt() {
  random = Math.floor(Math.random() * 100) + 1;
}

function isNumber(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}

function bot() {
  let userAnswer = prompt("Угадай число от 1 до 100");

  if (userAnswer == null) {
    alert("До свидания!");
    return;
  } else if (!isNumber(userAnswer)) {
    alert("Необходимо ввести число, а не строку!");
    bot();
  }

  if (userAnswer > random) {
    alert("Необходимо ввести число поменьше!");
  }
  if (userAnswer < random) {
    alert("Необходимо ввести число больше!");
  }
  if (userAnswer == random) {
    alert("Поздравляю ты выиграл!");
    return;
  }
  bot();
}

getRandomInt();
bot();
console.log(random);
