let firstName = "Husen";
let lastName = "refactory";
let today = `selasa`;
let d = new String("Halo dunia");

let joinName = firstName + " " + lastName;
let fullName = `${firstName},${lastName}`;
let tanggal = 19;
let upercase = fullName.toUpperCase();

console.log(firstName);
console.log(lastName);
console.log(today);
console.log(d);
console.log(joinName);
console.log(fullName);
console.log({ fullName, tanggal });
console.log("upercase:" + upercase);
console.log("lowercase:" + upercase.toLocaleLowerCase());

// trim

/*
trim
*/
const text = "          Halo Dunia,     ";

console.log("trim:" + text.trim());
console.log("trimStart:" + text.trimStart());
console.log("trimend :" + text.trimEnd());
console.log("repeat:" + text.trim().repeat(3));

//undifine
let foo;
console.log({ foo });
foo = null;
console.log({ foo });
