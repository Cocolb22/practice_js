// EXERCICE 1 : INVERSER UNE STRING

function reserveString(str) {

  // return str
  //   .split('')
  //   .reverse()
  //   .join('');

  /////////////////

// let revString = " ";
//   for(let char of str) {
//     revString = char + revString;

//   }
//   return revString

///////////////////////////////

// let revString = "";

// str.split('').forEach(char => {
//   revString = char + revString
// });
// return revString

///////////////////////////

return str.split("").reduce((revString, char) => char + revString, "");

}

// Appeler la fonction

// const output = reserveString('hello');
// console.log(output);

// console.log(typeof(output))

// EXERCICE 2 : CREER UN PALINDROME

function isPalindrome(str) {
  const revString = str.split('').reverse('').join('')
  if (revString === str) {
    console.log('this is a palindrome')
  } else {
    console.log('this is not a palindrome')
  }
  return revString
}
const output2 = isPalindrome('racecar');
console.log(output2);
console.log(typeof(output2))

// pas le moyen le plus rapide

// autre moyen, plus rapide
// function isPalindrome(str) {
// const revString = str.split('').reverse('').join('')
// return revString === str
// }

// EXERCICE 3 : INVERSER UN INTEGER

function reverseInt(int) {
const revString = int.split('').reverse('').join('')
return parseInt(revString) * Math.sign(int);
}

const output3 = reverseInt('-12345');
console.log(output3);
console.log(typeof(output3))

// EXERCICE 4 : CAPITALIZE LETTERS


// principe de base
function strCapitalize(str){
//  const strArr = str.toLowerCase().split(' ');
//  for (let i = 0; i < strArr.length; i++) {
//    strArr[i] = strArr[i].substring(0, 1).toUpperCase()
//   + strArr[i].substring(1);
//  }
//  return strArr.join(' ')

 // autre méthode, plus optimisé
// return str
//  .toLowerCase()
//  .split(' ')
//  .map(word => word[0].toUpperCase() + word.substring(1))
//  .join(' ');

// avec une regex
 return str.replace(/\b[a-z]/gi, function(char) {
  return char.toUpperCase();
});
}

const output4 = strCapitalize('i love pizza');
console.log(output4);
console.log(typeof(output4))

// EXERCICE 5 : MAX CHARACTER

function maxCharacter(str) {
  const charMap = {};
  let maxNum = 0;
  let maxChar = '';

  str.split('').forEach(function(char) {
    if(charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });

  for(let char in charMap) {

    if(charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }

  return maxChar
}
  const output5 = maxCharacter('anticonstitutionnellement');
  console.log(output5);
  console.log(typeof(output5))

  // EXERCICE 6 : FIZZBUZZ

  function fizzbuzz() {

  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0){
    console.log("FizzBuzz");
    } else if (i % 3 === 0) {
    console.log("Fizz");
    } else if (i % 5 === 0) {
    console.log("Buzz");
    } else {
      console.log(i)};

  }
}
  const output6 = fizzbuzz();
  console.log(output6);
