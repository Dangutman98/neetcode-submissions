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
        //check if there is option to sum two nums to get target value    
            const difference = target - current;
            
        //look if map has this difference number in it.
        //get this difference number and it index - sum this values to get target
            if(map.has(difference)){
                return [map.get(difference),i]
            }
        //use  
            map.set(current,i)
        }

    }
}
