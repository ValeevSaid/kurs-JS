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
