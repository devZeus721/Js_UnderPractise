/*Take the length(L) and breadth(B) of the
rectangle as input and find its area.

Autocomplete
function area(length , breadth) {

No need to specify return type
Input and output already taken care of, you have to just return the outp
let a= length
Concale
Length and breadth must be an
integer value and the area will
always be in the range of
integers.
*/

const prompt = require ("prompt-sync")({sigint: true})

let length = parseInt(prompt("Enter the length of the rectangle:"));
let breadth = parseInt(prompt("Enter the breadth of the rectangle:"));

//Calculating the area of the rectangle
let area = (length * breadth);

 //Displaying the area of the rectangle
console.log("The area of the rectangle is: " + area);



