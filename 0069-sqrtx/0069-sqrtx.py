class Solution(object):
    def mySqrt(self, x):
        """
        :type x: int
        :rtype: int
        """
        if x < 2:
            return x
        r = x >> 1
        while r * r > x:
            r = (r + x // r) >> 1
        return r 