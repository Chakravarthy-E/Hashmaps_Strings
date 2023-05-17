let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}
function Vowels(n, str) {
  let vowels = "aeiou";
  for (let i = 0; i < n; i++) {
    if (!str.includes(vowels[i])) {
      return "NO";
    }
  }
  return "YES";
}
let n = parseInt(readLine());
let str = readLine().split("");
console.log(Vowels(n, str));
