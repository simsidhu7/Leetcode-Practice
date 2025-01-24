/**
 * @return {null|boolean|number|string|Array|Object}
 */
 //This is an array class. 
Array.prototype.last = function() {
    //This calls the method on the array itself.
if (this.length===0){
    return -1
    }
    else{
        return this[this.length-1]
    
}
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */