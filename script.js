"use strict";

let title = "Урок 2";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 10000;
let rollback = 20;
let fullPrice = 1000000;
let adaptive = true;

title = prompt("Как называется ваш проект");
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " рублей");
console.log("Стоимость разработки сайта  " + fullPrice + " рублей");
console.log(screens.toLowerCase());
console.log(screens.split(", "));
console.log(fullPrice * (rollback / 100));
console.log("Проект называется: " + title);
screens = prompt(
  "Какие типы экранов нужно разработать?",
  "Экраны бывают: Простые, Сложные, Интерактивные"
);
console.log("Клиент выбрал: " + screens + " экраны");
screenPrice = +prompt("Сколько будет стоить данная работа?", "от 12000");
console.log("Стоимость работы: " + screenPrice);
adaptive = confirm("Нужен ли адаптив на сайте??");
console.log("Адаптив: " + adaptive);

let service1 = prompt("Нужен счетчик посещаемости??");
let servicePrice1 = +prompt("Цена");
let service2 = prompt("Нужны кнопки соцсетей??");
let servicePrice2 = +prompt("Цена??");
console.log("Счетчик " + servicePrice1 + " Соцсети " + servicePrice2);

fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log("Полная цена проекта: " + fullPrice);

let servicePercentPrice = Math.ceil(fullPrice * (rollback / 100));
console.log("Итоговая стоимость: " + servicePercentPrice);

console.log(typeof fullPrice);
switch (true) {
  case fullPrice >= 30000:
    console.log("Даем скидку в 10%");
    break;
  case fullPrice >= 15000 && fullPrice <= 30000:
    console.log("Даем скидку в 5%");
    break;
  case fullPrice < 15000 && fullPrice >= 0:
    console.log("Скидка не предусмотрена");
    break;
  default:
    console.log("Что то пошло не так");
    break;
}
