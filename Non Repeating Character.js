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

/* Have the function NonrepeatingCharacter(str) take the str parameter being passed, which will contain only alphabetic characters and spaces, and return the first non-repeating character.
For example: if str is "agettkgaeee" then your program should return k.
The string will always contain at least one character and there will always be at least one non-repeating character. */
