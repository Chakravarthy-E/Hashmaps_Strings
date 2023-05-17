function validate(matrix) {
  for (let row = 0; row < 9; row++) {
    let m = new Map();
    for (let col = 0; col < 9; col++) {
      let ch = matrix[row][col];
      if (ch !== "." && m.has(ch)) {
        return "False";
      }
      m.set(ch);
    }
  }
  for (let col = 0; col < 9; col++) {
    let m = new Map();
    for (let row = 0; row < 9; row++) {
      let ch = matrix[row][col];
      if (ch !== "." && m.has(ch)) {
        return "False";
      }
      m.set(ch);
    }
  }
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      let m = new Map();
      for (let row = i; row < 3; row++) {
        for (let col = j; col < 3; col++) {
          let ch = matrix[row][col];
          if (ch !== "." && m.has(ch)) {
            return "False";
          }
          m.set(ch);
        }
      }
    }
  }
  return "True";
}
let sudoku = [];
for (i = 0; i < 9; i++) {
  sudoku.push(readLine().split(" "));
}
console.log(validate(sudoku));
