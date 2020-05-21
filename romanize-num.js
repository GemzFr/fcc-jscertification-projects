//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter
//build a function converting regular numbers to roman numbers
//20202/05/20: version 1.0

function convertToRoman(num) {
  const romNum = {
    1:"I", 2:"II", 3:"III", 4:"IV", 5:"V", 6: "VI", 7:"VII", 8:"VIII", 9:"IX", 10:"X", 20:"XX", 
    30:"XXX", 40:"XL", 50:"L", 60:"LX", 70:"LXX", 80:"LXXX", 90:"XC", 100:"C", 200:"CC", 300:"CCC", 
    400:"CD", 500:"D", 600:"DC", 700:"DCC", 800:"DCCC", 900:"CM", 1000:"M", 2000:"MM", 3000:"MMM"
  };
  const unitTenHundThous = []      //to store units,tens,hundreds,thousands
  const numData = num.toString().split("").reverse().map(item => parseInt(item));
  
  const multiplicize = (i = 0, mult = 1) => {
    if (i ===  numData.length-1) {
      unitTenHundThous[i] = mult*numData.slice(i,i+1);
    } else {
      unitTenHundThous[i] = mult*numData.slice(i,i+1);
      multiplicize(i+=1,mult*=10);
    }
  };
  multiplicize();
  return unitTenHundThous.map(val=>romNum[val]).reverse().join("")
}