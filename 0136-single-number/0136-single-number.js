/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let num = 0;
    for(let i of nums){
        num = num^i
    }
    return num
};