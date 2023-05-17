let n = parseInt(readLine());
let Arr = readLine().split(" ").map(Number);
Arr = Arr.sort();
let Count = 0;
let K = 1;
let map = new Map();
for (i = 0; i < n; i++) {
  if (map.has(Arr[i]) == false) {
    K = 1;
    map.set(Arr[i], K);
  } else {
    let x = Arr[i];
    K++;
    map.set(x, K);
  }
}
for (const X of map.values()) {
  Count = Count + parseInt(X / 2);
}
console.log(Count);
