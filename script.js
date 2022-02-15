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
fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = fullPrice - fullPrice * (rollback / 100);
const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const allServicePrices = function getAllServicePrices() {
  return servicePrice1 + servicePrice2;
};

function getFullPrice() {
  return screenPrice + allServicePrices;
}

const getTitle = function (title) {
  if (!title) return title;
  return title[0].toUpperCase() + title.slice(1);
};

servicePercentPrice = function getServicePercentPrices() {
  return getFullPrice() - servicePercentPrice;
};

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

  // switch (true) {
  //   case fullPrice >= 30000:
  //     console.log("Даем скидку в 10%");
  //     break;
  //   case fullPrice >= 15000 && fullPrice <= 30000:
  //     console.log("Даем скидку в 5%");
  //     break;
  //   case fullPrice < 15000 && fullPrice >= 0:
  //     console.log("Скидка не предусмотрена");
  //     break;
  //   default:
  //     console.log("Что то пошло не так");
  //     break;
  // }
};

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));
console.log("Сумма допуслуг=" + allServicePrices);
console.log("Верстка с допуслугами=" + getFullPrice);
