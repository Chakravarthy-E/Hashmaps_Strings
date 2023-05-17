let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}
function compress(s) {
  let result = "";
  let count = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {   
      result += s[i];
      if (count > 1) result += count;
    }
  }
  return result;
}
let t = parseInt(readLine());
for(let i = 0; i < t; i++) {
let s = readLine()
  console.log(compress(s));
}
