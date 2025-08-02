// - Problem link : https://leetcode.com/problems/backspace-string-compare/description/
// - Date : 02/08/2025
// - Difficulty: Easy
// - Approach :Two Pointers , String , Stack

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    stackS = [];
    stackT = [];
    for(let i=0; i<s.length; i++){
        if(s[i] == '#'){
            stackS.pop();
        }
        else{
            stackS.push(s[i]);
        }
    }

    for(let j=0; j<t.length; j++){
        if(t[j] == '#'){
            stackT.pop();
        }
        else{
            stackT.push(t[j]);
        }
    }

    console.log("stackS",stackS);
    console.log("stackT",stackT);
    
    return stackS.join('') == stackT.join('');

};

console.log(backspaceCompare("ab#c", "ad#c"));
