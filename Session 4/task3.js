/*
http://www.codewars.com/kata/function-cache
*/
function cache(func) {
  let result = {};
    return function() {
        const args = JSON.stringify(arguments);
        if (result.hasOwnProperty(args) === false) {
            result[args] = func(...arguments);
        };
        return result[args];
    };
}