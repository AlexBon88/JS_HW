function minimum(digits) {
    let min = digits[0];
    for (let i = 1; i < digits.length; i++) {
        const digit = digits[i];
        if (digit<min) {
            min = digit;
        }
        return min;

    }
}