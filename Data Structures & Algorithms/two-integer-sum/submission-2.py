class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
       #dictionary
       prev_map = {}
       #loop index i, key n in nums
       for i,n in enumerate(nums):
           #difference = target - current num
           diff = target - n
#if we have in the map the difference?
#return the number in the index of difference, what we need to find.
#and his index in the list of nums
           if diff in prev_map:
                return[prev_map[diff],i]
           prev_map[n] = i

       

            