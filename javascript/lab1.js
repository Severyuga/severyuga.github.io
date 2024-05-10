"use strict";
function showAge() {

  let age = prompt("Сколько вам лет?");
  let gender = prompt("Какой у вас пол? (мужской/женский)");


  age = parseInt(age);

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
}

function showCrows() {
  let num = prompt("Введите целое число:");
  num = parseInt(num);

  let endStr = "";

  if (isNaN(num) || num < 1) {
    alert("Некорректное значение");
  }
   
  else {

    switch (num % 10) {
      case 1:
        endStr = 'a';
        break;
      case 2:
      case 3:
      case 4:
        endStr = 'ы';
        break;
      default:
        endStr = '';
    }
  }

  if (num % 100 >= 11 && num % 100 <= 14) {
    endStr = '';
  }
  alert(`На ветке сидит ${num} ворон${endStr}`)
}

function showNum() {
  let userInput;

  while (true) {
    userInput = prompt("Введите число, большее 100:");

    if (userInput === null) {
      return;
    }

    const num = parseInt(userInput);

    if (isNaN(num) || num <= 100) {
      alert("Пожалуйста, введите корректное числовое значение, большее 100.");
    } else {
      alert("Спасибо, что ввели число" + num);
      break;
    }
  }
}

function prstNum() {
  let n = prompt("Введите число n:");
  n = parseInt(n);

  for (let i = 2; i <= n; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(i);
    }
  }
}

