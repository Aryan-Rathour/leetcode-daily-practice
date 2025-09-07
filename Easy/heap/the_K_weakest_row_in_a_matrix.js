// - Problem link : https://leetcode.com/problems/relative-ranks/description/
// - Date : 02/09/2025
// - Difficulty: Easy
// - Approach : Heap

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  const m = mat.length;
  const n = mat[0].length;

  const soldierCount = (row) => {
    let left = 0,
      right = n;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (row[mid] === 1) left = mid + 1;
      else right = mid;
    }
    return left;
  };

  let heap = [];

  for (let i = 0; i < m; i++) {
    let soldiers = soldierCount(mat[i]);
    heap.push([soldiers, i]);

    heap.sort((a, b) => {
      if (a[0] == b[0]) return b[1] - a[1];
      return b[0] - a[0];
    });

    if (heap.length > k) {
      heap.shift();
    }
  }

  heap.sort((a, b) => {
    if (a[0] == b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });

  return heap.map((x) => x[1]);
};

(mat = [
  [1, 1, 0, 0, 0], // 2 soldiers
  [1, 1, 1, 1, 0], // 4 soldiers
  [1, 0, 0, 0, 0], // 1 soldier
  [1, 1, 0, 0, 0], // 2 soldiers
  [1, 1, 1, 1, 1], // 5 soldiers
]),
  (k = 3);

console.log(kWeakestRows(mat, 3));
