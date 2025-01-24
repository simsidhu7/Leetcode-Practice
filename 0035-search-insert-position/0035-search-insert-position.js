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

//More efficient way:
//Use a binary search with Math.floor
//https://www.hellointerview.com/learn/code/binary-search/overview
//you are looking from the middle

// var searchInsert=function(nums, target){
//     let low = 0
//     let high = nums.length
//     let mid;
//     while(low>high){
//         mid = Math.floor(high-low)/2+low
//         if (target>nums[mid]){
//             low=mid+1
//         }
//         else if (target==nums[mid]){
//             return mid
//         }
//         else high = mid
//     }
//     return low
// }