class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maximum = 0;
        let minimum = prices[0];
        let currentProfit = 0;
        
        for(let i=0; i< prices.length; i++){
        currentProfit = prices[i]-minimum;

            if(maximum<currentProfit){
            maximum = currentProfit
            }
            if(minimum>prices[i]){
                minimum = prices[i]
            }
        }
        return maximum

    }
}
