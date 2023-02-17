/** 
 * Task # 22
 * Intentional Error: If you haven’t received an array index error in one of your programs yet, 
 * try to make one happen. Change an index in one of your programs to produce an index error. 
 * Make sure you correct the error before closing the program.
 * Date : 10/02/2022
 */
console.log("\nTask # 22\n");

var countries : string[] = ["Pakistan", "Saudi Arabia", "Turkey", "Egypt", "Iraq", "Shamm"];

try{
    for(var i=0;i<=countries.length;i++)
        console.log(countries[i]);
}
catch {
    console.log("Array Index out Of Bound ");
}
finally {
    console.log(countries[0]);
}
