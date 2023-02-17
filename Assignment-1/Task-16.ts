/** 
 * Task # 16
 * More Guests: You just found a bigger dinner table, so now more space is available. Think of three more 
 * guests to invite to dinner.
 * • Start with your program from Exercise 15. Add a print statement to the end of your program informing 
 *   people that you found a bigger dinner table.
 * • Add one new guest to the beginning of your array.
 * • Add one new guest to the middle of your array. 
 * • Use append() to add one new guest to the end of your list. 
 * • Print a new set of invitation messages, one for each person in your list.
 * Date : 10/02/2022
 */
console.log("\nTask # 16\n");

var guests : string[] = ["Junaid Pasha", "Rana Zafar", "Shariq Abdul Baqi", "Zulfiqar"];

for(var guest of guests){
    console.log(`${guests.indexOf(guest)}.Dear ${guest}! You are cordially invited on 18th Feb 2023 on My Son Tabraiz's birthday`);
}
console.log(`\n${guests[1]} can't attend the birthday\n`);

guests[1] = "Rehan";
for(var guest of guests){
    console.log(`${guests.indexOf(guest)}.Dear ${guest}! You are cordially invited on 18th Feb 2023 on My Son Tabraiz's birthday`);
}
console.log("Attention All! I found a Bigger Table for Dinner now\n");

guests.unshift("Imran Baig");
guests.splice(3,0,"Zia Ullah Khan");
guests.push("Kaleem Khan");

for(var guest of guests){
    console.log(`${guests.indexOf(guest)}.Dear ${guest}! You are cordially invited on 18th Feb 2023 on My Son Tabraiz's birthday`);
}