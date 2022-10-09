// créer un object

let user = {
  name: "coco",
  age: 29,
  email: "coco@test.com",

};
console.log(user)

//update
user.name = 'erlé'
console.log(user)

// this et fonction
let user2 = {
  name: "erlé",
  age: 31,
  email: "erlé@test.com",
  books: ["harry potter", "naruto"],
  idoles: [
    {name: "federer", GrandSlam: 20},
    {name: "djokovic", GrandSlam: 21}
  ],

  showAge: function() {
    console.log(this.age);
  },

  // callback function et this
  showBook: function () {
    this.books.forEach(book => {
    console.log(book);
    })
  },
  //créer un objet dans un array, et l'afficher
  showIdoles(){
    this.idoles.forEach(idole => {
      console.log(idole.name, idole.GrandSlam );
    })
  }
};

user2.showAge();
user2.showBook();
user2.showIdoles();

// refacto regular function
// plutot que d'écrire la syntaxe au dessus, on peut refacto en
// showAge() {
//   this.books.forEach(book => {
//     console.log(book);
//     })
//   }

// Math random
console.log(Math.round(Math.random()*100));
