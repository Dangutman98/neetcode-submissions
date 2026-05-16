class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        sMap = {}

        for char in s:
            sMap[char] = sMap.get(char,0) + 1
        for char in t:
            if char not in sMap or sMap[char] == 0:
                return False
            sMap[char] -= 1
        return True
        