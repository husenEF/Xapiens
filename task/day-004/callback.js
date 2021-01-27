console.log("Start");

const a = (callback_b) => {
  setTimeout(() => {
    console.log(`a 1`);
    callback_b(c);
  }, 300);
};
const b = (cb) => {
  setTimeout(() => {
    console.log(`b 2`);
    cb(d);
  }, 100);
};
const c = (cb) => {
  setTimeout(() => {
    console.log(`c 3`);
    cb();
  }, 200);
};
// a(b);
a(() => cpnms);
b(() => console.log("sss"));
c();
