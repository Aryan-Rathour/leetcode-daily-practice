// - Problem link : https://leetcode.com/problems/degree-of-an-array/description/
// - Date : 18/08/2025
// - Difficulty: Easy
// - Approach : Array , Hash Table


var MyHashSet = function() {
      this.set = [];
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    if(!this.set.includes(key)){
        this.set.push(key);
    }
    
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    let idx = this.set.indexOf(key);
    if(idx !== -1){
        this.set.splice(idx, 1);
    }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    return this.set.includes(key);
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */