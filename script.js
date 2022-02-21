"use strict";

const appData = {
  title: "",
  screens: "",
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  fullPrice: 0,
  service1: "",
  service2: "",
  allServicePrices: 0,
  servicePercentPrice: 0,
  asking: function () {
    appData.title = prompt(
      "Как называется ваш проект или компания?",
      "Калькулятор верстки"
    );
    appData.screens = prompt(
      "Какие типы экранов нужно разработать?",
      "Простые, Сложные, Интерактивные"
    );
    do {
      appData.screenPrice = prompt("Сколько будет стоить данная работа?");
    } while (!appData.isNumber(appData.screenPrice));

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },
  getRollbackMessage: function (price) {
    if (price >= 30000) {
      return "Даем скидку в 10%";
    } else if (price >= 15000 && appData.fullPrice <= 30000) {
      return "Даем скидку в 5%";
    } else if (price < 15000 && appData.fullPrice >= 0) {
      return "Скидка не предусмотрена";
    } else {
      return "Что то пошло не так";
    }
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },
  showTypeOf: function (variable) {
    console.log(variable, typeof variable);
  },
  getAllServicePrices: function (a, b) {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
      let price = 0;
      if (i === 0) {
        appData.service1 = prompt(
          "Какой нужен допольнительный функционал сайта 1?"
        );
      } else if (i === 1) {
        appData.service2 = prompt(
          "Какой нужен допольнительный функционал сайта 2?"
        );
      }
      do {
        price = prompt("Какой бюджет на это?");
      } while (!appData.isNumber(price));
      sum += +price;
    }
    return sum;
  },
  getFullPrice: function () {
    return +appData.screenPrice + appData.allServicePrices;
  },
  getTitle: function (text) {
    text = text.trim();
    text = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    return text;
  },
  getServicePercentPrices: function () {
    return appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },
  start: function () {
    appData.asking();
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.servicePercentPrice = appData.getServicePercentPrices();
    appData.title = appData.getTitle(appData.title);
    appData.logger();
  },
  logger: function () {
    appData.showTypeOf(appData.title);
    appData.showTypeOf(appData.screenPrice);
    appData.showTypeOf(appData.adaptive);
    appData.showTypeOf(appData.fullPrice);
    appData.showTypeOf(appData.allServicePrices);
    appData.showTypeOf(appData.servicePercentPrice);
    for (let key in appData) {
      console.log("Ключ: " + key + " значение: " + appData[key]);
    }
  },
};

appData.start();
