const assert = require('assert');

// escreva greet abaixo
const greet = (name, saudacão = 'Hi') => `${saudacão} ${name}` 

assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');


          
const numbers = [3, 12, 1, 21, 23];
const foundElements = numbers.find(c => c > 10);
console.log(foundElements);

        