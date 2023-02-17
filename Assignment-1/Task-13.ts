/** 
 * Task # 13
 * Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
 * and make a list that stores several examples. Use your list to print a series of statements 
 * about these items, such as “I would like to own a Honda motorcycle.”
 * Date : 10/02/2022
 */
console.log("\nTask # 13\n");

var favoriteTransport = new Array<string>();

favoriteTransport.push("Honda");
favoriteTransport.push("Yamaha");
favoriteTransport.push("Suzuki");
favoriteTransport.push("Harly David Son");
favoriteTransport.push("Kawasaki");

for(var favTran of favoriteTransport){
    console.log(`I would like to own a ${favTran} motorcycle`);
}
