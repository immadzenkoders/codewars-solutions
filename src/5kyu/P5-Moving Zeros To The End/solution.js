/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/
function moveZeros(arr){
    let temp = [],count=0;
    for(let x=0;x<arr.length;x++){
      if(arr[x]!==0){
       temp.push(arr[x]);
      }
      else{
         count++;
      }
    }
    for(let x=0;x<count;x++){
     temp.push(0);
    }
    return temp;
 }
 