/*
Task
Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

Notes
Multiple correct answers may be possible. In this case, return any one of them.
The given index will be inside the given array.
The given array will, therefore, never be empty.

Example
leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
leastLarger( [4, 1, 3, 5, 6], 4 )  => -1
*/


function leastLarger(a, i) {
    let minLarger = Infinity; 
    let minLargerIndex = -1; 

    for (let j = 0; j < a.length; j++) {
        if (a[j] > a[i] && a[j] < minLarger) { 
            minLarger = a[j]; 
            minLargerIndex = j; 
        }
    }

    if (minLargerIndex !== -1) { 
        return minLargerIndex; 
    } else { 
        return -1; 
    }
}

console.log(leastLarger([1,2,3,4],2));