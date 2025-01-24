/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const foundTarget=nums.indexOf(target)
    if (foundTarget != -1) {
        return foundTarget
    } else {
        nums.push(target)
        nums.sort((a,b)=>a-b)
        const newFoundTarget = nums.indexOf(target);
        return newFoundTarget;
    }
};