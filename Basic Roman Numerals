function BasicRomanNumerals(str) {
const symbols = { 
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let number = 0;
    for (i=0; i < str.length; i++){
        const current = symbols[str[i]];
        const next = symbols[str[i+1]];
        if (current < next){
            number += next - current;
            i++;
        } else {
            number += current;
        }
    }
    return number;
}

console.log(BasicRomanNumerals("ENTER HERE"));
