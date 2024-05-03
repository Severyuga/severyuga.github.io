"use strict";

// Создаем переменные age и gender
let age = prompt("Сколько вам лет?");
let gender = prompt("Какой у вас пол? (мужской/женский)");

// Преобразуем возраст в числовой тип
age = parseInt(age);

// Проверяем условия
if (age >= 0 && age <= 17) {
  alert("Вам работать ещё рано — учитесь");
} else if ((gender === "мужской" && age >= 18 && age <= 59) || (gender === "женский" && age >= 18 && age <= 54)) {
  alert("Вам ещё работать и работать");
} else if ((gender === "мужской" && age >= 60 && age <= 64) || (gender === "женский" && age >= 55 && age <= 59)) {
  alert("Скоро пенсия!");
} else if ((gender === "мужской" && age > 65) || (gender === "женский" && age > 60)) {
  alert("Вам пора на пенсию");
} else {
  alert("Да кто ты такой?");
}

// Создаем переменную num и запрашиваем у пользователя целочисленное значение
let num = prompt("Введите целое число:");

// Преобразуем значение в числовой тип
num = parseInt(num);

// Проверяем условия с использованием if ... else и switch
if (isNaN(num) || num < 1) {
  alert("Некорректное значение");
} else if (num === 1) {
  alert("На ветке сидит 1 ворона");
} else if (num === 2 || num === 3 || num === 4) {
  alert("На ветке сидит " + num + " вороны");
} else {
  switch (num % 10) {
    case 1:
      alert("На ветке сидит " + num + " ворона");
      break;
    case 2:
    case 3:
    case 4:
      alert("На ветке сидит " + num + " вороны");
      break;
    default:
      alert("На ветке сидит " + num + " ворон");
  }
}