//alert('Hello world');

let age = 25;
let year = 2022;

console.log(age, year)

age = 30;

console.log(age)

// concatenation
let firstName = "Corentin";
let lastName = "LB";

let fullName = firstName + " " + lastName;
console.log(fullName);

// length
console.log(fullName.length);

// indexOf method
console.log(firstName.indexOf("e"))

// slice
console.log(firstName.slice(2, 5));
console.log(firstName.slice(2));
console.log(firstName.slice(14, 18));

// subString
console.log(firstName.substring(2,10));

// raccourcis mathématiques
let nombre = 10;
nombre+= 40;
console.log(nombre)

nombre/= 2;
console.log(nombre)

// Arrays
let famille = ["gwen", "coco", "erlé"]
console.log(famille[1])

// join
console.log(famille.join(","));


// concact
console.log(famille.concat(["maman", "papa"]));

// push
console.log(famille.push('gireg'));

//pop
console.log(famille.pop());

// includes
console.log(famille.includes('coco'));

//comparaison
let myAge = 29;

console.log(myAge == 25);
console.log(myAge == 29);
console.log(myAge != 29);
console.log(myAge > 25);
console.log(myAge < 22);
console.log(myAge <= 29);

// comparaison lettres
console.log(firstName > "gwendal");
console.log(firstName < "Gwendal");

// comparaison Types
console.log(myAge == 29);
console.log(myAge == "29");

// types conversion

let score = "100";
score = Number(score)
console.log(score+1)

console.log(typeof score)
