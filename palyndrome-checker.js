//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker

/*return true if given str is a palyndrome, otherwise return false
A palindrome is a word or sentence that's spelled the same way both 
forward and backward, ignoring punctuation, case, and spacing.*/

//2020/05/20 version 1.0: basic code, to improve

function palindrome(str) {
    let palCheck = str.toLowerCase().replace(/\W|_/g, "");
    let lengthCheck = Math.round(palCheck.length/2)
    let counter = 0;
   
    for (let i=0,j=palCheck.length-1;i<lengthCheck;i++,j--){
      if (palCheck[i] == palCheck[j]) {
          counter += 1;
      };
    }
    return counter === lengthCheck? true : false;
  }