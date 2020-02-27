/*
http://www.codewars.com/kata/get-the-middle-character
*/

function getMiddle(s)
{
  //Code goes here!
  var length=s.length;
  var result;
  
  if(length%2==0){
    result= s.substr(length/2-1,2);
  }
  else{
    result= s.substr(length/2,1);
  }
  return result;
}