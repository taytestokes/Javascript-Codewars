// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 0 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:
// +++
// +++
// +++

// Answer
function generateShape(int) {
    let shape = '';
    for (let i = 1; i <= int; i++) {
        if (i !== 1) {
            shape += '\n'
        }
        for (let j = 1; j <= int; j++) {
            shape += '+';
        }
    }
    return shape;
}