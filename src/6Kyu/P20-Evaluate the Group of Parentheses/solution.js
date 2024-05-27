/*
The function is given a non-empty balanced parentheses string. Each opening '(' has a corresponding closing ')'.
Compute the total score based on the following rules:

Substring s == () has score 1, so "()" should return 1
Substring s1s2 has total score as score of s1 plus score of s2, so "()()" should return 1 + 1 = 2
Substring (s) has total score as two times score of s, so "(())" should return 2 * 1 = 2
Return the total score as an integer.

Examples
eval_parentheses("()") ➞ 1
# 1

eval_parentheses("(())") ➞ 2
# 2 * 1

eval_parentheses("()()") ➞ 2
# 1 + 1

eval_parentheses("((())())") ➞ 6
# 2 * (2 * 1 + 1)

eval_parentheses("(()(()))") ➞ 6
# 2 * (1 + 2 * 1)

eval_parentheses("()(())") ➞ 3
# 1 + 2 * 1

eval_parentheses("()((()))") ➞ 5
# 1 + 2 * 2 * 1
*/


function evalParentheses(parens) {
    let stack = [];
    let score = 0;
  
    for (let i = 0; i < parens.length; i++) {
      if (parens[i] === '(') {
        stack.push(score);
        console.log(" before push" +score);
        score = 0; 
        console.log("after push"+score);
        
      } else {
        console.log(" before cal" +score);
        score = stack.pop() + Math.max(1, score * 2);
        console.log("aftercal"+score);
       
      }
    }
  
    return score;
  }
  
  console.log(evalParentheses("((((()))))"));