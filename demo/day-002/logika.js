let a = 3;
const b = -4;

console.log(a > 0 && b < 0);

console.log(a > 0 || b > 0);

// true && true = true
// true || false = true
console.log(!(a > 0 || b > 0));
console.log(typeof a);
const list = [1, 3, 4];
delete list[2];
console.log(list);
a = undefined;
if (a) console.log("ada a");
else console.log("a tidak ada");
