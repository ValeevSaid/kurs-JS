"use strict";

let rollback = 20;
let fullPrice;
let title;
let screens;
let screenPrice;
let adaptive;
let service1;
let service2;
let allServicePrices;
let servicePercentPrice;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
  title = prompt(
    "Как называется ваш проект или компания?",
    "Калькулятор верстки"
  );
  screens = prompt(
    "Какие типы экранов нужно разработать?",
    "Простые, Сложные, Интерактивные"
  );
  do {
    screenPrice = prompt("Сколько будет стоить данная работа?");
  } while (!isNumber(screenPrice));

  adaptive = confirm("Нужен ли адаптив на сайте?");
};

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getAllServicePrices = function (a, b) {
  let sum = 0;
  for (let i = 0; i < 2; i++) {
    let price = 0;
    if (i === 0) {
      service1 = prompt("Какой нужен допольнительный функционал сайта 1?");
    } else if (i === 1) {
      service2 = prompt("Какой нужен допольнительный функционал сайта 2?");
    }
    do {
      price = prompt("Какой бюджет на это?");
    } while (!isNumber(price));
    sum += +price;
  }
  return sum;
};

function getFullPrice() {
  return +screenPrice + allServicePrices;
}

const getTitle = function (text) {
  text = text.trim();
  text = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  return text;
};

function getServicePercentPrices() {
  return fullPrice - fullPrice * (rollback / 100);
}

const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  } else if (price >= 15000 && fullPrice <= 30000) {
    return "Даем скидку в 5%";
  } else if (price < 15000 && fullPrice >= 0) {
    return "Скидка не предусмотрена";
  } else {
    return "Что то пошло не так";
  }
};

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle(title);

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);
showTypeOf(fullPrice);
showTypeOf(allServicePrices);
showTypeOf(servicePercentPrice);

console.log("Тип экрана = " + screens);
console.log(getRollbackMessage(fullPrice));
console.log("Сумма допуслуг = " + allServicePrices);
console.log("Верстка с допуслугами = " + fullPrice);
console.log("Название проект = " + title);
console.log("Итоговая цена = " + servicePercentPrice);
