/** 
 * Task # 38
 * Cities: Write a function called describe_city() that accepts the name of a city and its country. The function 
 * should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default 
 * value. Call your function for three different cities, at least one of which is not in the default country.
 * Date : 10/02/2022
 */
console.log("\nTask # 38\n");

function describe_city(cityName:string, countryName:string="Pakistan") {
    console.log(`${cityName} is in ${countryName}`);
}

describe_city("Karachi");
describe_city("Lahore");
describe_city("Kolkata", "Bangladesh");
describe_city("Dehli","India");