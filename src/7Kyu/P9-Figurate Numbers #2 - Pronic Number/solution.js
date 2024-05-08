/*Pronic Number -A pronic number, oblong number, rectangular number or heteromecic number, is a number which is the product of two consecutive integers, that is, n(n + 1).

The first few Pronic Numbers are - 0, 2, 6, 12, 20, 30, 42...

Explanation:
  0 = 0 × 1   // ∴  0 is a Pronic Number
  2 = 1 × 2   // ∴  2 is a Pronic Number
  6 = 2 × 3   // ∴  6 is a Pronic Number
 12 = 3 × 4   // ∴ 12 is a Pronic Number
 20 = 4 × 5   // ∴ 20 is a Pronic Number
 30 = 5 × 6   // ∴ 30 is a Pronic Number
 42 = 6 × 7   // ∴ 42 is a Pronic Number
Note:
Negative numbers are tested as well.

*/

function isPronic(n) {
    if (n < 0) {
        return false;
    }

    for (let i = 0; i <= Math.sqrt(n); i++) {
        if (i * (i + 1) === n) {
            return true;
        }
    }

    return false;
}

console.log((isPronic(5)))

