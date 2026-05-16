class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        //first i should find an anagram, then to put it in group of arrays from the same anagram
        const map = new Map();
        
        for(let str of strs){
            // create key and order it with alphabetic letters.
            const key = str.split('').sort().join('');
            //check if the map has this key. if not put it inside array.
            if(!map.has(key)){
                map.set(key,[])
            }
        //get the key array from the map and push to the specific
        //array the str now it checking     
        map.get(key).push(str)
        }
        //clean way to return an array - with the map values
        return Array.from(map.values());

    }
}
