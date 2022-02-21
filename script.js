"use strict";

const appData = {
  title: "",
  screens: {},
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  fullPrice: 0,
  services: {},
  allServicePrices: 0,
  servicePercentPrice: 0,
  start: function () {
    appData.asking();
    appData.getAllServicePrices();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle();
    appData.logger();
  },
  asking: function () {
    appData.title = prompt(
      "Как называется ваш проект или компания?",
      "Калькулятор верстки"
    );
    // appData.screens = prompt(
    //   "Какие типы экранов нужно разработать?",
    //   "Простые, Сложные, Интерактивные"
    // );
    // do {
    //   appData.screenPrice = prompt("Сколько будет стоить данная работа?");
    // } while (!appData.isNumber(appData.screenPrice));

    for (let i = 0; i < 2; i++) {
      let name = prompt(
        "Какие типы экранов нужно разработать?",
        "Простые, Сложные, Интерактивные"
      );
      let price = 0;
      do {
        price = prompt("Сколько будет стоить данная работа?");
      } while (!appData.isNumber(price));
      appData.screens.push({ id: i, name: name, price: price });
    }
    for (let i = 0; i < 2; i++) {
      let name = prompt("Какой допольнительный тип услуги нужен?");
      let price = 0;

      do {
        price = prompt("Какой бюджет на это?");
      } while (!appData.isNumber(price));

      appData.services[name] = +price;
    }
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
  getAllServicePrices: function () {
    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },
  getFullPrice: function () {
    appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
  },
  getTitle: function () {
    appData.title = appData.title.trim();
    appData.title =
      appData.title.charAt(0).toUpperCase() +
      appData.title.slice(1).toLowerCase();
  },
  getServicePercentPrices: function () {
    appData.servicePercentPrice =
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
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
