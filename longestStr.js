let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}
function longsetStr(str) {
  let strSpl = str.split(" ");
  let longestLen = 0;
  for (let i = 0; i < strSpl.length; i++) {
    if (strSpl[i].length > longestLen) {
      longestLen = strSpl[i].length;
    }
  }
  if (longestLen > 0) {
    return ;
  } else {
    return 0;
  }
}
let str = readLine();
console.log(longsetStr(str));
