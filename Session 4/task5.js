/*
http://www.codewars.com/kata/function-composition-1
*/
function compose(...item) {
   return function(items) {
        return item.reduceRight((accumulator, element) => element(accumulator), items);
    }
}