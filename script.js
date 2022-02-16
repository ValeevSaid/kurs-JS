"use strict";

let title = prompt("Как называется ваш проект или компания?");
let screens = prompt(
  "Какие типы экранов нужно разработать?",
  "Простые, Сложные, Интерактивные"
);
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let rollback = 20;
let fullPrice = 10000;
let adaptive = confirm("Нужен ли адаптив на сайте?");

let service1 = prompt("Какой нужен допольнительный функционал сайта?");
let servicePrice1 = +prompt("Какой бюджет на это?");
let service2 = prompt("Какой нужен допольнительный функционал сайта?");
let servicePrice2 = +prompt("Какой бюджет на это?");

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getAllServicePrices = function (a, b) {
  return a + b;
};

let allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

function getFullPrice() {
  return screenPrice + allServicePrices;
}

fullPrice = getFullPrice();

const getTitle = function (text) {
  text = text.trim();
  text = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  return text;
};

function getServicePercentPrices() {
  return fullPrice - fullPrice * (rollback / 100);
}
let servicePercentPrice = getServicePercentPrices();
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

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);
console.log("Тип экрана = " + screens);
console.log(getRollbackMessage(fullPrice));
console.log("Сумма допуслуг = " + allServicePrices);
console.log("Верстка с допуслугами = " + getFullPrice());
console.log("Название проект = " + getTitle(title));
console.log("Итоговая цена = " + servicePercentPrice);
