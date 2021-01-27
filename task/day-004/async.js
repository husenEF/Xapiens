console.log("1");

console.log(2);

setTimeout(() => {
  console.log("ini 3");
  empat();
}, 3000);

function empat() {
  console.log(4);
}
