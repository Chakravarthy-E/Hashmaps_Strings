let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}
function compress(st) {
  let result = "";
  let count = 1;
  let current = st[0];
  
  for (let i = 1; i < st.length; i++) {
    if (st[i] === current) {
      count++;
    } else {
      result += (count > 1 ? count : "") + current;
      current = st[i];
      count = 1;
    }
  }
  
  result += (count > 1 ? count : "") + current;
  
  return result;
}

let t = parseInt(readLine());
for (let i = 0; i < t; i++) {
  str = readLine();
  console.log(compress(st));
}
