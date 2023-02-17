/** 
 * Task # 45
 * Cars: Write a function that stores information about a car in a Object. The function should always receive a 
 * manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function 
 * with the required information and two other name-value pairs, such as a color or an optional feature. Print the 
 * Object that’s returned to make sure all the information was stored correctly.
 * Date : 10/02/2022
 */
console.log("\nTask # 45\n");

var catalog = new Array<object>;

function carInfo (manufacturer: string, model: string, arbKeyArgs:string[]){
    var carObject = {
        maker: manufacturer,
        model: model,
        oInfo: arbKeyArgs
   }
   catalog.push(carObject);
};

carInfo("Toyota","2018",["Color=Red","Type=Saloon"]);
carInfo("Suzuki","2019",["Color=Pink","Type=Van"]);
carInfo("Honda","2020",["Color=Purple","Type=MPV"]);

catalog.forEach(car=> console.log(car));
