let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}
function excelTitle(colNum) {
    let colTitle = "";
    while (colNum > 0) {
        colNum -= 1;
        colTitle = String.fromCharCode(65 + (colNum % 26)) + colTitle;
        colNum = Math.floor(colNum / 26);
    }
    return colTitle;
}

let n = parseInt(readLine())
let colNum = []
for(let i=0;i<n;i++){
    colNum[i]=parseInt(readLine())
    console.log(excelTitle(colNum))
}