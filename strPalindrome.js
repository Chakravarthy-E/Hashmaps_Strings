let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
function Palindrome(str) {
  //    let reversed = str.split('').reverse().join('')
  //    if(str === reversed){
  //     return "YES"
  //    }
  //    else{
  //     return "NO"
  //    }
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  if (str === revStr) {
    return "YES";
  } else {
    return "NO";
  }
}
let str = readLine();
str = str.toLowerCase();
console.log(Palindrome(str));
