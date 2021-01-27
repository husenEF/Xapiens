const fruits = ["Pisang", "Durian", "Nangka"];
console.log({ fruits });
console.log("buah :" + fruits[0]);
const foods = new Array("Bakso", "Soto", "Gudeg");

console.log("food:", foods);

const number = [9, 8, 7, 6, 5, 0];

console.log("number:", number);
console.log("no 3:", number[3]);

//change array

fruits[2] = "Alpukat";
console.log("new fruits", fruits);

fruits.pop();
console.log("hapus akhir:", fruits);
foods.shift();
console.log("new foods", foods);

foods.unshift("Karedok");
console.log("new foods", foods);
foods.push("Siomay");

console.log("new foods", foods);

const cars = ["Audi", "Tesla", "Ford", "Datsun"];

cars.push("Honda");
console.log({ cars });
cars.push("Toyota");
console.log({ cars });

const kaki = Array.from("makan");

console.log({ kaki });
console.log("includes:", kaki.includes("i"));

console.log("sort:", number.sort());
console.log("sord string:", foods.sort());

console.log("slice:", cars.slice(1, 4));
console.log("reverse", cars.reverse());

kaki[0] = kaki[0].toUpperCase();
const newKaki = kaki.join("");
console.log({newKaki})
