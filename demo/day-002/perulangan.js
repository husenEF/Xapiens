for (n = 10; n > 0; n--) {
  console.log("n:", n);
}

let nu = 0;
while (nu < 10) {
  console.log({ nu });
  nu++;
}
console.log("---");
let no = 0;
do {
  console.log({ no });
  no++;
} while (no < 5);

const fruits = ["Pisang", "Durian", "Nangka"];
let s = [];
const newF = fruits.forEach((f) => {
  //   return f;
  s.push(f);
});
console.log({ s });
const newFF = fruits.map((f) => {
  return f;
});
console.log({ newFF });
