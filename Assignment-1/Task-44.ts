/** 
 * Task # 44
 * Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function 
 * should have one parameter that collects as many items as the function call provides, and it should print 
 * a summary of the sandwich that is being ordered. Call the function three times, using a different number 
 * of arguments each time.
 * Date : 10/02/2022
 */
console.log("\nTask # 44\n");

var itemsSet1OfSandwich = ["Cocumber", "Tomato", "Cheese", "Beef", "Chilli Saus"];
var itemsSet2OfSandwich = ["Cocumber", "Tomato", "Cheese", "Beef", "Ketchup"];
var itemsSet3OfSandwich = ["Cocumber", "Tomato", "Cheese", "Chicken"];

function makeSandwich(items:string[]) {
    console.log("\nSummary of the Order");
    console.log("Your Sandwich will consists of following items");
    items.forEach(item => console.log(item));
}

makeSandwich(itemsSet1OfSandwich);
makeSandwich(itemsSet2OfSandwich);
makeSandwich(itemsSet3OfSandwich);