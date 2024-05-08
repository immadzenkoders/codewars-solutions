// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

function differenceInAges(ages) {
  var youngest = ages[0];
  var oldest = ages[0];
  
  for (var i = 0; i <= ages.length; i++) {
    if (ages[i] > oldest) {
      oldest = ages[i];
    } else if (ages[i] < youngest) {
      youngest = ages[i];
    }
  }
  
  var diff = oldest - youngest;
  return [youngest, oldest, diff];
}
