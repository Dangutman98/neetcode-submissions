class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
//maximum = maximum profit
        let maximum = 0;
        let minimum = prices[0];
        let currentProfit = 0;
        
//each num, we check current profit.        
        for(let i=0; i< prices.length; i++){
        currentProfit = prices[i]-minimum;
//if currentProfit > maximum so we change maximum to be bigger
            if(maximum<currentProfit){
            maximum = currentProfit
            }
            //check if the next number is smaller
            if(minimum>prices[i]){
                minimum = prices[i]
            }
        }
//maximal profit
        return maximum

    }
}
