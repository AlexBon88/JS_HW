Array.prototype.toForEach = function (callback) {
    const myArray = this;
    for (const item of myArray) {
        callback(item);
    }
}
Array.prototype.toFilter = function (callback2) {
    const mas = []
    for (const item of this) {
        if (callback2(item)) {
            mas.push(item)
        }
    }
    return mas;
}