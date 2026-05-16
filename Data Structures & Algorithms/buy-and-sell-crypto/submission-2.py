class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        current = 0
        maxi = 0
        
        for i in range(len(prices)):
            for j in range(i+1,len(prices)):
                current = prices[j]-prices[i]
                if current > maxi:
                    maxi = current
        return maxi