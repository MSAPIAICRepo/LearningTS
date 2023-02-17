/** 
 * Task # 43
 * Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of 
 * the array of magicians’ names. Because the original array will be unchanged, return the new array and store 
 * it in a separate array. Call show_magicians() with each array to show that you have one array of the original 
 * names and one array with the Great added to each magician’s name.
 * Date : 10/02/2022
 */
console.log("\nTask # 43\n");


var magicians = ["Goga","Zakota","Bamboo","Kodu"];

function show_magicians2(magicianNames:string[]){
    for(var magician of magicianNames){
        console.log(magician);
    }
}
function make_great2(magicianNames: string[]){
    for(var x:number=0;x<magicianNames.length;x++){
        magicianNames[x]+= " The Great";
    }
    return magicianNames;
}
//var greatMagicians = make_great2(magicians.map(n => n));
var greatMagicians = magicians.map(n => n+" The Great");

show_magicians2(greatMagicians);
console.log("\nOrigional Array")
show_magicians2(magicians);
