/*
http://www.codewars.com/kata/basic-mathematical-operations
*/

function basicOp(operation, value1, value2)
{
  // Code
  var result;
  switch(operation){
    case '+':
      result=value1+value2;
      break;
    case '-':
      result=value1-value2;
      break;
    case '*':
      result=value1*value2;
      break;
    case '/':
      result=value1/value2;
      break;
  }
  return result;
}