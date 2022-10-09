//query selector
const para = document.querySelector("h1");
console.log(para);

//query selector by class
const classe = document.querySelector(".class");
console.log(classe);

//get element by ID
const title = document.getElementById("titre");
console.log(title);

//get element by class
const class1 = document.getElementsByClassName("class");
console.log(class1);

//get element by tag name
const paras = document.getElementsByTagName("p");
console.log(paras);

// change text avec .innerText
const change1 = document.querySelector("p");
change1.innerText = "test pour changer le texte";

// change text for all
// const changes = document.querySelectorAll("p");
// changes.forEach(change => {
//   change.innerText += "test pour changer le texte";
// });


// set attribute
const link = document.querySelector('a')
link.setAttribute('href', 'https://www.lequipe.fr/');
link.innerText = "lien l'équipe";
