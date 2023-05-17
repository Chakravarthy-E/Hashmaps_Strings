let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}
//----------------------------------------------------
/*
function StairCase(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      str += " ";
    }
    for (k = 0; k < i + 1; k++) {
      str += "#";
    }
    console.log(str);
    str = "";
  }
}
let n = parseInt(readLine());z
StairCase(n);
*/
// ----------------------------------------------------
    let n = parseInt(readLine())
    let ladder = "";
    for (let i = 1; i <= n; i++) {
        // printing spaces
        for (let j = 0; j < n - i; j++) {
            ladder += " ";
        }
        // printing star
        for (let k = 0; k < i; k++) {
            ladder += "#";
        }
        ladder += "\n";
    }

console.log(ladder)