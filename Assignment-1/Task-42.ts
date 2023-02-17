/** 
 * Task # 42
 * Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() 
 * that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call 
 * show_magicians() to see that the list has actually been modified.
 * Date : 10/02/2022
 */
console.log("\nTask # 42\n");

var magicians = ["Goga","Zakota","Bamboo","Kodu"];

function show_magicians1(magicianNames:string[]){
    for(var magician of magicianNames){
        console.log(magician);
    }
}
function make_great(magicianNames: string[]){
    for(var x:number=0;x<magicianNames.length;x++){
        magicianNames[x]+= " The Great";
    }
}

make_great(magicians);
show_magicians1(magicians);