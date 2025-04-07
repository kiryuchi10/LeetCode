class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        mapping = {}
        for i, num in enumerate(nums):
            complement = target - num
            if complement in mapping:
                return [mapping[complement],i]
            mapping[num] = i