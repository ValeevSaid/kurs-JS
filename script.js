"use strict";

let random;
let userAnswer;
function getRandomInt() {
  random = Math.floor(Math.random() * 100) + 1;
  return random;
}
random = getRandomInt();

console.log(random);

function isNumber(num) {
  if (!isNaN(parseFloat(num)) && isFinite(num)) {
    bot(random);
  } else {
    question();
  }
}

function question() {
  userAnswer = +prompt("Угадай число от 1 до 100");
  if (userAnswer === null) {
    alert("Игра окончена");
    return;
  } else {
    return userAnswer;
  }
}

function bot(x) {
  if (userAnswer < x) {
    userAnswer = +prompt("Загаданное число больше");
    bot();
  } else if (userAnswer > x) {
    userAnswer = +prompt("Загаданное число меньше!");
    bot();
  }
  if (userAnswer === x) {
    alert("Поздравляю, Вы угадали!!!");
    return;
  }
}
question();
isNumber(userAnswer);
console.log(userAnswer, typeof userAnswer);
