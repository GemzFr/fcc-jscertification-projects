/*https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first 
argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument
*/

function checkCashRegister(price, cash, cid) {
  const values = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  let change = cash - price;
  let cashInCid = cid.map(elem => elem[1]).reduce((a,b) => a+b);
  let result = {status: "OPEN", change: []}

  if (cashInCid < change) result.status = "INSUFFICIENT_FUNDS";
  if ( cashInCid === change) {
    result.status = "CLOSED";
    result.change = cid;
  }
  
  if (cashInCid > change) {
  for (let i = values.length-1; i > -1; --i) {
    let money = 0;

    while (values[i] <= change && cid[i][1] > 0) {
        change -= values[i];
        change = Math.round(change*100)/100
        money += values[i];
        cid[i][1] -= values[i];
      }
    if (money) result["change"].push([cid[i][0], money]);
    }

    let test = result["change"].reduce(function(sum, value) {
    return sum + value[1];},0);

    if (test < change) {
      result.status = "INSUFFICIENT_FUNDS";
      result.change = [];
    }
  }
   return result;
}