/*
http://www.codewars.com/kata/closures-and-scopes/train/javascript
*/
function createFunctions(n) {
 let callbacks = [];

  for (let i=0; i<n; i++) {
    
    callbacks.push(( ()=> { 
        let pos = i; 
        return (()=>  pos );
        })());
  }
  
  return callbacks;
}
