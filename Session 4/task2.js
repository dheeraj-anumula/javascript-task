  /*
  http://www.codewars.com/kata/a-chain-adding-function
  */
  function add(n) {
    let fn = function(x) {
      return add(n + x);
    };

    fn.valueOf = function() {
      return n;
    }
    return fn;
  }