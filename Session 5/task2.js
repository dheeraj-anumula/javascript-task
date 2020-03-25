/*
http://www.codewars.com/kata/extract-nested-object-reference
*/

Object.prototype.hash = function(string) {
      let obj = this;
    let fields = string.split(".");
    let len = fields.length;
    for (let i = 0; i<len; i++){
        if (fields[i] in obj) {
          obj = obj[fields[i]];
        } else return undefined;
    }
    return obj;
}