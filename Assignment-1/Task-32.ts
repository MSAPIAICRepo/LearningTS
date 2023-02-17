/** 
 * Task # 32
 * Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone 
 * has a unique username.
 * • Make a list of five or more usernames called current_users.
 * • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also 
 *   in the current_users list.
 • • Loop through the new_users list to see if each new username has already been used. If it has, print a message 
 *   that the person will need to enter a new username. If a username has not been used, print a message saying 
 *   that the username is available.
 * • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
 * Date : 10/02/2022
 */
console.log("\nTask # 32\n");

var current_users = ["Saleem", "Keleem", "Naeem", "Weaseem", "admin"];
var new_users = ["Salman", "Irfan", "Imran", "Kamran", "Admin","weaseem","saleem"];
var index = -1;

for(var nUser of new_users) {
    for(var cUser of current_users){
        if(cUser.toLocaleLowerCase() == nUser.toLowerCase()){
            index = current_users.indexOf(cUser);
            break;
        }
    }
    if(index!=-1){
        console.log(`User ${nUser} will need to enter a new username`);
    }else{
        console.log(`User Name ${nUser} is available`);
    }
}