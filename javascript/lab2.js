function pow(x, n) {
    if (typeof n === 'number' && typeof x === 'number' && Number.isInteger(n)) {
        return Math.pow(x, n);
    } else {
        throw new Error("x и n должны быть числами, и n должно быть целым числом.");
    }
}

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

function isLeapYear(year) {
    if (typeof year === 'number' && Number.isInteger(year)) {
        return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
    } else {
        throw new Error("year должно быть целым числом.");
    }
}

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

  function addBlackSpot(obj) {
    if (typeof obj !== 'object' || obj === null) {
      throw new Error('obj должен быть объектом');
    }
  
    if (!obj.hasOwnProperty(Symbol.for('blackSpot'))) {
      obj[Symbol.for('blackSpot')] = true;
    }
  
    return obj;
  }

  
