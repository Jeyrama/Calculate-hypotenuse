/*
Complete the function, calculateHypotenuse(a,b), which will return the length of the hypotenuse 
for a right angled triangle with the other two sides having a length equal to the inputs. 

Note:
  The returned value should be a number rounded to three decimal places.
  An error should be thrown if an invalid input is provided 
  (inputs should both be numbers that are above zero).

calculateHypotenuse(1,1); // returns 1.414
calculateHypotenuse(3,4); // returns 5
calculateHypotenuse(-2,1); // throws error
calculateHypotenuse("one", "two"); // throws error
*/


// Solution

function calculateHypotenuse(a,b){
  if (!+a || !+b || typeof(a) != 'number' || typeof(b) != 'number' || a<0 || b<0) throw 'error';
  return Math.sqrt(a*a + b*b).toFixed(3);
}

// or

function calculateHypotenuse(a,b){
  if( typeof a === 'number'
    && typeof b === 'number'
    && a > 0 && b > 0 ) return (Math.sqrt(Math.pow(a,2) + Math.pow(b,2))).toFixed(3) 
    else throw("Something is wrong!");
}