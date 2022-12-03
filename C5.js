class ElectricDevice {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.hasRosette = true;
  }

  turnOff() {
    console.log('Device is off');
  }

  turnOn() {
    console.log('Device is on');
  }
}

class TapeRecorder extends ElectricDevice {
  constructor(name, power, brand, yearOfProd, hasRadio) {
    super(name, power);
    this.brand = brand;
    this.yearOfProd = yearOfProd;
    this.hasRadio = hasRadio;
  }

  playMusic() {
    console.log('Lalala');
  }
}

class Teapot extends ElectricDevice {
  constructor(name, power, brand, yearOfProd, hasLighting) {
    super(name, power);
    this.brand = brand;
    this.yearOfProd = yearOfProd;
    this.hasLighting = hasLighting;
  }

  boilWater() {
    console.log('bool-bool');
  }
}

const sony = new TapeRecorder('myNewRecorder', 50, 'Sony', 2017, true);
const kitfort = new Teapot('myTeapot', 1000, "Kitfort", 2020, true);

console.log(sony);
console.log(kitfort);