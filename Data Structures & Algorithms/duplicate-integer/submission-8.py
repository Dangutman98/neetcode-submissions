class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        
        nMap = {}
        
        for i,num in enumerate(nums):
            if num in nMap:
                return True
            nMap[num] = i
        return False
       