class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        stack = []
        mapping = {')': '(', '}': '{', ']': '['}

        for char in s:
            if char in mapping.values():  # opening brackets
                stack.append(char)
            elif char in mapping:  # closing brackets
                if not stack or mapping[char] != stack.pop():
                    return False
            else:
                return False  # invalid character
        return not stack  # stack should be empty if valid