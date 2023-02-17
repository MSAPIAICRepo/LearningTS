/** 
 * Task # 41
 * Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
 * which prints the name of each magician in the array.
 * Date : 10/02/2022
 */
console.log("\nTask # 41\n");

var magicians = ["Goga","Zakota","Bamboo","Kodu"];

function show_magicians(magicianNames:string[]){
    for(var magician of magicianNames){
        console.log(magician);
    }
}

show_magicians(magicians);