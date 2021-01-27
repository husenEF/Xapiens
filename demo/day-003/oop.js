class Car {
  #tireSize = 17;
  #tireCunt = 4;
  mirror = 3;

  constructor(configurasi = {}) {
    // this._color = configurasi.color;
    // this._type = configurasi.type;
    // console.log("s", this);
    // console.log("ss", this.#tireSize);
  }

  get color() {
    return `Warna Mobile adalah ${this._color}`;
  }

  set color(color) {
    if (color == "red") this._color = "pink";
    this._color = `${color} keren`;
    console.log("ini set color");
  }

  static methodName() {
    console.log("bar", super.mirror);
  }
}

// const myCar = new Car({ color: "red", type: "suv" });
// console.log({ myCar });

// myCar.color = "merah";
// console.log(myCar.color);

// console.log("get mirror:", Car.MIRROR());
// Car.methodName();

class Onkoskirim {
  #pajak = 500;
  dibungkus = "kardus";

  constructor(berat) {
    this.berat = berat;
    // this.calculate();
  }

  calculate() {
    this.biaya = this.berat * 1000;
    return this.biaya + this.#pajak;
  }

  getTotalBiaya() {
    return this.calculate();
    // return this.biaya + this.#pajak;
  }

  getPajak() {
    return this.#pajak;
  }

  static methodName() {
    const ongkir = new Onkoskirim(5);

    console.log("ini static method");
    return ongkir.getTotalBiaya();
  }
}

const kirim = new Onkoskirim(5);
// console.log({ kirim });
const staticTotal = Onkoskirim.methodName();
console.log({ staticTotal });

class Kubus {
  #sisi = 0;
  constructor(sisi) {
    this.#sisi = sisi;
  }

  hitungVolume() {
    return this.#sisi ** 3;
  }

  getVolume() {
    return this.hitungVolume();
  }
}

// const rubik = new Kubus(10);
// console.log("volume rubik:" + rubik.getVolume());

