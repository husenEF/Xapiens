var a = "";
let b = "b";
const c = "c";

function methodA() {
  let d = "d";
  console.log({ d, a, b, c });
}

console.log({d})
methodA()