let codes = [
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--..",
];
function MarsCode(word) {
  let code = "";
  for (let i = 0; i < word.length; i++) {
    code += codes[word.charCodeAt(i) - 97];
  }
  return code;
}

let t = parseInt(readLine());
while (t--) {
  let words = readLine().trim().split(" ");
  let m = new Map();
  for (let i = 0; i < words.length; i++) {
    let code = MarsCode(words[i]);
    m.set(code, true);
  }
  console.log(m.size);
}
