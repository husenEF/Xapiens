const person = {
  name: "Refactory",
  address: "Jln Palagan",
  hobbies: ["code", "training", "qA"],
};

console.log(person);

console.log("name:", person.name);

//add new data
const jaket = {};
console.log(jaket);
jaket.color = "Red";
console.log(jaket);

jaket["size"] = "XL";
console.log(jaket);

jaket["types"] = "wool";
jaket.price = 800000;
jaket.show = function () {
  return ["a", "b", "b"];
};
console.log(jaket);

console.log(jaket.show());
console.log(Object.keys(jaket));
