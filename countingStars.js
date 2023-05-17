let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}
function countStars(str, n) {
  let m = new Map();
  let res = 0;
  for (let i = 0; i < n; i++) {
    if (!m.has(str[i])) {
      res += 0;
      m.set(str[i], 1 + 0);
    } else {
      res += m.get(str[i]);
      m.set(str[i], 1 + m.get(str[i]));
    }
  }
  return res
}
let t = parseInt(readLine());
while (t--) {
  let n = parseInt(readLine());
  let str = readLine();
  console.log(countStars(str, n));
}
