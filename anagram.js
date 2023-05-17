let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
function IsAnagram(a, b) {
  for (let i = 0; i < a.length; i++) {
    let x = a[i];
    b = b.replace(x, "");
  }
  if (b.length == 0) {
    return "1";
  } else {
    return "0";
  }
}
let a = readLine();
let b = readLine();
console.log(IsAnagram(a, b));
