/*
http://www.codewars.com/kata/prefill-an-array
*/

function prefill(n, v) {
  
  if(n != parseInt(n, 10) || n<0 ){
    throw new TypeError(n+ " is invalid");
  }
  
  if(n==0){
    return Array(0);
  }
  
  return  Array(n).fill(v);
  
}