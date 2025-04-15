class Solution(object):
    def strStr(self, haystack, needle):
        """
        :type haystack: str
        :type needle: str
        :rtype: int
        """
         # Check if needle is empty, if so return 0
        if not needle:
            return 0
        
        # Iterate through the haystack to find the first occurrence of the needle
        for i in range(len(haystack) - len(needle) + 1):
            # Check if the substring starting from index i matches the needle
            if haystack[i:i+len(needle)] == needle:
                return i
        
        # Return -1 if needle is not found in haystack
        return -1