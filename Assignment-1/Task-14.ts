/** 
 * Task # 14
 * Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
 * Make a list that includes at least three people you’d like to invite to dinner. Then use your 
 * list to print a message to each person, inviting them to dinner.
 * Date : 10/02/2022
 */
console.log("\nTask # 14\n");

var guests : string[] = ["Junaid Pasha", "Rana Zafar", "Shariq Abdul Baqi", "Zulfiqar"];

for(var guest of guests){
    console.log(`Dear ${guest}! You are cordially invited on 18th Feb 2023 on My Son Tabraiz's birthday`);
}