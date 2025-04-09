class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        roman_vals = {
            'I': 1, 
            'V': 5, 
            'X': 10,
            'L': 50, 
            'C': 100, 
            'D': 500, 
            'M': 1000
        }
        
        total = 0
        # Iterate over the string by index.
        for i in range(len(s)):
            # If the current numeral is less than the next numeral,
            # it means we need to subtract its value.
            if i + 1 < len(s) and roman_vals[s[i]] < roman_vals[s[i + 1]]:
                total -= roman_vals[s[i]]
            else:
                total += roman_vals[s[i]]
        return total
    
        