/** 
 * Task # 37
 * Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads 
 * I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size 
 * with a different message.
 * Date : 10/02/2022
 */
console.log("\nTask # 37\n");

function make_shirt2(size :string = "Large", message:string ="I Love TypeScript"){
    console.log(`The Size of Shirt is ${size}. ${message}`);
}

make_shirt2("Small");
make_shirt2("Medium", "I Love JavaScript too");
make_shirt2();