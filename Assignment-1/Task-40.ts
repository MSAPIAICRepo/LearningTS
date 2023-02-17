/** 
 * Task # 40
 * Album: Write a function called make_album() that builds a Object describing a music album. The function should 
 * take in an artist name and an album title, and it should return a Object containing these two pieces of information. 
 * Use the function to make three dictionaries representing different albums. Print each return value to show that 
 * Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you 
 * to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add 
 * that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
 * Date : 10/02/2022
 */
console.log("\nTask # 40\n");

function make_album(aName: string, aTitle: string, tracks:number=0) {
    return {
        artistName: aName,
        albumTitle: aTitle,
        NoOfTracks: tracks
    }
}
var d1 = make_album("Mehdi Hassan","Kamal Karty Ho");
var d2 = make_album("Noor Jahan","Neher Wala Pull");
var d3 = make_album("Nazia Hassan","Boom Boom",5);

console.log(`Artist Name: ${d1.artistName}, Album Title:${d1.albumTitle}, Tracks:${d1.NoOfTracks}`);
console.log(`Artist Name: ${d2.artistName}, Album Title:${d2.albumTitle}, Tracks:${d2.NoOfTracks}`);
console.log(`Artist Name: ${d3.artistName}, Album Title:${d3.albumTitle}, Tracks:${d3.NoOfTracks}`);

