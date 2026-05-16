class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        n = len(nums)
        # 1. Ensure all code inside the function is indented 4 spaces
        for i in range(n):
            for j in range(i + 1, n):
                # 2. Corrected 'num' to 'nums'
                if nums[i] == nums[j]: 
                    return True
        
        return False