console.log(1 < 2);
console.log(1 !== 3);
console.log(5 >= 4);
console.log(4 > 3);

//penugasan

let x = 4;
let y = 8;

console.log("* penugasa *");
console.log(x);
// console.log((x = y + 2));

// console.log((x = x * y));
console.log((x -= 10));

const stok = 5;
let totalPrice = 50000;
// totalPrice = price *stok
console.log((totalPrice *= stok));

const string1 = "lorem impsum";

let halo = "halo dunia";
console.log(halo);
halo += string1;
console.log(halo);

const a = 4;
const b = 0;
const status = a == 4 ? b : b == 0 ? "halo" : "dunia";
console.log(status);
