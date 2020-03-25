/*
http://www.codewars.com/kata/new-with-apply
*/
function construct(Class) {
    let obj = Object.create(Class.prototype);
    Class.apply(obj, Array.from(arguments).slice(1));
    return obj;
}