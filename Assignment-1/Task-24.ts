/** 
 * Task # 24
 * More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to 
 * try more comparisons, write more tests. Have at least one True and one False result for each of the following:
 * • Tests for equality and inequality with strings
 * • Tests using the lower case function
 * • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
 * • Tests using "and" and "or" operators
 * • Test whether an item is in a array
 * • Test whether an item is not in a array
 * Date : 10/02/2022
 */
console.log("\nTask # 24\n");

// Tests for equality and inequality with strings
var today="Wednesday";
console.log(`01. Is today == 'Wednesday'? I pridict ${today=="Wednesday"?true:false}`);
console.log(`02. Is today != 'Wednesday'? I pridict ${today!="Wednesday"?true:false}`);

// Tests using the lower case function
console.log(`03. Is today == 'wednesday'? I pridict ${today=="Wednesday".toLowerCase()?true:false}`);

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var day=10;
console.log(`04. Is day == '10'? I pridict ${day==10?true:false}`);
console.log(`05. Is day != '10'? I pridict ${day!=10?true:false}`);
console.log(`06. Is day <  '10'? I pridict ${day<10?true:false}`);
console.log(`07. Is day <= '10'? I pridict ${day<=10?true:false}`);
console.log(`08. Is day >  '10'? I pridict ${day>10?true:false}`);
console.log(`09. Is day >= '10'? I pridict ${day>=10?true:false}`);

// Tests using "and" and "or" operators
var month=2;
console.log(`10. Is day == '10' and month =='2'? I pridict ${day==10 && month==2?true:false}`);
console.log(`11. Is day == '10' or month =='2'? I pridict ${day==11 || month==2?true:false}`);


// Test whether an item is in a array
var items = ["Keyboard","Mouse","LCD","CPU","Monitor","Speakers"];
console.log(`12. Is Monitor Available (items.indexOf("Monitor")!=-1)? I pridict ${items.indexOf("Monitor")!=-1?true:false}`);

// Test whether an item is not in a array
console.log(`13. Is CD not Available (items.indexOf("CD")==-1)? I pridict ${items.indexOf("CD")==-1?true:false}`);
