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