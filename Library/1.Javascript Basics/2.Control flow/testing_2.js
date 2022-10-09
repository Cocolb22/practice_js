 // for loop
for(let i = 0; i< 5; i++){
  console.log('in loop"', i);
}

// while loop
let y = 0
while(y < 5){
  console.log('Y loop', y);
  y++;
}

const pokémon = ["pikachu","salamèche", "tortank"];
let z = 0;
while(z < pokémon.length){
  console.log(pokémon[z]);
  z++;
}

// do while loop (demander à Nico )
let a = 3
do{
  console.log("val of a is: ", a)
  a++
} while(a < 5);

// if et if else
const age = 17

if(age >= 60){
  console.log("you are too old to vote");
} else if(age >= 18){
  console.log("you can vote");
}else {
  console.log("you are too young to vote");
}

//opérateurs logiques
const password = "pascoco";
if(password.length >= 12 && password.includes("@")){
  console.log("you password is good");
} else if (password.length >= 8 || password.includes("@")){
console.log(" your password can be better")
}
else {
  console.log("you password is bad");
}

// inversion logique
let user = false

if(!user){
  console.log('you must be logged in')
}

// break loop
const scores = [50, 25, 0, 30, 100, 20, 10]

for(let b = 0; b < scores.length; b++){

  if(scores[b] === 0){
    continue;
  }

  console.log('your score: ', scores[b]);

  if(scores[b] === 100){
    console.log('congrats you win');
    break
  }
}

//switch

const grade = 'D'

switch(grade){
  case "A":
    console.log("perfect !");
    break;
  case "B":
    console.log("good job !");
    break;
  case "C":
    console.log("coud be better !");
    break;
  case "D":
    console.log("booh !");
  default:
    console.log("not a valide grade");
}

// block scope

let myAge = 29;

if(true){
const myAge = 40;
console.log("dans le block, ", myAge);

  if(true){
    const myAge = 50;
    console.log("dans le 2ème block, ", myAge);
  }

}
console.log("hors du block, ", myAge);
