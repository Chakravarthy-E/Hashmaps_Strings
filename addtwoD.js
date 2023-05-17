const { connected } = require("process");

let a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let b = [
  [11, 12, 13],
  [14, 15, 16],
  [17, 18, 19],
];
let ans = [];
for (let i = 0; i < a.length; i++) {
  ans.push([]);
  for (let j = 0; j < a[i].length; j++) {
    ans[i][j] = a[i][j] + b[i][j];
  }
}
console.log(ans);
console.log(a.length)

