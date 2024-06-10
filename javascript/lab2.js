/**
 * 1. Возвращает x, возведенное в n-ную степень.
 * @param {number} x Возводимое в степень число
 * @param {number} n Степень, натуральное число
 * @returns {number} Результат
 */
function pow(x, n) {
    if (typeof n === 'number' && typeof x === 'number' && Number.isInteger(n)) {
        return Math.pow(x, n);
    } else {
        throw new Error("x и n должны быть числами, и n должно быть целым числом.");
    }
}

//-------------------------------------------------------------------
/**
 * 2. Считаем сумму чисел до n включительно.
 * @param {number} n Число до которого считаем сумму
 * @returns {number} 
 */
function sumTo(n) {
    if (typeof n === 'number' && Number.isInteger(n) && n > 0) {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += i;
        }
        return sum;
    } else {
        throw new Error("n должно быть целым положительным числом.");
    }
}

//-------------------------------------------------------------------
/**
 * 3. Проверяет является ли год высокостным
 * @param {number} year
 * @returns {boolean} Вывод: Да/Нет
 */
function isLeapYear(year) {
    if (typeof year === 'number' && Number.isInteger(year)) {
        return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
    } else {
        throw new Error("year должно быть целым числом.");
    }
}

//-------------------------------------------------------------------
/**
 * 4. Считает факториал числа n
 * @param {number} n 
 * @returns {bigint} Факториал числа n в формате BigInt
 */
function factorial(n) {
    if (typeof n === 'number' && Number.isInteger(n) && n >= 0) {
        if (n === 0 || n === 1) {
            return BigInt(1);
        } else {
            return BigInt(n) * factorial(n - 1);
        }
    } else {
        throw new Error("n должно быть целым неотрицательным числом.");
    }
}


//-------------------------------------------------------------------
/**
 * 5. Считает n-ное число Фибоначчи
 * @param {number} n Порядковый номер числа 
 * @returns {bigint}  n-е число Фибоначчи
 */
function fib(n) {
    if (typeof n === 'number' && Number.isInteger(n) && n >= 0) {
        if (n === 0) {
            return BigInt(0);
        } else if (n === 1) {
            return BigInt(1);
        } else {
            let a = BigInt(0);
            let b = BigInt(1);

            for (let i = 2; i <= n; i++) {
                let c = a + b;
                a = b;
                b = c;
            }

            return b;
        }
    }
}

//-------------------------------------------------------------------
/**
 * 6. Проверяет, больше ли y, чем x
 * Если равны, возвращает null
 * @param {number} x
 * @param {number} y
 * @returns
 */
function compare(x) {
    if (typeof x !== 'number' || !Number.isInteger(x)) {
      throw new Error('x должно быть целым числом');
    }
  
    return function(y) {
      if (typeof y !== 'number' || !Number.isInteger(y)) {
        throw new Error('y должно быть целым числом');
      }
  
      if (y > x) {
        return true;
      } else if (y < x) {
        return false;
      } else {
        return null;
      }
    };
  }

  //-------------------------------------------------------------------
/**
 * 7. Считает сумму заданных чисел
 * @param  {...number} args Набор чисел
 * @returns {number} Сумма 
 */
  function sum(...args) {
    let result = 0;
  
    for (let arg of args) {
      if (typeof arg !== 'number' || !Number.isFinite(arg)) {
        throw new Error('Все аргументы должны быть конечными числами');
      }
  
      result += arg;
    }
  
    return result;
  }

  //-------------------------------------------------------------------
/**
 * 8.Добавляет свойство "blackSpot" к объекту, используя уникальный символ
 * @param {object} obj объект, к которому нужно добавить свойство
 * @return Исходный объект с добавленным свойством "blackSpot"
 */
  function addBlackSpot(obj) {
    if (typeof obj !== 'object' || obj === null) {
      throw new Error('obj должен быть объектом');
    }
  
    if (!obj.hasOwnProperty(Symbol.for('blackSpot'))) {
      obj[Symbol.for('blackSpot')] = true;
    }
  
    return obj;
  }

  
