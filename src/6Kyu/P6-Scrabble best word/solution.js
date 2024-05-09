/*
You're playing to scrabble. But counting points is hard.

You decide to create a little script to calculate the best possible value.

The function takes two arguments :

`points` : an array of integer representing for each letters from A to Z the points that it pays
`words` : an array of strings, uppercase

You must return the index of the shortest word which realize the highest score.
If the length and the score are the same for two elements, return the index of the first one.
*/

function getBestWord(points, words) {
    function calculateScore(word) {
        let score = 0;
        for (let i = 0; i < word.length; i++) {
            let index = word.charCodeAt(i) - 65;
            score += points[index];
        }
        return score;
    }

    let bestScore = -1;
    let bestIndex = -1;
    let shortestLength = Infinity;

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let score = calculateScore(word);
        if (score > bestScore || (score === bestScore && word.length < shortestLength)) {
            bestScore = score;
            bestIndex = i;
            shortestLength = word.length;
        }
    }

    return bestIndex;
}

const points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
const words = ["HELLO", "WORLD", "SCRABBLE", "AI", "GPT"];

console.log(getBestWord(points, words)); 