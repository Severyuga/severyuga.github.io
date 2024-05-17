function pow(x, n) {
    if (typeof n === 'number' && typeof x === 'number' && Number.isInteger(n)) {
        return Math.pow(x, n);
    } else {
        throw new Error("x и n должны быть числами, и n должно быть целым числом.");
    }
}