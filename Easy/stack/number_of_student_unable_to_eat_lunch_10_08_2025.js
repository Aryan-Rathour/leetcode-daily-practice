// - Problem link : https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/description/
// - Date : 10/08/2025
// - Difficulty: Easy
// - Approach : Queue , Stack , Array

/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let rotation = 0;
    while(students.length > 0 && rotation <students.length){
        if(sandwiches[0] == students[0]){
            sandwiches.shift();
            students.shift();
            rotation =0;
        }
        else{
            let temp = students.shift();
            students.push(temp)
            rotation++;
        }
    }
    return students.length;
};

console.log(countStudents([1,1,1,0,0,1] , [1,0,0,0,1,1]));
