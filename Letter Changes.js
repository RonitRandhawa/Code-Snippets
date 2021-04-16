function LetterChanges(str) {
var lett;
var newString = "";
var alphabet = "abcdefghijklmnopqrstuvwxyz";
for (var i = 0; i < str.length; i++) {
     lett = alphabet.indexOf(str[i]);
          if (lett === 25) {
              newString = newString + "a";
          } else if (lett === -1) {
              newString = newString + str[i];
          } else {          
              newString = newString + alphabet[lett + 1];
          }
     }
     return newString.replace(/[aeiou]/g, function(letter) {return letter.toUpperCase()});
}
 
console.log(LetterChanges("ENTER HERE"));

/* Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm.
Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a).
Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. */
