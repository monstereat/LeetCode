
// 第一题目
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var result = []
    for(var i = 0; i < nums.length; i++){
        for(var j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                result.push(i)
                result.push(j)
            }
        }
    }
    return result
};

// 解法二
var twoSum = function(nums, target) {
    var ret = [];
    var exist = {};
    for(var i = 0; i < nums.length; i++){
        if(typeof(exist[target - nums[i]]) !== 'undefined'){
            ret.push(exist[target - nums[i]]);
            ret.push(i);
        }

        exist[nums[i]] = i;
    }
    return ret
}
