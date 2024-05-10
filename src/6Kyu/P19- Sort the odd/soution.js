/*You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/


function sortArray(array) {
    for(let x=0; x<array.length;x++){
        for(let y=x+1; y<array.length;y++){
            if(array[x]>array[y] && array[x]%2!=0 && array[y]%2!=0){
               let temp = array[x];
               array[x]=array[y];
               array[y]=temp;
            }
        }
    }
    return array;
}