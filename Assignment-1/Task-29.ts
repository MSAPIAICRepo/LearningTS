/** 
 * Task # 29
 * Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent 
 * if statements that check for certain fruits in your array.
 * • Make a array of your three favorite fruits and call it favorite_fruits.
 * • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
 *   If the fruit is in your array, the if block should print a statement, such as You really like bananas!
 * Date : 10/02/2022
 */
console.log("\nTask # 29\n");

var favorite_fruits = ["Pomegranate","Mango","Leechi","Avacado","Pineapple","Blueberry"];

//var randomIndex = genrateRandomNumber(0,favorite_fruits.length-1);


if(favorite_fruits.indexOf("Pomegranate")!=-1)
    console.log("I really like Pomegranate");

if(favorite_fruits.indexOf("Mango")!=-1)
    console.log("I really like Mango");

if(favorite_fruits.indexOf("Leechi")!=-1)
    console.log("I really like Leechi");

if(favorite_fruits.indexOf("Avacado")!=-1)
    console.log("I really like Avacado");

if(favorite_fruits.indexOf("Pineapple")!=-1)
    console.log("I really like Pineapple");

if(favorite_fruits.indexOf("Blueberry")!=-1)
    console.log("I really like Blueberry");
