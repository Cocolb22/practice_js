// fonction déclarative

function greet() {
  console.log('hello world');
}

greet();

// fonction expressive

const speack = function(){
  console.log('bonjour')
}

speack();

// ajouter des paramètres
const goodDay = function (name = "Ingrid", time = "night"){

  console.log(`have a good ${time} ${name}`);
}

goodDay("tom", "day")
goodDay()

// return

const calArea = function (radius) {
  return 3.14 * radius**2;

}
const area = calArea(5)
console.log(area)
// demander à Nicolas, pas clair la façon de sortir le résultat

//arrow function
const calcArea = (radius)  => {
  return 3.14 * radius**2;

}
const area2 = calcArea(5)
console.log("area is", area2)


//refacto

//const calcArea = (radius)  => 3.14 * radius**2;


// callback function
function salutation(name) {
  alert('Bonjour ' + name);
}

function processUserInput(callback) {
  var name = prompt('Entrez votre nom.');
  callback(name);
}

processUserInput(salutation);

// demander à Nicolas, j'ai rien compris

//foreach et callback

let people = ["mario", "luigi", "peach"]

const LogPeople = (person, index) => {
  console.log(`${index}, hello ${person}`);
}

people.forEach(LogPeople);
