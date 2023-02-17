/** 
 * Task # 36
 * T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be 
 * printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message 
 * printed on it. Call the function.
 * Date : 10/02/2022
 */
console.log("\nTask # 36\n");

function make_shirt(size: string, message:string){
    console.log(`The Size of Shirt is ${size}. ${message}`);
}

make_shirt("medium", "Wolla");