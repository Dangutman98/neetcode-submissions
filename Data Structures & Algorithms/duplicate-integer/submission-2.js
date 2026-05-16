class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
       
        const countMap = new Map();

        if(nums.length<2){
            return false
        }

        for(let num of nums){
            if(countMap.has(num)){
                return true
            }
            countMap.set(num,true)
            
        }
        return false
    }
}
