class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        
        left = 0
        maxi = 0

        for right in range(1,len(prices)):
            if prices[left] < prices[right]:
                maxi = max(maxi, prices[right] - prices[left])
            else:
                left = right
        return maxi