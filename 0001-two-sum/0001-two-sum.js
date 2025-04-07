/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //create an empty object to store numbers and their indices
    const map = {};
    // Iterate through the array
    for (let i = 0 ; i < nums.length; i++){
        const complement = target - nums[i];
        // Check if the complemet exist in our map
        if(map.hasOwnProperty(complement)){
            // If found, return the indices
            return [map[complement],i];
        }
        // Otherwise, store the current number with its index
        map[nums[i]] = i;
    }
};