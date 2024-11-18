function Car(model,manufacturer, year, maxSpeed, engineCapacity) {

    this.model = model;
    this.manufakturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function () {
        for (const key in this) {
            console.log(key, this[key])
        }
    }
    this.increaseMaxSpeed = function (newSpeed) {
        if (newSpeed > 0) {
        this.maxSpeed = this.maxSpeed + newSpeed;
        }
    }
    this.changeYear = function (newValue) {
        if (newValue > 1900) {
        this.year = newValue;
        }
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

const car = new Car ('TT', 'audi', 2015, 218, 2.2);


car.drive();
car.info();
car.increaseMaxSpeed(114);
car.changeYear(2014);
car.addDriver({});
