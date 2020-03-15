/*
http://www.codewars.com/kata/array-helpers 
*/
Array.prototype.square = function() {
    return this.map( (elem) => {
        return elem*elem;
    });
}
Array.prototype.cube = function() {
    return this.map( (elem) => {
        return elem*elem*elem;
    });
}
Array.prototype.sum = function() {
    return this.reduce((a, b) => {
        return a + b;
    },0);
}
Array.prototype.average = function() {
    return this.reduce((a, b) => {
        return a + b;
    },0)/this.length;
}
Array.prototype.even = function() {
    return this.filter((elem) => {
        return elem % 2 === 0;
    });
}
Array.prototype.odd = function() {
    return this.filter((elem) => {
        return elem % 2 !== 0;
    });
}