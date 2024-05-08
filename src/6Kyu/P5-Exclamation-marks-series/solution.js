/*
Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

Examples
"!!", "??"     -->  "Right"
"!??", "?!!"   -->  "Left"
"!?!!", "?!?"  -->  "Left"
"!!???!????", "??!!?!!!!!!!"  -->  "Balance"
*/

function balance(left, right) {
    let leftCount = (left.match(/!/g) || []).length * 2 + (left.match(/\?/g) || []).length * 3;
    let rightCount = (right.match(/!/g) || []).length * 2 + (right.match(/\?/g) || []).length * 3;
  
    if (leftCount > rightCount) {
      return "Left";
    } else if (leftCount < rightCount) {
      return "Right";
    } else {
      return "Balance";
    }
  }
  
  console.log(balance('!!', '??')); 
  