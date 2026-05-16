class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        //edge cases
        if(nums.length <2 || nums.length > 1000){
            return false
        }

        const map = new Map();

        for(let i=0; i<nums.length; i++){
            
            const current = nums[i];
            const difference = target - current;
            
            if(map.has(difference)){
                return [map.get(difference),i]
            }

            map.set(current,i)
        }

    }
}
