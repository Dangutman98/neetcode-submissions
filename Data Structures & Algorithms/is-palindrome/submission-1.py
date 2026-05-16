class Solution:
    def isPalindrome(self, s: str) -> bool:
        
    #sorting.
        fixed = ""
        for char in s:
            if char.isalnum():
                fixed = fixed + char.lower().strip()
        reverse = fixed[::-1]
        if reverse == fixed:
            return True
        return False 
    