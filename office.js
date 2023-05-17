let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}
function assessHappiness(names, scores) {
  let totalScore = 0;
  for (let i = 0; i < names.length; i++) {
    if (names[i] === "boss" || names[i] === "Boss") {
      totalScore += scores[i] * 2;
    } else {
      totalScore += scores[i];
    }
  }
  let averageScore = totalScore / scores.length;
  if (averageScore > 5) {
    return "I still have a job";
  } else {
    return "They fired me";
  }
}
let names = readLine().split(" ");
let scores = readLine().split(" ").map(Number);
console.log(assessHappiness(names, scores));
