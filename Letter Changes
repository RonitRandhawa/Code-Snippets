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
