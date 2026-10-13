/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let total = parseInt(n*(n+1)/2);
    let elSum = 0;

    for(let i of nums){
        elSum += i
    }

    return total - elSum
};