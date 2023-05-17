let n = parseInt(readLine())
let xor = 0
readLine().split(" ").map((element) => {
    element = parseInt(element)
    xor = xor ^ element   
})
console.log(xor)