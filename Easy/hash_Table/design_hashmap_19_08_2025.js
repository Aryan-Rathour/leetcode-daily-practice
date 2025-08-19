// - Problem link : https://leetcode.com/problems/design-hashmap/description/
// - Date : 19/08/2025
// - Difficulty: Easy
// - Approach : Array , Hash Table



var MyHashMap = function() {
    this.map ={};
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    this.map[key] = value;
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    return this.map.hasOwnProperty(key) ? this.map[key] : -1
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
   if(this.map.hasOwnProperty(key)){
    delete this.map[key]
   }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */