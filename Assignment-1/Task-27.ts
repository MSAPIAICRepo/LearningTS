/** 
 * Task # 27
 * Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
 * • If the alien is green, print a message that the player earned 5 points.
 * • If the alien is yellow, print a message that the player earned 10 points.
 * • If the alien is red, print a message that the player earned 15 points.
 * • Write three versions of this program, making sure each message is printed for the appropriate color alien.
 * Date : 10/02/2022
 */
console.log("\nTask # 27\n");

console.log("Version # 1");
var alien_color = "Green";
if (alien_color == "Green") {
    console.log(`Player just earned 5 points for shooting the ${alien_color} alien`);
}else if (alien_color == "Yellow") {
    console.log(`Player just earned 10 points for shooting the ${alien_color} alien`)
}else if (alien_color == "Red") {
    console.log(`Player just earned 15 points for shooting the ${alien_color} alien`)
}

console.log("\nVersion # 2");
alien_color = "Yellow";
if (alien_color == "Green") {
    console.log(`Player just earned 5 points for shooting the ${alien_color} alien`);
}else if (alien_color == "Yellow") {
    console.log(`Player just earned 10 points for shooting the ${alien_color} alien`)
}else if (alien_color == "Red") {
    console.log(`Player just earned 15 points for shooting the ${alien_color} alien`)
}

console.log("\nVersion # 3");
alien_color = "Red";
if (alien_color == "Green") {
    console.log(`Player just earned 5 points for shooting the ${alien_color} alien`);
}else if (alien_color == "Yellow") {
    console.log(`Player just earned 10 points for shooting the ${alien_color} alien`)
}else if (alien_color == "Red") {
    console.log(`Player just earned 15 points for shooting the ${alien_color} alien`)
}
