class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        
        let key = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        key = key.split(' ').join('');
        let p1=0;
        let p2=key.length-1;
        
        
        while(p1<p2){
            if(key[p1]!==key[p2]){
                return false
            }

            p1++;
            p2--;
            
        }
        return true
        } 
        
    }
