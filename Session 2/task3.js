/*
http://www.codewars.com/kata/partition-on
*/

function partitionOn(pred, items) {

    var pos = items.filter(pred);
    var neg = items.filter(function(n){ return -1===pos.indexOf(n) });
    
    items.splice(0,items.length,...neg.concat(pos));
    
//  //Another way 
//    Array.prototype.splice.apply(items, [0,items.length].concat(neg.concat(pos))); 
    return neg.length;
    
  }