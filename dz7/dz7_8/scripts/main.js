class RedCap {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
class Prince {
    constructor(name, age, footFind) {
        this.name = name;
        this.age = age;
        this.footFind = footFind;
    }
}
const redCaps = [
    new RedCap('Luiza', 24 , 48),
    new RedCap('Olga', 48 , 37),
    new RedCap('Maryna', 19 , 35),
    new RedCap('Tetyana', 22 , 30),
    new RedCap('Svitlana', 21 , 39),
    new RedCap('Polina', 20 , 34),
    new RedCap('Natalka', 18 , 41),
    new RedCap('Zoe', 64 , 40),
    new RedCap('Margo', 21 , 33),
    new RedCap('Izabella', 17 , 31),
];
const prince = new Prince('Vasya', 41, 39);
const find = redCaps.find(redCap => redCap.footSize === prince.footFind )