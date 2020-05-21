//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher
/*
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
ROT13 works like this:
the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

All letters will be uppercase. 
Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
  let output = [];
  str.split("").map(function(elem) {
   let trans = parseInt((elem.charCodeAt()), 10);
   if (trans < 65) output.push(String.fromCharCode(trans));
   if (trans >= 65 && trans <= 77) {
     output.push(String.fromCharCode(trans + 13));
   } else if (trans > 77) {
     output.push(String.fromCharCode(trans - 13));
   }
  });
  return output.join("")
}