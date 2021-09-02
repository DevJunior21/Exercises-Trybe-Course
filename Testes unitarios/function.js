const assert = require('assert')

const division = (x, y) => {
if(y === 0 ) throw new Error ('parametro y must not be 0');
    return x / y;
}
console.log(division(4, 2))

assert.strictEqual(typeof division, 'function')