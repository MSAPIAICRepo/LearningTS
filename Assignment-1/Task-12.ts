/** 
 * Task # 12
 * Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
 * print a message to them. The text of each message should be the same, but each message should be 
 * personalized with the person’s name.
 * Date : 10/02/2022
 */
console.log("\nTask # 12\n");

var friendNames : string[] = ["Junaid Pasha", "Rana Zafar", "Shariq Abdul Baqi", "Zulfiqar"];

console.log("\nMethod-1: for-of loop")
for (var friendName of friendNames){
    console.log("Hello! ".concat(friendName));
}

console.log("\nMethod-2: Simple \"for\" loop");
var i:number; 

for(i = 0;i<friendNames.length;i++) {
    console.log("Hello! ".concat(friendNames[i]));
    console.log(`Hello! ${friendNames[i]}`) ; //this is another way
}