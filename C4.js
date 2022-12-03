function ElectricDevice(name) {
  this.name = name;
  this.hasRosette = true;
}

ElectricDevice.prototype.turnOff = function() {
  console.log(`Device is off`);
}

ElectricDevice.prototype.turnOn = function() {
  console.log(`Device is on`);
}

function TapeRecorder(name, brand, yearOfProd, hasRadio) {
  this.name = name;
  this.brand = brand;
  this.yearOfProd = yearOfProd;
  this.hasRadio = hasRadio;
  this.playMusic = function() {
    console.log('Lalala');
  }
}

TapeRecorder.prototype = new ElectricDevice();

function Teapot(name, brand, power, yearOfProd) {
  this.name = name;
  this.brand = brand;
  this.power = power;
  this.yearOfProd = yearOfProd;
  this.hasLighting = true;
  this.boilWater = function() {
    console.log('bool-bool');
  }
}

Teapot.prototype = new ElectricDevice();

const sony = new TapeRecorder('myNewRecorder','Sony', 2017, true);
const kitfort = new Teapot('myTeapot', "Kitfort", 1000, 2020);

console.log(sony);
console.log(kitfort);