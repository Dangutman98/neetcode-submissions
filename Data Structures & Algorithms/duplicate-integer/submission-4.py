class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:

        nuMap = {}
        for num in nums:
            if num in nuMap:
                return True
            nuMap[num] = True
        return False 