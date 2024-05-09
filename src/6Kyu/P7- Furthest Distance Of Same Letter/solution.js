/*
Task
Given a string s of lowercase letters ('a' - 'z'), get the maximum distance between two same letters, and return this distance along with the letter that formed it.

If there is more than one letter with the same maximum distance, return the one that appears in s first.

Input/Output
[input] string s
A string of lowercase Latin letters, where at least one letter appears twice.

[output] a string
The letter that formed the maximum distance and the distance itself.

Example
For s = "fffffahhhhhhaaahhhhbhhahhhhabxx", the output should be "a23".

The maximum distance is formed by the character 'a' from index 5 to index 27 (0-based). Therefore, the answer is "a23".
*/


function distSameLetter(s) {
    let maxDistance = 0;
    let maxChar = '';

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] === s[j] && j - i > maxDistance) {
                maxDistance = j - i;
                maxChar = s[i];
            }
        }
    }

    maxDistance++;

    return maxChar + maxDistance;
}

// Test case
console.log(distSameLetter("nhezwdfgdmclblqbzffhuydthldxtaagmeyerumrnlhuofydnqfjyxpaxdozybypomnhjrjbuunnp"));