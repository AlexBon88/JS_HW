class Car {

    constructor(model, manufakturer, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufakturer = manufakturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info () {
        for (const key in this) {
            console.log(key, this[key]);
        }
    }

    increaseMaxSpeed (newSpeed) {
        if (newSpeed > 0) {
            this.maxSpeed = this.maxSpeed + newSpeed;
        }
    }

    changeYear (newValue) {
        if (newValue > 1900) {
            this.year = newValue;
        }
    }

    addDriver (driver) {
        this.driver = driver
    }
}
const car = new Car ('TT', 'audi', 2015, 218, '2.2');

car.drive();
car.info();
car.increaseMaxSpeed(1000);
car.changeYear(2014);
car.addDriver({});
console.log(car);