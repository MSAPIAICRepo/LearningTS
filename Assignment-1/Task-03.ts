/** 
 * Task # 03
 * Name Cases: Store a person’s name in a variable, and then print that person’s 
 * name in lowercase, uppercase, and titlecase.
 * Date : 10/02/2022
 */

var personName : string = "zia ullah khan sahab";
var message : string = "! Would you like to Teach Us Type Script?"

/**
 * Convert string to title case
 * 
 * @param str 
 * @returns title case string
 */
const toTitleCase = (str: string) => {
    return str.toLowerCase().split(' ').map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  }
 
console.log("\nTask # 03");
console.log("Hello ".concat(personName.toLowerCase(), message));
console.log("Hello ".concat(personName.toUpperCase(), message));
console.log("Hello ".concat(toTitleCase(personName), message));