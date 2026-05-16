class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */

    //given array sorted bottom - up
    //given target number
    //returning array of numbers with 2 numbers
    //solution o(1) - without loops
    twoSum(numbers, target) {

        let p1=0;
        let p2=numbers.length-1;

        while(p1<p2){
        let sum =numbers[p1] + numbers[p2]
            if(sum>target ){
                p2--;
            }
            else if(sum<target){
                p1++
                
            }
            else{
                  
                return [p1+1,p2+1]
            }
        }
    
    }
}
