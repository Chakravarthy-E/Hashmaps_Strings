let fs = require("fs");
const { toASCII } = require("punycode");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}
function Happiness(names, scores) {
  let totalScore = 0;
  let numPeople = 0;
  for (let i = 0; i < names.length; i++) {
    if (names[i] === "boss" || names[i] === "Boss") {
      totalScore += scores[i] * 2;
    } else {
      totalScore += scores[i];
    }
    numPeople++;
  }
  let averageScore = totalScore / numPeople;
  if (averageScore > 5) {
    console.log("I still have a job");
  } else {
    console.log("They fired me");
  }
}
let names = readLine().split(" ");
let scores = readLine().split(" ").map(Number);
Happiness(names, scores);
