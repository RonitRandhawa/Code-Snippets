function NonrepeatingCharacter(str) {
for (let i = 0; i < str.length; i++) {
    		let character = str[i];
    		if (str.indexOf(character) == i && str.indexOf(character, i + 1) == -1) {
      		return character;
    		}
  	}
  return "No Repeating Character Found!";
}

console.log(NonrepeatingCharacter("ENTER HERE"));
