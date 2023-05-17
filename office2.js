let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}
function Happiness(employees, scores) {
  let totalScore = 0;
  let numPeople = 0;
  for (let i = 0; i < employees.length; i++) {
    if (employees[i] === "boss" || employees[i] === "Boss") {
      totalScore += scores[i] * 2;
    } else {
      totalScore += scores[i];
    }
    numPeople++;
  }
  let averageScore = totalScore / numPeople;
  if (averageScore > 5) {
    return "I still have a job";
  } else {
    return "They fired me";
  }
}
let employees = readLine().split(" ");
let scores = readLine().split(" ").map(Number);
console.log(Happiness(employees, scores));
