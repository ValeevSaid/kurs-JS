"use strict";

let random;
let userAnswer;
function getRandomInt() {
  random = Math.floor(Math.random() * 100) + 1;
}

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

function bot() {
  let userAnswer = prompt("Угадай число от 1 до 100");

  if (userAnswer == null) {
    alert("До свидания!");
    return;
  }

  if (!isNumber(userAnswer)) {
    alert("Необходимо ввести число, а не строку!");
    bot();
    return;
  }
  if (userAnswer > random) {
    alert("Необходимо ввести число поменьше!");
    bot();
    return;
  }
  if (userAnswer < random) {
    alert("Необходимо ввести поменьше!");
    bot();
    return;
  }
  if (userAnswer == random) {
    alert("Поздравляю ты выиграл!");
    return;
  }
}

bot();
console.log(random);
