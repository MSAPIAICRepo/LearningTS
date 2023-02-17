/** 
 * Task # 06
 * Stripping Names: Store a person’s name, and include some whitespace characters at the beginning 
 * and end of the name. Make sure you use each character combination, "\t" and "\n", at least once.
 * Print the name once, so the whitespace around the name is displayed. Then print the name after 
 * striping the white spaces.
 * Date : 10/02/2022
 */

var stripString : string = "  A Quick Brown Fox\tJumps\nOver The Lazy Dog  ";

console.log("\nTask # 06");
console.log(stripString);
console.log("\n");
console.log(stripString.trim());
