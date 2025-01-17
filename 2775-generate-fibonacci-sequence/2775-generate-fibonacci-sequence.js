/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    //a = current number
    //b = next number
    let a = 0;
    let b = 1;

    for (let i = 0; i < Infinity; i++) {
        yield a; 
        //next Fibonacci pair
        //a updated to the previous value of b.
        //b is updated to the sum of the previous a and b.
        [a, b] = [b, a + b]; 
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */