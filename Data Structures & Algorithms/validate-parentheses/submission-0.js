class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        let arr=[];
        const pairs = {')':'(', ']':'[', '}':'{'};
        for(let i =0; i<s.length; i++){
            
            
            if(s[i] === '(' || s[i] === '{' || s[i] === '['){
                arr.push(s[i])
            } 
            else if(s[i] === ')' || s[i] === '}' || s[i] === ']'){
                
                if(arr.length === 0) {
                    return false
                    }
                
                if(arr[arr.length-1] !== pairs[s[i]]){
                return false
                }
                arr.pop()
            }
            
        }
        return arr.length === 0
    }
}
