/** 
 * Task # 31
 * No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
 * • If the list is empty, print the message We need to find some users!
 * • Remove all of the usernames from your array, and make sure the correct message is printed.
 * Date : 10/02/2022
 */
console.log("\nTask # 31\n");

var users = ["Saleem", "Keleem", "Naeem", "Weaseem", "admin"];

if(users.length>0) {
    users.splice(0,users.length);
    console.log("We need to find some users!");
}

