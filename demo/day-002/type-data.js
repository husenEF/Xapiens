const num = 1;
const isTrue = Boolean(true);
const toggleOn = false;

const salam = "Assalamu'alaikum";
const fullSalam = salam + " Refactory";

console.log({ isTrue, toggleOn, salam, fullSalam });

let und;
const isNull = null;
const isEmty = "";

console.log({ und });
console.log("is emty != is null:", { result: isEmty === isNull });

const fruitList = ["banana", "semongko", "penaple"];

console.log({ fruitList });
console.log("pisang:", fruitList[0]);

fruitList.pop()
console.log({ fruitList });
