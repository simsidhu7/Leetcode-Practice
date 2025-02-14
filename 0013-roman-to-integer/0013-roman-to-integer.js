/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanValues = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    };

    let total = 0;
    let prev = 0;

    //From right to left
    for (let i = s.length - 1; i >= 0; i--) {
        let current = romanValues[s[i]];

        if (current < prev) {
// Subtract if a smaller value before a larger one.
            total -= current; 
        } else {
//Add
            total += current; 
        }
// Update the previous value.
        prev = current; 
    }
    return total;
};