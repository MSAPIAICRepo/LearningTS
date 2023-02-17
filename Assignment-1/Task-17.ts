/** 
 * Task # 17
 * Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
 * and you have space for only two guests.
 * • Start with your program from Exercise 16. Add a new line that prints a message saying that you can 
 *   invite only two people for dinner.
 * • Remove guests from your list one at a time until only two names remain in your list. Each time you 
 *   pop a name from your list, print a message to that person letting them know you’re sorry you can’t 
 *   invite them to dinner.
 * • Print a message to each of the two people still on your list, letting them know they’re still invited.
 * • Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
 *   actually have an empty list at the end of your program.
 * Date : 10/02/2022
 */
console.log("\nTask # 17\n");

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
console.log("Attention All! I am Sorry, the Bigger Table for Dinner is not available and i can invite only 02 people \n");

console.log("\nDelete All Names except Last Two");
var deletedGuest = guests.splice(0,guests.length-2);
for(var guest of deletedGuest){
    console.log(`Dear ${guest}! I am Sorry I cann't Invite you on dinner`);
}

console.log("\nMessage For Remaining Last Two Guests ");
for(var guest of guests){
    console.log(`${guests.indexOf(guest)}.Dear ${guest}! You are Still invited on 18th Feb 2023 on My Son Tabraiz's birthday`);
}

console.log("\nDeleting Last Two Names");
deletedGuest = guests.splice(0,guests.length);
console.log(`${deletedGuest} Now Deleted`);    

console.log("\nPrinting Empty List");
for(var guest of guests){
    console.log(`${guests.indexOf(guest)}.${guest}`);
}
