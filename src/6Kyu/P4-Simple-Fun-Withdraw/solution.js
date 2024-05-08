/*
An ATM ran out of 10 dollar bills and only has 100, 50 and 20 dollar bills.

Given an amount between 40 and 10000 dollars (inclusive) and assuming that the ATM wants to use as few bills as possible, determinate the minimal number of 100, 50 and 20 dollar bills the ATM needs to dispense (in that order).

Example
For n = 250, the result should be [2, 1, 0].

For n = 260, the result should be [2, 0, 3].

For n = 370, the result should be [3, 1, 1].

Input/Output
[input] integer n Amount of money to withdraw. Assume that n is always exchangeable with [100, 50, 20] bills.
[output] integer array An array of number of 100, 50 and 20 dollar bills needed to complete the withdraw (in that order).
*/

function withdraw(amount) {
    let result = [0, 0, 0];
    
    let remainder = amount % 100;
    if ((remainder === 10 || remainder === 30) && (amount >= 100)) {
      result[0] = Math.floor(amount / 100) - 1;
    } else {
      result[0] = Math.floor(amount / 100);
    }
    amount -= result[0] * 100;
      
    // for 50
    if (amount % 20 === 0) {
      result[1] = 0;
    } else if (amount < 50) {
      result[1] = 0;
    } else {
      result[1] = 1;
    }
    amount -= result[1] * 50;
      
    // for 20
    result[2] = Math.floor(amount / 20);
    return result;
  }
  
  console.log(withdraw(200)); 
  
  
  