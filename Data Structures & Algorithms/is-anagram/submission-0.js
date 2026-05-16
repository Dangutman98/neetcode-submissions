class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        //edge cases
        if( s.length != t.length){
            return false
        }
        
        const sMap = new Map ();
        const tMap = new Map ();
        //loop the letters of each string and push inside the map of it.
        for(let letter of s){
            sMap.set(letter,(sMap.get(letter)||0)+1); // or 0 means 'undefind', +1 means next letter.
        } 
        for(let letter of t){
            tMap.set(letter,(tMap.get(letter)||0)+1); // or 0 means 'undefind', +1 means next letter.
        }
        
        //now need to compare both of them. loop over sMap and check key,value of tMap.
        for(let [key,value] of sMap){
            if(tMap.get(key) !== value){
                return false
            }
            
        }
        return true
    }
    
}
