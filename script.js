let title = prompt("Как называется ваш проект?");
let screens = prompt(
  "Какие типы экранов нужно разработать?",
  "Простые, Сложные, Интерактивные"
);
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let rollback = 20;
let fullPrice = 10000;
let adaptive = confirm("Нужен ли адаптив на сайте?");

// 7) Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные 1. “Какой дополнительный тип услуги нужен?” (например service1, service2) 2. “Сколько это будет стоить?” (например servicePrice1, servicePrice2) в итоге 4 вопроса и 4 разные переменных, вопросы задаются в такой последовательности Название - Стоимость - Название - Стоимость

//После того, как объявили переменные сверху объявляем переменные с доп услугами, где так же спрашиваем вопросы сразу
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");

fullPrice = screenPrice + servicePrice1 + servicePrice2;
// изменения
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
