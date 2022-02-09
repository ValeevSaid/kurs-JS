let title = "Урок 2";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 10000;
let rollback = 20;
let fullPrice = 1000000;
let adaptive = true;

// Вывести в консоль тип данных значений переменных title, fullPrice, adaptive;
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

// Вывести в консоль длину строки screens
console.log(screens.length);

// Вывести в консоль “Стоимость верстки экранов (screenPrice) рублей/ долларов/гривен/юани” и “Стоимость разработки сайта (fullPrice) рублей/ долларов/гривен/юани”
console.log("Стоимость верстки экранов " + screenPrice + " рублей");
console.log("Стоимость разработки сайта  " + fullPrice + " рублей");

// Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль
console.log(screens.toLowerCase());
console.log(screens.split(", "));

// Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback/100))

console.log(fullPrice * (rollback / 100));

// 3) Спрашиваем у пользователя “Как называется ваш проект?” и результат сохраняем в переменную title
title = prompt("Как называется ваш проект");
console.log("Проект называется: " + title);

// 4) Спросить у пользователя “Какие типы экранов нужно разработать?” сохранить в переменную screens (пример: "Простые, Сложные, Интерактивные")
screens = prompt(
  "Какие типы экранов нужно разработать?",
  "Экраны бывают: Простые, Сложные, Интерактивные"
);
console.log("Клиент выбрал: " + screens + " экраны");
// 5) Спросить у пользователя “Сколько будет стоить данная работа?” и сохранить в переменную screenPrice (пример: 12000)
screenPrice = +prompt("Сколько будет стоить данная работа?", "от 12000");
console.log("Стоимость работы: " + screenPrice);
// 6) Спросить у пользователя “Нужен ли адаптив на сайте?” и сохранить данные в переменной adaptive (булево значение true/false)

adaptive = prompt("Нужен ли адаптив на сайте??");
console.log("Адаптив: " + adaptive);

// 7) Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные 1. “Какой дополнительный тип услуги нужен?” (например service1, service2) 2. “Сколько это будет стоить?” (например servicePrice1, servicePrice2) в итоге 4 вопроса и 4 разные переменных, вопросы задаются в такой последовательности Название - Стоимость - Название - Стоимость
let service1 = prompt("Нужен счетчик посещаемости??");
let servicePrice1 = +prompt("Цена");
let service2 = prompt("Нужны кнопки соцсетей??");
let servicePrice2 = +prompt("Цена??");
console.log("Счетчик " + servicePrice1 + " Соцсети " + servicePrice2);
// 8) Вычислить итоговую стоимость работы учитывая стоимость верстки экранов и дополнительных услуг (screenPrice + servicePrice1 + servicePrice2) и результат занести в переменную fullPrice
fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log("Полная цена проекта: " + fullPrice);
// 9) Объявить переменную servicePercentPrice и занести в нее итоговую стоимость за вычетом отката посреднику (servicePercentPrice = fullPrice - Откат посреднику), округлив результат в большую сторону (методы объекта Math в помощь). Вывести servicePercentPrice в консоль.
let servicePercentPrice = Math.ceil(fullPrice - 180.5);
console.log("Итоговая стоимость: " + servicePercentPrice);
// 10) Написать конструкцию условий (расчеты приведены в рублях) (вывести в консоль)
//   - Если fullPrice больше 30000, то “Даем скидку в 10%”
//   - Если fullPrice больше 15000 и меньше 30000, то сообщение “Даем скидку в 5%”
//   - Если fullPrice меньше 15000 и больше 0 то в консоль вывести сообщение “Скидка не предусмотрена”
//   - Если отрицательное значение то вывести “Что то пошло не так”
//   - Учесть варианты 0, 15000 и 30000(к какому уровню не важно)

//  Проверить, чтобы все работало и не было ошибок в консоли
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
