/*
http://www.codewars.com/kata/basic-mathematical-operations
*/

function basicOp(operation, value1, value2)
{
  // Code
  var result;
  switch(operation){
    case '+':
      return value1+value2;
      
    case '-':
      return value1-value2;
      
    case '*':
      return value1*value2;
      
    case '/':
      return value1/value2;
  }
}
