let n = parseInt(readLine());
let map = new Map();
let alreadyMet = new Map();
for (let i = 0; i < n; i++) {
  let [name, game] = readLine().trim().split(" ");
  if (!alreadyMet.has(name)) {
    if (map.has(game)) {
      map.set(game, 1 + map.get(game));
    } else {
      map.set(game, 1 + 0);
    }
    alreadyMet.set(name, true);
  }
}
let maxLikes = Math.max(...map.values());
let favSports = [];
for (let m of map) {
  if (m[1] === maxLikes) {
    favSports.push(m[0]);
  }
}
favSports.sort();
console.log(favSports[0]);
console.log(map.get("football") ? map.get("football") : 0);
