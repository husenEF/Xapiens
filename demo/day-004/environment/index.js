// console.log({ env: process.env });
const home = process.env.HOME;
// const pass = process.env.PASS;
console.log({ home });
process.env.APP_VERSION = "1.0.0";
process.env.APP_NAME = "Example env";
console.log({ env2: process.env });
