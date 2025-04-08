class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        if x < 0:
            return False

        s = str(x)
        n = len(s)

        for i in range(n//2):
            if s[i] != s[n - i - 1]:
                return False
        return True
        